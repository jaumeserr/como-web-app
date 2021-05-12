import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import index from '../index';

const reducers = combineReducers({
  user: userReducer,
  cardData: cartReducer,
})

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({
      getFirestore,
      getFirebase
    })),
    reduxFirestore(index),
    reactReduxFirebase(index),
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
