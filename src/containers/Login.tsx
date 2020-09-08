import React, {useState} from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Input from '../components/common/Input';
import TextButton from '../components/common/TextButton';
import {RootStackParamList} from '../navigators/rootNavigator';

interface IState {
  email: string;
  password: string;
}

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const inputs = {
  email: 'email',
  password: 'password',
};

const initialState: IState = {
  email: '',
  password: '',
};

export default function Login({navigation}: IProps) {
  const [state, setState] = useState(initialState);
  const {email, password} = state;
  const textChange = (inputType: string) => (text: String) => {
    setState((prevState) => ({
      ...prevState,
      [inputType]: text,
    }));
  };
  const onSignInPress = () => {
    console.log('Login');
  };
  const onRegisterPress = () => {
    navigation.navigate('Register');
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
      <TextButton text="Login" onPress={onSignInPress} />
      <TextButton text="Register" onPress={onRegisterPress} />
    </View>
  );
}
