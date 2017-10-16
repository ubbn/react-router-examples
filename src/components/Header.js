import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'

const Header = () => (
  <Jumbotron>
    <h1>React university!</h1>
    <p>This is an univesity where student learn to build awesome things by using React library. There is nothing they can't do with React. So only sky is the limit to create anything</p>
    <p><Button bsStyle='primary'>Learn more</Button></p>
  </Jumbotron>
);

export default Header;