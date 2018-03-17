import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import App from './App';
import Searched from './Searched';
import Faq from './Faq';
import Login from './Login';
import About from './About';
import Customers from './Customers';
import NewPitch from './NewPitch';
import Favorites from './Favorites';

const ParentApp = () => (
  <div>

    {/* App routing goes here!! */}

    <Route exact path="/" component={App} />
    <Route path="/search" component={Searched} />
    <Route path="/faq" component={Faq} />
    <Route path="/login" component={Login} />
    <Route path="/about" component={About} />
    <Route path="/customers" component={Customers} />
    <Route path="/newpitch" component={NewPitch} />
    <Route path="/favorites" component={Favorites} />
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