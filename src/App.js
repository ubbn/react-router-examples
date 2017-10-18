import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { 
  Row,
  Col,
  Grid,
} from 'react-bootstrap'

import Navigation from './components/main/Navigation'
import Routes from './components/main/Routes'
import Header from './components/main/Header'

class App extends Component {
  render () {
    return (
      <Router>
        <Grid>
          <Row><Col xs={12}><Header /></Col></Row>
          <Row>
            <Col xs={4}><Navigation/></Col>
            <Col xs={8}><Routes/></Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}

export default App
