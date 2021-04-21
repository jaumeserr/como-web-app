import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import CardDetail from "./components/CardDetail";
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
          <Route exact path="/detail" component={CardDetail} />
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
