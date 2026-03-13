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
  // Initial detection: URL > localStorage > Browser Lang > 'ko'
  const getInitialLocale = (): Locale => {
    const pathParts = window.location.pathname.split('/')
    // Find the lang part after the base path (/tichu-guide-r1/...)
    const isProd = import.meta.env.PROD
    const langIdx = isProd ? 2 : 1
    const urlLang = pathParts[langIdx] as Locale
    
    if (dict[urlLang]) return urlLang

    const saved = localStorage.getItem(STORAGE_KEY) as Locale
    if (saved && dict[saved]) return saved

    const browserLang = navigator.language.split('-')[0] as Locale
    if (dict[browserLang]) return browserLang

    return 'ko'
  }

  const [locale, _setLocale] = createSignal<Locale>(getInitialLocale())

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = dict[locale()]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale()) return
    _setLocale(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    
    // Update URL to reflect the new locale
    const isProd = import.meta.env.PROD
    const basePath = isProd ? '/tichu-guide-r1/' : '/'
    const currentPath = window.location.pathname.replace(basePath, '')
    const parts = currentPath.split('/')
    
    // Replace or add the lang prefix
    if (dict[parts[0] as Locale]) {
      parts[0] = newLocale
    } else {
      parts.unshift(newLocale)
    }
    
    window.history.pushState({}, '', basePath + parts.join('/'))
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
