import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import CardDetail from "./components/CardDetail";
import CategoryLayout from "./layouts/CategoryLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from './pages/index';

function App() {
  return (
    <>
      {/* <Router>
        <MainLayout>
          <Route path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/detail" component={CardDetail} />
        </MainLayout>
      </Router> */}
      <Router>
        <CategoryLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/detail" component={CardDetail} />
        </CategoryLayout>
      </Router>
    </>
  );
}

export default App;
