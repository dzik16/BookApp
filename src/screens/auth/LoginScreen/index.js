import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../../config/api';

const Login = ({navigation}) => {
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
    <View>
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
        <Button title="Login" onPress={() => onSubmit()} />
      </View>
      <Button
        title="Register"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
