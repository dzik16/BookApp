import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {useIsFocused} from '@react-navigation/native';
import {
  getBooksPopular,
  getBooksRecommended,
  logout,
} from '../../../config/api';
import {Color} from '../../../config/utils/color';

import Header from './components/header';
import Recommended from './components/recommended';
import Popular from './components/popular';

const HomeScreen = ({navigation}) => {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const dataBooksRecommended = useSelector(
    state => state.dataBooks.booksRecommended,
  );

  const dataBooksPopular = useSelector(state => state.dataBooks.booksPopular);
  const getToken = useSelector(state => state.Auth.token);

  console.log(getToken);

  useEffect(() => {
    dispatch(getBooksRecommended(getToken, 5));
    dispatch(getBooksPopular(getToken));
  }, []);

  const logOut = () => {
    dispatch(logout());
    navigation.replace('SplashScreen');
  };

  return (
    <View style={styles.main}>
      <Header />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataBooksPopular}
          numColumns={2}
          keyExtractor={(item, index) => String(index)}
          ListHeaderComponent={() => (
            <>
              <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
              <Recommended data={dataBooksRecommended} />
              <Text style={styles.popular}>Popular</Text>
            </>
          )}
          renderItem={({item, index}) => <Popular data={item} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.SECOND_MAIN_COLOR,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.THIRD_MAIN_COLORL,
  },
  popular: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginVertical: 10,
  },
});
