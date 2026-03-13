import { Router, Route, useNavigate, useLocation, useParams } from '@solidjs/router'
import { onMount, createEffect, type Component, type ParentComponent } from 'solid-js'
import { I18nProvider, useI18n } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'
import type { Locale } from './i18n/dict'

const LangWrapper: ParentComponent = (props) => {
  const { setLocale } = useI18n()
  const params = useParams()

  // Sync locale from URL parameter
  createEffect(() => {
    if (params.lang) {
      setLocale(params.lang as Locale)
    }
  })

  return <>{props.children}</>
}

const RootRedirect: Component = () => {
  const { locale } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  
  onMount(() => {
    // Only redirect if we are exactly at the root of the base path
    if (location.pathname === '/' || location.pathname === '') {
      navigate(`/${locale()}`, { replace: true })
    }
  })
  
  return null
}

const App: Component = () => {
  // Extract base from import.meta.env.BASE_URL (e.g., "/tichu-guide-r1/")
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <I18nProvider>
      <Router base={base}>
        {/* Standard nested route structure */}
        <Route path="/:lang" component={LangWrapper}>
          <Route path="/" component={Home} />
          <Route path="/rules" component={Rules} />
          <Route path="/score" component={Score} />
          <Route path="/tips" component={Tips} />
        </Route>
        
        {/* Root and Fallback redirects */}
        <Route path="/" component={RootRedirect} />
        <Route path="*param" component={RootRedirect} />
      </Router>
    </I18nProvider>
  )
}

export default App
