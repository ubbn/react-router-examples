import React from 'react';
import { 
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { routes } from './Routes'

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><span className="glyphicon glyphicon-home"></span></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="https://reacttraining.com/react-router/">React Router</NavItem>
        <NavItem eventKey={2} href="https://react-bootstrap.github.io/">React Bootstrap</NavItem>
        <NavDropdown eventKey={3} title="Examples" id="basic-nav-dropdown">
          {routes.map((route, i) => (
            <LinkContainer key={i} to={route.path}>
              <MenuItem eventKey={i}>{route.title}</MenuItem>  
            </LinkContainer>
          ))}
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem style={{paddingRight: '15px'}} eventKey={1} 
          href="https://github.com/ubbn/react-router-examples" target='_blank'>On Github <span className="glyphicon glyphicon-new-window"></span></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
