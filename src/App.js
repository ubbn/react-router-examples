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
import UrlLocation from './components/main/UrlLocation'
import ForkMe from './components/main/ForkMe'
import Footer from './components/main/Footer'
import NavBar from './components/main/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <Grid>
          <Row><Col xs={12}><NavBar /></Col></Row>
          <Row><Col xs={12}><Header /></Col></Row>
          <Row><Col xs={12}><UrlLocation/></Col></Row>
          <Row>
            <Col xs={4}><Navigation/></Col>
            <Col xs={8}><Routes/></Col>
          </Row>
          <ForkMe/>
          <Footer />
        </Grid>
      </Router>
    )
  }
}

export default App
