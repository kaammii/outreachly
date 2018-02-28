import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import App from './App';
import Searched from './Searched';
        
const ParentApp = () => (
  <div>

    {/* App routing goes here!! */}

    <Route exact path="/" component={App} />
    <Route path="/search" component={Searched} />
    {/* <Route path="/signup" component={SignUp} /> */}
     {/* <Route path="/dashboard" component={Dashboard} /> */}
	  {/*<Route path='/dashboardClient/:firstid/:secondid' component={DashboardClient} /> */}
  </div>
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  )
};

export const DashboardRoute = () => {
  return (
    <Switch>
      {/*<Route exact path="/dashboard" render={(props) => (<Main {...props} template={processTemplate} auth={auth} />)} /> */}
      {/* <Route exact path="/dashboard" component={Topbar} />       */}
 
    </Switch>
  )
}



export default AppRoutes;