import { Router, Route } from '@solidjs/router'
import type { Component } from 'solid-js'
import { I18nextProvider } from 'solid-i18next'
import i18n from './i18n/config'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Score from './pages/Score'
import Tips from './pages/Tips'

const App: Component = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Route path="/" component={Home} />
        <Route path="/rules" component={Rules} />
        <Route path="/score" component={Score} />
        <Route path="/tips" component={Tips} />
      </Router>
    </I18nextProvider>
  )
}

export default App
