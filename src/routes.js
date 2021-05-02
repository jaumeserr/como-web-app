import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CardDetail from './components/CardDetail';
import FavouritesPage from "./pages/favourites";

const Routes = () => {
  return(
  <Router>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path="/:category/:id" component={CardDetail} />
      {/* <Route exact path="/detail/:id" render={(props) => (<CardDetail {...props} />)} /> */}
      <Route exact path='/favourites' component={FavouritesPage} />
      <Route path='/:category' component={HomePage} />
    </Switch>
  </Router>
  );
}

export default Routes;