import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

const Routes = ({ userName }) => {
  return(
  <Router>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route path='/' render={() => <HomePage name={userName} />} />
      {/* <Route path='/' component={HomePage} /> */}
    </Switch>
  </Router>
  );
}

export default Routes;