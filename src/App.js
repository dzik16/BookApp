import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistore, Store} from './config/api';
import Root from './config/router/index';

// const Splash = () => {
//   const dispatch = useDispatch();
// }

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistore}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
