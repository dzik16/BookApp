import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {LoginImage} from '../../../../assets';

const header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={LoginImage} />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
  img: {
    width: 280,
    height: 300,
  },
});
