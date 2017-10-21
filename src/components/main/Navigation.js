import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { 
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

const Navigation = () => (
  <ListGroup>
    <LinkContainer to='/basics'><ListGroupItem header='Basics'>Basics Routing example</ListGroupItem></LinkContainer>
    <LinkContainer to='/url-param'><ListGroupItem header='Url parameters'>Passing Url parameters </ListGroupItem></LinkContainer>
    <LinkContainer to='/redirect-auth'><ListGroupItem header='Redirects (Auth)'>Redirecting to authenticate </ListGroupItem></LinkContainer>
    <LinkContainer to='/custom-link'><ListGroupItem header='Custom link'>Cutom link component</ListGroupItem></LinkContainer>
    <LinkContainer to='/prev-trans'><ListGroupItem header='Prevent transition'>A way to avoid transitions</ListGroupItem></LinkContainer>
    <LinkContainer to='/no-match'><ListGroupItem header='No Match 404'>To handle no match/404</ListGroupItem></LinkContainer>
    <LinkContainer to='/rec-link'><ListGroupItem header='Recursive links'>A way to use recursively renders following link</ListGroupItem></LinkContainer>
    <LinkContainer to='/sidebar'><ListGroupItem header='Sidebar'>Rendering in main and side bar</ListGroupItem></LinkContainer>
    <LinkContainer to='/animated'><ListGroupItem header='Animated Transition'>Animates transition using package react-transition-group</ListGroupItem></LinkContainer>
    <LinkContainer to='/ambiguous'><ListGroupItem header='Ambiguous match'>Ambiguous match</ListGroupItem></LinkContainer>
    <LinkContainer to='/route-config'><ListGroupItem header='Route config'>React routes can be created from config</ListGroupItem></LinkContainer>
  </ListGroup>
)

export default Navigation
