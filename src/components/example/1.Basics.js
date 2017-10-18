import React from 'react'
import { 
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const Basics = ({match}) => {
  return (
    <Router>
      <div className='thumbnail'>
        <h2>Basics</h2>
        <ul>
          <li><Link to={match.url}>Home</Link></li>
          <li><Link to={`${match.url}/about`} >About</Link></li>
          <li><Link to={`${match.url}/topics`} >Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path={`${match.url}/`} component={Home} />
        <Route path={`${match.url}/about`} component={About} />
        <Route path={`${match.url}/topics`} component={Topics} />
      </div>
    </Router>
  )
}

const Home = () => <h4>Home</h4>
const About = () => <h4>About</h4>

const TOPICS = [
  {id: 0, url: 'rest', topic: 'REST api'},
  {id: 1, url: 'devops', topic: 'Devops tools'},
  {id: 2, url: 'docker', topic: 'Docker'}
]

const Topics = ({ match }) => {
  return (
    <div>
      <Route path={match.url} render={() => (<h4>Please select a topic.</h4>)}/>
      <ul>
        {TOPICS.map(x => (
          <li key={x.id}><Link to={`${match.url}/${x.url}`}>{x.topic}</Link></li>
        ))}
      </ul>

      <Route path={`${match.url}/:topicName`} component={Topic} />
    </div>
  )
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicName}</h3>
  </div>
)

export default Basics
