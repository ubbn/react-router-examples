import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => (
  <Jumbotron style={{paddingBottom: '15px', paddingTop: '15px', marginBottom: '20px'}}>
    <h1><Link to='/' style={{textDecoration: 'none'}}>React university!</Link></h1>
    <p>A collection of classic examples of React router, version 4</p>
    <p><Button bsStyle='primary'>Learn more</Button></p>
  </Jumbotron>  
);

export default Header;