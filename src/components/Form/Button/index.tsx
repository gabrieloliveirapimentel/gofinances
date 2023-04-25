import React from 'react';
import { TouchableOpacity, 
  TouchableOpacityProps, 
  Text 
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function Button({title, onPress, ...rest} : Props) {
  return (
    <TouchableOpacity onPress={onPress} {...rest} style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}