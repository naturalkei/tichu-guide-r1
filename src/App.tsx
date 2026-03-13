import { Router, Route } from '@solidjs/router'
import type { Component } from 'solid-js'
import { I18nProvider } from './contexts/I18nContext'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'

const App: Component = () => {
  return (
    <I18nProvider>
      <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Route path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/score" component={Score} />
        <Route path="/tips" component={Tips} />
      </Router>
    </I18nProvider>
  )
}

export default App
