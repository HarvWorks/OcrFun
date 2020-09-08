import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import PropTypes from 'prop-types';
import {styles} from './styles';

interface IProps {
  text: string;
  onPress: () => void;
}

export default function TextButton(props: IProps) {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.textButton}>
        <Text style={styles.textButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

TextButton.propTypes = {
  placeholder: PropTypes.string,
  onPress: PropTypes.func,
};
