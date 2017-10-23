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

export const routes = [
  { path: '/basics',
    component: Basics,
    title: 'Basics',
    desc: 'Basics Routing example'
  },
  { path: '/url-param',    
    component: UrlParams,
    title: 'Url parameters',
    desc: 'Passing Url parameters '
  },
  { path: '/custom-link',    
    component: CustomLink,
    title: 'Custom link',
    desc: 'Customized link style'
  },
  { path: '/redirect-auth',    
    component: RedirectsAuth,
    title: 'Redirects (Auth)',
    desc: 'Redirecting to authenticate'
  },
  { path: '/prev-trans',    
    component: PreventTransition,
    title: 'Prevent transition',
    desc: 'A way to avoid transitions'
  },
  { path: '/no-match',    
    component: NoMatch404,
    title: 'No Match 404',
    desc: 'Handling case of no match/404'
  },
  { path: '/rec-link',    
    component: RecursiveLink,
    title: 'Recursive links',
    desc: 'A way to use recursively renders following link'
  },
  { path: '/sidebar',    
    component: SideBar,
    title: 'Sidebar',
    desc: 'Rendering in main and side bar'
  },
  { path: '/animated',    
    component: AnimatedTransition,
    title: 'Animated Transition',
    desc: 'Animates transition using package react-transition-group'
  },
  { path: '/ambiguous',    
    component: AmbiguousMatch,
    title: 'Ambiguous Match',
    desc: 'Ambiguous match'
  },
  { path: '/route-config',    
    component: RouteConfig,
    title: 'Route Config',
    desc: 'React routes can be created from config'
  },
  { path: '/modal-gallery',    
    component: ModalGallery,
    title: 'Modal Gallery',
    desc: 'Modal gallery, two screens at one url'
  },
  { path: '/static-router',    
    component: StaticRouter,
    title: 'Static Router',
    desc: 'Static router example'
  }
]

const Routes = () => (
  <div className='thumbnail' style={{padding: '20px'}}>
    {routes.map(route => (
      <Route path={route.path} component={route.component}/>
    ))}
    <Route exact path='/' render={() => (
      <div>
        <p>Current path is exactly matched with <code>/</code></p>
        <p>Choose examples from right</p>
      </div>
    )}/>
  </div>
)

export default Routes
