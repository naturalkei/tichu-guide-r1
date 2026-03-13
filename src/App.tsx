import { Router, Route, useNavigate, useLocation } from '@solidjs/router'
import { onMount, type Component } from 'solid-js'
import { I18nProvider, useI18n } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'

const AppContent: Component = () => {
  const { locale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()

  // Redirect root or invalid language paths
  onMount(() => {
    const path = location.pathname
    if (path === '/' || path === '') {
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
  // Extract base from import.meta.env.BASE_URL (e.g., "/tichu-guide-r1/")
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <I18nProvider>
      <Router base={base}>
        <AppContent />
      </Router>
    </I18nProvider>
  )
}

export default App
