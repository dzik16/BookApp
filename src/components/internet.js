import React from 'react';
import {InternetAnim} from '../assets';
import LottieView from 'lottie-react-native';
import {Color} from '../config/utils/color';

const internet = () => {
  return (
    <LottieView
      source={InternetAnim}
      autoPlay
      loop
      style={{backgroundColor: Color.WHITE}}
    />
  );
};

export default internet;
