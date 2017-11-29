import React from 'react';
import { Breadcrumb } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { routes } from './Routes'
import { LinkContainer } from 'react-router-bootstrap'

const UrlLocation = () => (
  <Breadcrumb>
    <LinkContainer to='/'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
    {routes.map((route, index) => (
      <Route path={route.path} key={index} render={({location})=> (
        <LinkContainer to={location.pathname}>
          <Breadcrumb.Item>{route.title}</Breadcrumb.Item>
        </LinkContainer>
        )
      }/>
    ))}
  </Breadcrumb>
);

export default UrlLocation;