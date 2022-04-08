import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../../config/api';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

import {IconEmail, IconPassword, IconName} from '../../../assets';
import {Color} from '../../../config/utils/color';

import Header from './components/header';

const Register = () => {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegSukses = useSelector(state => state.Auth.isRegSukses);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegSukses) {
      navigation.navigate('SuksesScreen');
    }
  }, [isRegSukses, navigation]);

  const onSubmit = () => {
    return dispatch(signupUser(name, email, password));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View style={[styles.containerInput, styles.shadowProp]}>
          <View style={styles.iconInput}>
            <Image source={IconName} style={styles.icon} />
          </View>
          <View style={styles.txtInput}>
            <TextInput
              placeholder={'Full Name'}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
        </View>
        <View style={[styles.containerInput, styles.shadowProp]}>
          <View style={styles.iconInput}>
            <Image source={IconEmail} style={styles.icon} />
          </View>
          <View style={styles.txtInput}>
            <TextInput
              placeholder={'Email'}
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
              placeholder={'Password'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.containerRegist}>
          <View>
            <Text style={{fontSize: 13, color: Color.WHITE}}>
              Do You Have Account?
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text
                style={{fontSize: 15, color: Color.WHITE, fontWeight: 'bold'}}>
                Login -&gt;
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.btnLogin, styles.shadowProp]}
          onPress={() => onSubmit()}>
          <Text style={{fontSize: 15, color: Color.WHITE, fontWeight: 'bold'}}>
            Register
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

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
    marginHorizontal: 5,
  },
  iconInput: {
    flex: 1,
    alignSelf: 'center',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
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
    paddingHorizontal: 10,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BUTTON_AUTH,
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});
