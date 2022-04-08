import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../../config/api';
import {useIsFocused} from '@react-navigation/native';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {useNavigation} from '@react-navigation/native';

import {IconEmail, IconPassword} from '../../../assets';
import {Color} from '../../../config/utils/color';

import Header from './components/header';
import Title from './components/title';

const Login = () => {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.Auth.token);

  const onSubmit = () => {
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (token) {
      navigation.navigate('HomeScreen');
    }
  }, [token, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <Title />

        <View style={[styles.containerInput, styles.shadowProp]}>
          <View style={styles.iconInput}>
            <Image source={IconEmail} style={styles.icon} />
          </View>
          <View style={styles.txtInput}>
            <TextInput
              placeholder={'email'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>

        <View style={[styles.containerInput, styles.shadowProp]}>
          <View style={styles.iconInput}>
            <Image source={IconPassword} style={styles.icon} />
          </View>
          <View style={styles.txtInput}>
            <TextInput
              placeholder={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.containerRegist}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text
                style={{fontSize: 15, color: Color.WHITE, fontWeight: 'bold'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{fontSize: 15, color: 'black'}}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.btnLogin, styles.shadowProp]}
          onPress={() => onSubmit()}>
          <Text style={{fontSize: 15, color: Color.WHITE, fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY_MAIN_COLOR,
    paddingHorizontal: 25,
  },
  containerInput: {
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    marginVertical: 8,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 5,
  },
  iconInput: {
    flex: 1,
    alignSelf: 'center',
  },
  icon: {
    width: 25,
    height: 27,
    marginLeft: 10,
  },
  txtInput: {
    flex: 5,
  },
  containerRegist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BUTTON_AUTH,
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 10,
  },
});
