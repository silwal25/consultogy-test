import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/App.css'

import Home from './components/Home'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/consult">
          <Home color="#8e8e8e" />
        </Route>
        <Route path="/business-trends">
          <Home color="#9d9e9c" />
        </Route>
        <Route path="/startup-ideas">
          <Home color="#acadab" />
        </Route>
        <Route path="/pitch-deck">
          <Home color="#b6b7b2" />
        </Route>
        <Route path="/motivation">
          <Home color="#bec1b2" />
        </Route>
        <Route path="/founder-assistance">
          <Home color="#c9ceb9" />
        </Route>
        <Route path="/funding">
          <Home color="#d6ddbe" />
        </Route>
        <Route path="/startup-hiring">
          <Home color="#e1eac2" />
        </Route>
        <Route path="/startup-branding">
          <Home color="#e8f4c1" />
        </Route>
        <Route path="/more">
          <Home color="#e3f4ab" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
