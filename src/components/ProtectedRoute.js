import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ path, component }) => {
  const user = useSelector(state => state.user);
  
  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: path }
        }} 
      />
    )
  }

  return <Route path={path} component={component} />
}

export default ProtectedRoute;
