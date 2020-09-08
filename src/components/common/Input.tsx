import React from 'react';
import {View, TextInput} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './styles';

interface IProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function Input(props: IProps) {
  const {placeholder, value, onChangeText} = props;
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};
