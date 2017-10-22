import React from 'react'
import { Route } from 'react-router-dom'

import Basics from '../example/1.Basics'
import UrlParams from '../example/2.UrlParameters'
import RedirectsAuth from '../example/3.RedirectsAuth'
import CustomLink from '../example/4.CustomLink'
import PreventTransition from '../example/5.PreventTransition'
import NoMatch404 from '../example/6.NoMatch404'
import RecursiveLink from '../example/7.RecursiveLink'
import SideBar from '../example/8.SideBar'
import AnimatedTransition from '../example/9.AnimatedTransition'
import AmbiguousMatch from '../example/10.AmbiguousMatch'
import RouteConfig from '../example/11.RouteConfig'
import ModalGallery from '../example/12.ModalGallery'
import StaticRouter from '../example/13.StaticRouter'

const Routes = () => (
  <div className='thumbnail'>
    <Route path='/(basics|)' component={Basics}/>
    <Route path='/url-param' component={UrlParams}/>
    <Route path='/custom-link' component={CustomLink}/>
    <Route path='/redirect-auth' component={RedirectsAuth}/>
    <Route path='/prev-trans' component={PreventTransition}/>
    <Route path='/no-match' component={NoMatch404}/>
    <Route path='/rec-link' component={RecursiveLink}/>
    <Route path='/sidebar' component={SideBar}/>
    <Route path='/animated' component={AnimatedTransition}/>
    <Route path='/ambiguous' component={AmbiguousMatch}/>
    <Route path='/route-config' component={RouteConfig}/>
    <Route path='/modal-gallery' component={ModalGallery}/>
    <Route path='/static-router' component={StaticRouter}/>
  </div>
)

export default Routes
