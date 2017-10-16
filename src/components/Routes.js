import React from 'react'
import { Route } from 'react-router-dom'

import Contact from './Contact'
import RecursiveLink from './routers/RecursiveLink'
import Basics from './routers/1.Basics'
import UrlParams from './routers/2.UrlParameters'
import PreventTransition from './routers/5.PreventTransition'

const Routes = () => (
  <div>
    <Route path='/(warm|)' render={(props) => (
      <Contact name={'Parent gives my name'} {...props} height={178}/>
    )}/>
    <Route path='/basics' component={Basics}/>
    <Route path='/url-param' component={UrlParams}/>
    <Route path='/rec-link' component={RecursiveLink}/>
    <Route path='/prev-trans' component={PreventTransition}/>
  </div>
);

export default Routes
