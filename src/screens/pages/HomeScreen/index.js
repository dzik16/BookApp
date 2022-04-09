import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {useIsFocused} from '@react-navigation/native';
import {
  getBooksPopular,
  getBooksRecommended,
  setRefresh,
} from '../../../config/api';
import {Color} from '../../../config/utils/color';

import Header from './components/header';
import Recommended from './components/recommended';
import Popular from './components/popular';
import Loading from '../../../components/Loading';

const HomeScreen = () => {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const dataBooksRecommended = useSelector(
    state => state.dataBooks.booksRecommended,
  );

  const dataBooksPopular = useSelector(state => state.dataBooks.booksPopular);
  const getToken = useSelector(state => state.Auth.token);
  const isLoading = useSelector(state => state.global.isLoading);
  const isRefresh = useSelector(state => state.global.isRefresh);

  console.log(getToken);

  useEffect(() => {
    dispatch(getBooksRecommended(getToken, 6));
    dispatch(getBooksPopular(getToken));
  }, []);

  const onRefresh = () => {
    dispatch(setRefresh(true));
    dispatch(getBooksRecommended(getToken, 6));
    dispatch(getBooksPopular(getToken));
  };

  function recommended(i, j) {
    return parseFloat(j.average_rating) - parseFloat(i.average_rating);
  }

  if (!isLoading) {
    return (
      <View style={styles.main}>
        <Header />
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataBooksPopular.sort(recommended)}
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            refreshControl={
              <RefreshControl
                refreshing={isRefresh}
                onRefresh={() => onRefresh()}
              />
            }
            ListHeaderComponent={() => (
              <>
                <ScreenStatusBar
                  status={focus}
                  color={Color.SECOND_MAIN_COLOR}
                />
                <Recommended data={dataBooksRecommended} />
                <Text style={styles.popular}>Popular</Text>
              </>
            )}
            renderItem={({item, index}) => <Popular data={item} />}
          />
        </View>
      </View>
    );
  } else {
    return <Loading />;
  }
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
    backgroundColor: Color.BACKGROUND_DETAIL,
  },
  popular: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginVertical: 10,
  },
});
