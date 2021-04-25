import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

const Routes = ({ userData }) => {
  return(
  <Router>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route path='/' render={() => <HomePage userData={userData} />} />
    </Switch>
  </Router>
  );
}

export default Routes;