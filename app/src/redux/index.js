import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
  cardData: cartReducer,
})

const middleware = [
  applyMiddleware(thunk),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

const store = createStore(
  reducers,
  compose(...middleware)
);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
