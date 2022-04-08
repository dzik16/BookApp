import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {IconLogout, Foto} from '../../../../assets';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../../../config/api';

const header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    navigation.replace('SplashScreen');
  };
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Hi, Dzikri</Text>
      <View style={styles.boxHeader}>
        <TouchableOpacity>
          <Image source={Foto} style={styles.foto} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logOut()}>
          <Image source={IconLogout} style={styles.search} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    flex: 4,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  boxHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    width: 20,
    height: 20,
  },
  foto: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
});
