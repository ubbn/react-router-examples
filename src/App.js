import React, { Component } from 'react'
import { 
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import { Button} from 'react-bootstrap'
import Contact from './components/Contact'
import About from './components/About'
import RecursiveLink from './components/routers/RecursiveLink'
import Basics from './components/routers/1.Basics'
import UrlParams from './components/routers/2.UrlParameters'

class App extends Component {
  render () {
    return (
      <div className="container">
        <About name={'Bold'} age={22}/>
        <Contact height={178} />
        <RecursiveLink />
        <Basics />
        <UrlParams />
      </div>
    )
  }
}

export default App
