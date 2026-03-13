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
  // Robust detection: URL parts > localStorage > Browser Lang > 'ko'
  const getInitialLocale = (): Locale => {
    const pathParts = window.location.pathname.split('/').filter(Boolean)
    // Check if any part of the path matches a supported locale
    const urlLang = pathParts.find(part => dict[part as Locale]) as Locale
    
    if (urlLang) return urlLang

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
    const baseUrl = import.meta.env.BASE_URL // e.g. "/tichu-guide-r1/"
    const currentPath = window.location.pathname
    
    // Construct new path: baseUrl + newLocale + (rest of path after old locale)
    const pathWithoutBase = currentPath.startsWith(baseUrl) 
      ? currentPath.substring(baseUrl.length) 
      : currentPath.startsWith('/') ? currentPath.substring(1) : currentPath
    
    const parts = pathWithoutBase.split('/').filter(Boolean)
    
    if (parts.length > 0 && dict[parts[0] as Locale]) {
      parts[0] = newLocale
    } else {
      parts.unshift(newLocale)
    }
    
    const nextPath = (baseUrl.endsWith('/') ? baseUrl : baseUrl + '/') + parts.join('/')
    window.history.pushState({}, '', nextPath)
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
