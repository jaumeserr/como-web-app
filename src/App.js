import { useEffect, useState } from 'react';

import { registerAuthObserver } from './services/auth';
import { getUserProfile } from './controllers/user';
import Routes from './routes';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    registerAuthObserver(async (user) => {
      if (user) {
        console.log("🚀 ~ file: App.js ~ line 13 ~ registerAuthObserver ~ user", user)
        console.log("El usuario ha hecho login")
        setUserData(user.uid)
      } else {
        console.log("🚀 ~ file: App.js ~ line 15 ~ registerAuthObserver ~ user", user)
        console.log("El usuario ha hecho logout")
      }
    })
  }, [])

  return (
    <div>
      <Routes userData={userData} />
    </div>
  );
}

export default App;
