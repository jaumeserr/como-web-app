import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import favsReducer from './favs/favsReducer';

const reducers = combineReducers({
  user: userReducer,
  cardData: cartReducer,
  favData: favsReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
