import { createContext, useContext, createSignal } from 'solid-js'
import type { ParentComponent } from 'solid-js'
import { dict } from '../i18n/dict'
import type { Locale } from '../i18n/dict'

type I18nContextType = {
  locale: () => Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>()

const STORAGE_KEY = 'tichu-guide-lang'

export const I18nProvider: ParentComponent = (props) => {
  const getInitialLocale = (): Locale => {
    // 1. Check URL path
    const pathParts = window.location.pathname.split('/').filter(Boolean)
    const urlLang = pathParts.find(part => dict[part as Locale]) as Locale
    if (urlLang) return urlLang

    // 2. Check localStorage
    const saved = localStorage.getItem(STORAGE_KEY) as Locale
    if (saved && dict[saved]) return saved

    // 3. Check browser language
    const browserLang = navigator.language.split('-')[0] as Locale
    if (dict[browserLang]) return browserLang

    return 'en'
  }

  const [locale, _setLocale] = createSignal<Locale>(getInitialLocale())

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = dict[locale()]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        value = undefined
        break
      }
    }
    return typeof value === 'string' ? value : key
  }

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale()) return
    _setLocale(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
  }

  const value: I18nContextType = {
    locale,
    setLocale,
    t
  }

  return (
    <I18nContext.Provider value={value}>
      {props.children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
