import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUser, clearUser } from './redux/user/userActions';
import Routes from './routes';
import { registerAuthObserver } from './services/auth';
import { getUserProfile } from './controllers/user';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    registerAuthObserver(async (user) => {
      if (user) {
        console.log('El usuario ha hecho login: ', user);
        const userProfile = await getUserProfile(user.uid);
        dispatch(setUser(userProfile));
      } else {
        console.log('El usuario ha hecho logout: ');
        dispatch(clearUser());
      }
    })
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
