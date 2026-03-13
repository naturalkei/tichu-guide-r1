import { Router, Route, useParams, Navigate } from '@solidjs/router'
import { createEffect, type Component, type ParentComponent } from 'solid-js'
import { I18nProvider, useI18n } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'
import type { Locale } from './i18n/dict'

const LangWrapper: ParentComponent = (props) => {
  const { setLocale } = useI18n()
  const params = useParams()
  
  createEffect(() => {
    if (params.lang) {
      setLocale(params.lang as Locale)
    }
  })

  return <>{props.children}</>
}

const RootRedirect: Component = () => {
  const { locale } = useI18n()
  // Use a derived href to ensure reactivity
  return <Navigate href={`/${locale()}`} />
}

const App: Component = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <I18nProvider>
      <Router base={base}>
        {/* Language-prefixed routes */}
        <Route path="/:lang" component={LangWrapper}>
          <Route path="/" component={Home} />
          <Route path="/rules" component={Rules} />
          <Route path="/score" component={Score} />
          <Route path="/tips" component={Tips} />
        </Route>
        
        {/* Redirect root exactly to the current or default locale */}
        <Route path="/" component={RootRedirect} />
        
        {/* Fallback for any other path */}
        <Route path="*param" component={RootRedirect} />
      </Router>
    </I18nProvider>
  )
}

export default App
