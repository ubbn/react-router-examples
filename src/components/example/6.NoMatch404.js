import React from 'react'
import { 
  Route, 
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

const NoMatch404 = ({match}) => (
  <Router>
    <div className='thumbnail'>
      <ul>
        <li><Link to={match.url} >Exact to match</Link></li>
        <li><Link to={`${match.url}/old-match`} >Will match, but to be redirected</Link></li>
        <li><Link to={`${match.url}/will-match`} >Will match</Link></li>
        <li><Link to={`${match.url}/will-not-match`} >Will not match</Link></li>
        <li><Link to={`${match.url}/will/not/watch/too`} >Will not match, too</Link></li>
      </ul>
      <hr/>
      <Switch>
        <Route exact path={match.url} component={Home} />
        <Redirect from={`${match.url}/old-match`} to={`${match.url}/will-match`} />
        <Route path={`${match.url}/will-match`} component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <p>A <code>Switch</code> renders first child <code>Route</code> that matches.</p>
    <p>A <code>Route</code> with no <code>path</code> always matches. In other words, it is catcall route.</p>
  </div>
)

const WillMatch = () => <h3>Matched!</h3>
const NoMatch = ({location}) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default NoMatch404
