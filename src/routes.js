import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CardDetail from './components/CardDetail';
import FavouritesPage from "./pages/favourites";
import CartList from "./pages/cart";
import AddProduct from './pages/addproducts';
import ProtectedRoute from './components/ProtectedRoute';

const Routes = () => {
  return(
  <Router>
    <Switch>
      <ProtectedRoute path='/addproduct' component={AddProduct} />
      <ProtectedRoute path='/cart' component={CartList} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <ProtectedRoute path='/favourites' component={FavouritesPage} />
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/:category' component={HomePage} />
      <Route exact path="/:category/:id" component={CardDetail} />
    </Switch>
  </Router>
  );
}

export default Routes;