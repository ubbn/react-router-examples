import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => (
  <Jumbotron style={{paddingBottom: '15px', paddingTop: '15px', marginBottom: '20px'}}>
    <h1><Link to='/' style={{textDecoration: 'none'}}>React Router 4</Link></h1>
    <p>A collection of classic examples of declarative routing in React. Here react bootstrap module is used to summarize and decorate original examples which can be found on <a target="_blank" href="https://reacttraining.com/react-router/web/example/basic">react training</a>.</p>
    <p><Button bsStyle='primary' href='https://reacttraining.com/react-router'>Learn more</Button></p>
  </Jumbotron>
);

export default Header;