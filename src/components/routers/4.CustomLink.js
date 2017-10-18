import React from 'react'
import { 
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const Home = () => <div><h3>Home</h3></div>
const About = () => <div><h3>About</h3></div>

const CustomLink = ({match}) => (
  <Router>
    <div className='thumbnail'>
      <OldSchoolLink to={match.url} activeOnlyWhenExact={true} label={'Home'} />
      <OldSchoolLink to={`${match.url}/about`} label={'About'} />
      <hr/>
      <Route exact path={match.url} component={Home} />
      <Route path={`${match.url}/about`} component={About} />
    </div>
  </Router>
)

const OldSchoolLink = ({ to, label, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
    <div>
      {match ? '>' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
)

export default CustomLink
