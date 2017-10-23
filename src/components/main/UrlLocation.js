import React from 'react';
import { Breadcrumb } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { routes } from './Routes'
import { LinkContainer } from 'react-router-bootstrap'

const UrlLocation = () => (
  <Breadcrumb>
    <LinkContainer to='/'><Breadcrumb.Item>Home</Breadcrumb.Item></LinkContainer>
    {routes.map(x => (
      <Route path={x.path} render={({location})=> (
        <LinkContainer to={location.pathname}>
          <Breadcrumb.Item>{x.title}</Breadcrumb.Item>
        </LinkContainer>
        )
      }/>
    ))}
  </Breadcrumb>
);

export default UrlLocation;