import { Router, Route, useNavigate } from '@solidjs/router'
import { onMount, type Component } from 'solid-js'
import { I18nProvider, useI18n } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'

const RootRedirect: Component = () => {
  const { locale } = useI18n()
  const navigate = useNavigate()
  
  onMount(() => {
    navigate(`/${locale()}`, { replace: true })
  })
  
  return null
}

const App: Component = () => {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Route path="/" component={Home} />
      <Route path="/rules" component={Rules} />
      <Route path="/score" component={Score} />
      <Route path="/tips" component={Tips} />
    </Router>
  );
};

  return (
    <I18nProvider>
      <Router base={base}>
        <Route path="/:lang">
          <Route path="/" component={Home} />
          <Route path="/rules" component={Rules} />
          <Route path="/score" component={Score} />
          <Route path="/tips" component={Tips} />
        </Route>
        <Route path="/" component={RootRedirect} />
        {/* Fallback for any other path */}
        <Route path="*param" component={RootRedirect} />
      </Router>
    </I18nProvider>
  )
}

export default App
