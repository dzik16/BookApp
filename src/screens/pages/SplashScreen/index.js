import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SplashAnim} from '../../../assets';
import LottieView from 'lottie-react-native';
import {Color} from '../../../config/utils/color';
import {useIsFocused} from '@react-navigation/native';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Splash = () => {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const isLoading = useSelector(state => state.global.isLoading);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 6000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScreenStatusBar status={focus} color={Color.PRIMARY_MAIN_COLOR} />
      <View style={{flex: 4}}>
        <LottieView source={SplashAnim} autoPlay loop />
      </View>
      <View style={styles.judul}>
        <Text style={styles.txtjudul}>BOOK-APP</Text>
      </View>
      <View style={styles.containerTxt}>
        <Text style={styles.txt}>By M. Dzikri Alfarisyi</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.SECOND_MAIN_COLOR,
  },
  containerTxt: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  judul: {
    flex: 1.5,
    alignContent: 'center',
    alignItems: 'center',
  },
  txtjudul: {
    fontSize: 30,
    color: Color.WHITE,
    fontWeight: 'bold',
  },
  txt: {
    color: Color.WHITE,
    fontWeight: '300',
    fontSize: 16,
  },
});
