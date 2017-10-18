import React from 'react'
import { Route } from 'react-router-dom'

import RecursiveLink from './routers/RecursiveLink'
import Basics from './routers/1.Basics'
import UrlParams from './routers/2.UrlParameters'
import RedirectsAuth from './routers/3.RedirectsAuth'
import CustomLink from './routers/4.CustomLink'
import PreventTransition from './routers/5.PreventTransition'

const Routes = () => (
  <div>
    <Route path='/(basics|)' component={Basics}/>
    <Route path='/url-param' component={UrlParams}/>
    <Route path='/custom-link' component={CustomLink}/>
    <Route path='/redirect-auth' component={RedirectsAuth}/>
    <Route path='/prev-trans' component={PreventTransition}/>
    <Route path='/rec-link' component={RecursiveLink}/>
  </div>
)

export default Routes
