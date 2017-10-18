import React, {Component} from 'react'
import { Button, FormControl, Checkbox } from 'react-bootstrap'
import { 
  Route, 
  BrowserRouter as Router,
  Link,
  Prompt
} from 'react-router-dom'

const ButtonComp = () => (
  <Button bsStyle='primary' >Press</Button>
)

const CheckComp = () => (
  <Checkbox>Check me!</Checkbox>
)

const PreventTransit = ({match}) => (
  <Router>
    <div className='thumbnail' >
      <h3>Prevent transition</h3>
      <ul>
        <li><Link to={`${match.url}/button`}>Button</Link></li>
        <li><Link to={`${match.url}/check`}>Checkbox</Link></li>
        <li><Link to={`${match.url}/text`}>Textarea</Link></li>
      </ul>
      <Route path={`${match.url}/button`} component={ButtonComp}/>
      <Route path={`${match.url}/check`} component={CheckComp}/>
      <Route path={`${match.url}/text`} component={TextComp}/>
    </div>
  </Router>
)

class TextComp extends Component {
  state = {
    isBlocking: false
  }

  render () {
    return (
      <form onSubmit={event => {
        event.preventDefault()
        event.target.reset()
        this.setState({
          isBlocking: false
        })
      }}>
        <Prompt when={this.state.isBlocking} message={location =>
          (`Are you sure to go to ${location.pathname}?`)} />
        <p>Blocking? {this.state.isBlocking ? 'Yes' : 'Nope'}</p>

        <p>
          <FormControl componentClass='textarea' placeholder='insert text' 
            onChange={ event => {
              this.setState({isBlocking: event.target.value.length > 0})
            }
          }/>
        </p>
        <p>
          <button>Reset block</button>
        </p>
      </form>
    )
  }
}

export default PreventTransit
