import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {RegisterImage} from '../../../../assets';

const header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={RegisterImage} />
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: '15%',
  },
  img: {
    width: 290,
    height: 260,
  },
});
