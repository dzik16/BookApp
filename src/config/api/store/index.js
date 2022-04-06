import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxLogger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import {authReducers} from '../reducer/index';

const persistConfig = {
  key: 'root',
  blacklist: ['dataBooks'],
  storage: AsyncStorage,
};

const rootReducer = {
  //   dataBooks: dataReducers,
  Auth: authReducers,
};

const configPersist = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);

export const Store = createStore(
  configPersist,
  applyMiddleware(ReduxThunk, reduxLogger),
);

export const Persistore = persistStore(Store);
