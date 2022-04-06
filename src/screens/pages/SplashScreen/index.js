import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
