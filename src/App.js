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
import PreventTransition from './components/routers/5.PreventTransition'

class App extends Component {
  render () {
    return (
      <div className="container">
        <Contact name={'Click me'} height={178} />
        <Basics />
        <UrlParams />
        <RecursiveLink />
        <PreventTransition />
      </div>
    )
  }
}

export default App
