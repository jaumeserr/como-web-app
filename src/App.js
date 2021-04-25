import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUser, clearUser } from './redux/user/userActions';
import { registerAuthObserver } from './services/auth';
import { getUserProfile } from './controllers/user';
import Routes from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    registerAuthObserver(async (user) => {
      if (user) {
        console.log("🚀 ~ file: App.js ~ line 13 ~ registerAuthObserver ~ user", user)
        console.log("El usuario ha hecho login")
        console.log("El usuario: ", user.uid)
        // const userProfile = await getUserProfile(user.uid);
        dispatch(setUser(user.uid));
      } else {
        console.log("🚀 ~ file: App.js ~ line 15 ~ registerAuthObserver ~ user", user)
        console.log("El usuario ha hecho logout")
        dispatch(clearUser());
      }
    })
  }, [])

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
