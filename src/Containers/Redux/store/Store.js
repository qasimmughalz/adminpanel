import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from '../reducers/AuthReducer';
import VendorsReducer from '../reducers/VendorReducer';

const persistConfig = {
  key: 'admin-dashboard',
  storage,
};

const reducers = combineReducers({
  Auth: AuthReducer,
  admin: VendorsReducer,
});
const middleware = [thunk];
let store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(...middleware))
);
store.__PERSISTOR = persistStore(store);

export default store;
