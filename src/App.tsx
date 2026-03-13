import { Router, Route, useNavigate } from '@solidjs/router'
import { onMount, type Component } from 'solid-js'
import { I18nProvider, useI18n } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'

const AppContent: Component = () => {
  const { locale } = useI18n()
  const navigate = useNavigate()

  // Redirect root to current locale
  onMount(() => {
    if (window.location.pathname === import.meta.env.BASE_URL || window.location.pathname === import.meta.env.BASE_URL + '/') {
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
  return (
    <I18nProvider>
      <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <AppContent />
      </Router>
    </I18nProvider>
  )
}

export default App
