import {StatusBar} from 'react-native';
import React from 'react';

const ScreenStatusBar = props => {
  const color = props.color;

  return props.status ? (
    <StatusBar backgroundColor={color} barStyle="dark-content" />
  ) : null;
};

export default ScreenStatusBar;
