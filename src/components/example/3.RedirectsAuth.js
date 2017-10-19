import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { 
  Route, 
  BrowserRouter as Router,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const RedirectsAuth = ({match}) => {
  return (
    <Router>
      <div className='thumbnail'>
        <AuthButton />
        <ul>
          <li><Link to={`${match.url}/public`} >Public page</Link></li>
          <li><Link to={`${match.url}/protected`} >Protected page</Link></li>
        </ul>
        <Route path={`${match.url}/public`} component={Public}/>
        <Route path={`${match.url}/login`} component={Login}/>
        <PrivateRoute path={`${match.url}/protected`} component={Protected}/>
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticated: false,  
  authenticate(callback) {
    this.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  signout(callback) {
    this.isAuthenticated = false
    setTimeout(callback, 100) // fake async
  }
}

const AuthButton = withRouter(({history, match}) => (
  fakeAuth.isAuthenticated ? (
    <div>
      <Alert bsStyle='success'>Welcome!</Alert>
      <Button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</Button>
    </div>
  ) : (
    <Alert bsStyle='warning'>You are NOT logged in</Alert>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: 'login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public page</h3>
const Protected = () => <h3>Protected page</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => { 
      this.setState({ redirectToReferrer: true }) 
    })
  }

  render() {
    const { from } = this.props.location.state || { from: {pathname: '/'}}
    const { redirectToReferrer} = this.state

    if (redirectToReferrer)
      return <Redirect to={from} />

    return(
      <div>
        <Alert bsStyle='danger'>You must log in to view the page at <code>{from.pathname}</code></Alert>
        <Button onClick={this.login}>Log in</Button>
      </div>
    )
  }
}

export default RedirectsAuth
