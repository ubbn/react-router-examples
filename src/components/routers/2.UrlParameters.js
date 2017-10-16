import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const UrlParams = () => {
  return (
    <Router>
      <div className='thumbnail' >
        <ul>
          <li><Link to="/net">Netflix</Link></li>
          <li><Link to="/air">Airbnb</Link></li>
          <li><Link to="/deep">Deepmind</Link></li>
        </ul>

        <Route path='/:id' component={Url} />
      </div>
    </Router>
  )
}

const Url = ({match}) => (
  <div>{match.params.id}</div>
)

export default UrlParams
