import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signupUser} from '../../../config/api';

const Register = ({navigation}) => {
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
    <View>
      <TextInput
        style={{borderWidth: 1}}
        placeholder={'nama'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={{borderWidth: 1}}
        placeholder={'email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{borderWidth: 1}}
        placeholder={'password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Button
          title="Register"
          onPress={() => {
            onSubmit();
          }}
        />
      </View>
      <Button
        title="Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
