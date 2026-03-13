import { Router, Route } from "@solidjs/router";
import type { Component } from 'solid-js';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Score from './pages/Score';
import Tips from './pages/Tips';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/rules" component={Rules} />
      <Route path="/score" component={Score} />
      <Route path="/tips" component={Tips} />
    </Router>
  );
};

export default App;
