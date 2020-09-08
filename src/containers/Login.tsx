import React, {useState} from 'react';
import {View} from 'react-native';
import Input from '../components/common/Input';
import TextButton from '../components/common/TextButton';

const inputs = {
  email: 'email',
  password: 'password',
};

interface IState {
  email: string;
  password: string;
}

const initialState: IState = {
  email: '',
  password: '',
};

export default function Login() {
  const [state, setState] = useState(initialState);
  const {email, password} = state;
  const textChange = (inputType: string) => (text: String) => {
    setState((prevState) => ({
      ...prevState,
      [inputType]: text,
    }));
  };
  const onSignInPress = () => {
    console.log('sign in');
  };
  const onRegisterPress = () => {
    console.log('Register');
  };
  return (
    <View>
      <Input
        onChangeText={textChange(inputs.email)}
        placeholder={'email'}
        value={email}
      />
      <Input
        onChangeText={textChange(inputs.password)}
        placeholder={'password'}
        value={password}
      />
      <TextButton text="Sign In" onPress={onSignInPress} />
      <TextButton text="Register" onPress={onRegisterPress} />
    </View>
  );
}
