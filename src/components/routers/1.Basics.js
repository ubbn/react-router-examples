import React from 'react';
import { 
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

const Basics = () => {
  return (
    <Router>
      <div className='thumbnail'>
        <h2>Basics</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/topics" >Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}

const Home = () => {
  return (
    <div>Home</div>
  );
}

const About = () => {
  return (
    <div>About</div>
  );
}

const TOPICS = [
  {id: 0, url: 'rest', topic: 'REST api'},
  {id: 1, url: 'devops', topic: 'Devops tools'},
  {id: 2, url: 'docker', topic: 'Docker'}
]

const Topics = ({ match }) => {
  return (
    <div>
      <ul>
        {TOPICS.map(x => (
          <li key={x.id}><Link to={`${match.url}/${x.url}`}>{x.topic}</Link></li>
        ))}
      </ul>

      <Route path={`${match.url}/:topicName`} component={Topic} />
      <Route exact path={match.url} render={() => (
        <h4>Please select a topic.</h4>
      )}/>
    </div>
  )
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicName}
    </h3>
  </div>
)

export default Basics
