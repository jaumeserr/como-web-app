import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import favsReducer from './favs/favsReducer';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
  cardData: cartReducer,
  favData: favsReducer
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
