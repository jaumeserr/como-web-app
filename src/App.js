import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

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
