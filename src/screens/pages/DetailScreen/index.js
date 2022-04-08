import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksId} from '../../../config/api';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {useIsFocused} from '@react-navigation/native';
import {Color} from '../../../config/utils/color';

import Header from './components/header';
import Banner from './components/banner';
import Rating from './components/rating';
import Overview from './components/overview';
import Loading from '../../../components/Loading';

const DetailScreen = ({route, navigation}) => {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const dataBooksId = useSelector(state => state.dataBooks.booksId);
  const getToken = useSelector(state => state.Auth.token);
  const isLoading = useSelector(state => state.global.isLoading);

  const {id} = route.params;

  useEffect(() => {
    dispatch(getBooksId(getToken, id));
  }, []);

  if (!isLoading) {
    return (
      <>
        <Header />
        <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
        <ScrollView style={styles.content}>
          <View style={styles.container}>
            <Banner data={dataBooksId} />
            <Rating data={dataBooksId} />
            <Overview data={dataBooksId} />
          </View>
        </ScrollView>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    height: 650,
    backgroundColor: Color.BACKGROUND_DETAIL,
    marginTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    backgroundColor: Color.SECOND_MAIN_COLOR,
  },
});
