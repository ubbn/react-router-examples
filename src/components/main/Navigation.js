import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { 
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

import { routes } from './Routes'

const Navigation = () => (
  <ListGroup>
    {routes.map((route, index) => (
      <LinkContainer to={route.path} key={index}>
        <ListGroupItem header={route.title}>{route.desc}</ListGroupItem>
      </LinkContainer>  
    ))}
  </ListGroup>
)

export default Navigation
