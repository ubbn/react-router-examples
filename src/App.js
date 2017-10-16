import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { 
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'
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
      <Router>
        <div className="container">
          <ListGroup>
            <LinkContainer to='/warm'><ListGroupItem header='Warmup'>Lets warm up routing</ListGroupItem></LinkContainer>
            <LinkContainer to='/basics'><ListGroupItem header='Basics'>Basics Routing example</ListGroupItem></LinkContainer>
            <LinkContainer to='/url-param'><ListGroupItem header='Url parameters'>Passing Url parameters </ListGroupItem></LinkContainer>
            <LinkContainer to='/rec-link'><ListGroupItem header='Recursive links'>A way to use recursively renders following link</ListGroupItem></LinkContainer>
            <LinkContainer to='/prev-trans'><ListGroupItem header='Prevent transition'>A way to avoid transitions</ListGroupItem></LinkContainer>
          </ListGroup>

          {/* <Contact name={'Click me'} height={178} /> */}
          <Route path='/warm' render={(props) => (<Contact name={'Parent gives my name'} {...props} height={178}/>)}/>
          <Route path='/basics' component={Basics}/>
          <Route path='/url-param' component={UrlParams}/>
          <Route path='/rec-link' component={RecursiveLink}/>
          <Route path='/prev-trans' component={PreventTransition}/>
        </div>
      </Router>
    )
  }
}

export default App
