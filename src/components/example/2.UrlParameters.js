import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const UrlParams = ({match}) => {
  return (
    <Router>
      <div className='thumbnail' >
        <h2>Url parameters</h2>
        <ul>
          <li><Link to={`${match.url}/net`}>Netflix</Link></li>
          <li><Link to={`${match.url}/air`}>Airbnb</Link></li>
          <li><Link to={`${match.url}/deep`}>Deepmind</Link></li>
        </ul>

        <p><Route path={`${match.url}/:id`} component={Url} /></p>
      </div>
    </Router>
  )
}

const Url = ({match}) => (
  <div>{match.params.id}</div>
)

export default UrlParams
