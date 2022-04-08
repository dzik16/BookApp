import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {SuccessAnim} from '../../../assets';
import {useIsFocused} from '@react-navigation/native';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../../config/utils/color';

const Sukses = () => {
  const navigation = useNavigation();
  const focus = useIsFocused();

  return (
    <View style={styles.container}>
      <ScreenStatusBar status={focus} color={Color.PRIMARY_MAIN_COLOR} />
      <View style={{flex: 3, marginTop: 60}}>
        <LottieView source={SuccessAnim} autoPlay={true} loop={false} />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 25}}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.replace('LoginScreen')}>
          <Text style={{fontSize: 15, color: Color.WHITE, fontWeight: 'bold'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sukses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.SECOND_MAIN_COLOR,
    paddingHorizontal: 25,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BUTTON_AUTH,
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 40,
  },
});
