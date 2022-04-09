import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistore, Store, setInternet} from './config/api';
import Root from './config/router/index';
import Internet from './components/internet';

const App = () => {
  const CekInternet = () => {
    const dispatch = useDispatch();
    const isOnline = useSelector(state => state.global.isInternet);

    const netStatus = () => {
      NetInfo.addEventListener(state => {
        const offline = !(state.isConnected && state.isInternetReachable);
        dispatch(setInternet(!offline));
      });
    };

    useEffect(() => {
      netStatus();
      return () => {
        netStatus();
      };
    }, []);

    return (
      <SafeAreaView style={{flex: 1}}>
        {!isOnline ? <Internet /> : <Root />}
      </SafeAreaView>
    );
  };

  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistore}>
        <CekInternet />
      </PersistGate>
    </Provider>
  );
};

export default App;
