import React from 'react'
import { 
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const PEEPS = [
  { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
  { id: 1, name: 'Sean', friends: [ 0, 3 ] },
  { id: 2, name: 'Kim', friends: [ 0, 1, 3 ] },
  { id: 3, name: 'David', friends: [ 1, 2 ] }
]

const findPerson = (id) => PEEPS.find(x => x.id == id)

const RecursiveLink = ({match}) => {
  return (
    <Router>
      <People match={{params: {id: 0}, url: match.url}} />
    </Router>
  )
}

const People = ({ match }) => {
  const person = findPerson(match.params.id)

  return (
    <div className='thumbnail'>
      <h3>Recursive link</h3>
      <b>{person.name}'s friends: </b>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`} >
              {findPerson(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={People} />
    </div>
  )
}

export default RecursiveLink
