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
  
  console.log('App: LangWrapper matched. Params:', JSON.stringify(params))

  createEffect(() => {
    if (params.lang) {
      console.log('App: Syncing locale from URL param:', params.lang)
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
    console.log('App: RootRedirect matched. Path:', location.pathname)
    // Only redirect if we are at the root of the relative path
    if (location.pathname === '/' || location.pathname === '') {
      const target = `/${locale()}`
      console.log('App: Redirecting from root to:', target)
      navigate(target, { replace: true })
    }
  })
  
  return null
}

const App: Component = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  console.log('App: Initializing. BASE_URL:', import.meta.env.BASE_URL, 'Router Base:', base)

  return (
    <I18nProvider>
      <Router base={base}>
        {/* The lang-prefixed routes */}
        <Route path="/:lang" component={LangWrapper}>
          <Route path="/" component={Home} />
          <Route path="/rules" component={Rules} />
          <Route path="/score" component={Score} />
          <Route path="/tips" component={Tips} />
        </Route>
        
        {/* Handle root and other paths */}
        <Route path="/" component={RootRedirect} />
        <Route path="*param" component={RootRedirect} />
      </Router>
    </I18nProvider>
  )
}

export default App
