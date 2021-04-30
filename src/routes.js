import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ErrorPage from './pages/error';
import CardDetail from './components/CardDetail';

const Routes = () => {
  return(
  <Router>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/error' component={ErrorPage} />
      <Route exact path="/detail/:id" component={CardDetail} />
      {/* <Route exact path="/detail/:id" render={(props) => (<CardDetail {...props} />)} /> */}
      <Route path='/:category' component={HomePage} />
    </Switch>
  </Router>
  );
}

export default Routes;