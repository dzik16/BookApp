import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooksId} from '../../../config/api';

const DetailScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const dataBooksId = useSelector(state => state.dataBooks.booksId);
  const getToken = useSelector(state => state.Auth.token);

  const {id} = route.params;

  useEffect(() => {
    dispatch(getDataBooksId(getToken, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>{dataBooksId.title}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
