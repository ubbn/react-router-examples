import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { 
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

const Navigation = () => (
  <ListGroup>
    <LinkContainer to='/warm'><ListGroupItem header='Warmup'>Lets warm up routing</ListGroupItem></LinkContainer>
    <LinkContainer to='/basics'><ListGroupItem header='Basics'>Basics Routing example</ListGroupItem></LinkContainer>
    <LinkContainer to='/url-param'><ListGroupItem header='Url parameters'>Passing Url parameters </ListGroupItem></LinkContainer>
    <LinkContainer to='/rec-link'><ListGroupItem header='Recursive links'>A way to use recursively renders following link</ListGroupItem></LinkContainer>
    <LinkContainer to='/prev-trans'><ListGroupItem header='Prevent transition'>A way to avoid transitions</ListGroupItem></LinkContainer>
  </ListGroup>
)

export default Navigation
