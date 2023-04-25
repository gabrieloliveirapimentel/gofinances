import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps;

import { styles } from './styles';

export function Input({...rest} : Props) {
  return (
    <TextInput 
      {...rest} 
      style={styles.container}
    />   
  );
}