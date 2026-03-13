import { Router, Route, useNavigate, useLocation, useParams } from '@solidjs/router'
import { onMount, createEffect, type Component } from 'solid-js'
import { I18nProvider, useI18n } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'
import type { Locale } from './i18n/dict'

const AppContent: Component = () => {
  const { locale, setLocale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  // 1. Sync locale from URL parameter
  createEffect(() => {
    if (params.lang) {
      setLocale(params.lang as Locale)
    }
  })

  // 2. Redirect root to current locale
  onMount(() => {
    if (location.pathname === '/' || location.pathname === '') {
      navigate(`/${locale()}`, { replace: true })
    }
  })

  return (
    <Route path="/:lang">
      <Route path="/" component={Home} />
      <Route path="/rules" component={Rules} />
      <Route path="/score" component={Score} />
      <Route path="/tips" component={Tips} />
    </Route>
  )
}

const App: Component = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <I18nProvider>
      <Router base={base}>
        <AppContent />
        <Route path="/" component={RootRedirect} />
        <Route path="*param" component={RootRedirect} />
      </Router>
    </I18nProvider>
  )
}

// Separate component for clarity in Router
const RootRedirect: Component = () => {
  const { locale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  
  onMount(() => {
    if (location.pathname === '/' || location.pathname === '') {
      navigate(`/${locale()}`, { replace: true })
    }
  })
  
  return null
}

export default App
