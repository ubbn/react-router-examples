import React, { Component } from 'react'
import { 
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import Contact from './components/Contact'
import RecursiveLink from './components/routers/RecursiveLink'
import Basics from './components/routers/1.Basics'
import UrlParams from './components/routers/2.UrlParameters'

class App extends Component {
  render () {
    return (
      <div className="container">
        <h3>Simple form</h3>
        <Contact name={'Click me'} height={178} />
        <Basics />
        <UrlParams />
        <RecursiveLink />
      </div>
    )
  }
}

export default App
