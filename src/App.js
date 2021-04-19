import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
