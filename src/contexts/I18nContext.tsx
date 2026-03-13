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

export const I18nProvider: ParentComponent = (props) => {
  const [locale, setLocale] = createSignal<Locale>('ko')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = dict[locale()]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
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
