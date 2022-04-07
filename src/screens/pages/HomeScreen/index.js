import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataBooksPopular,
  getDataBooksRecommended,
  logout,
} from '../../../config/api';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const dataBooksRecommended = useSelector(
    state => state.dataBooks.booksRecommended,
  );

  const dataBooksPopular = useSelector(state => state.dataBooks.booksPopular);
  const getToken = useSelector(state => state.Auth.token);

  console.log(getToken);

  useEffect(() => {
    dispatch(getDataBooksRecommended(getToken, 5));
    dispatch(getDataBooksPopular(getToken));
  }, []);

  const logOut = () => {
    dispatch(logout());
    navigation.replace('SplashScreen');
  };

  return (
    <View style={styles.recommended}>
      <Text style={styles.label}>Recommended</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dataBooksRecommended.map(item => (
          <View style={{marginHorizontal: 3}} key={item.id}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailScreen', {id: item.id})
              }>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Button onPress={() => logOut()} title="LogOut" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
