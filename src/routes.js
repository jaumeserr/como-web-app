import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CardDetail from './components/CardDetail';
import FavouritesPage from "./pages/favourites";
import Home from './pages/homeOriginal';
import CartList from "./pages/cart";

const Routes = () => {
  return(
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/cart' component={CartList} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route exact path='/:category' component={HomePage} />
      <Route exact path="/:category/:id" component={CardDetail} />
      <Route path='/favourites' component={FavouritesPage} />
    </Switch>
  </Router>
  );
}

export default Routes;