import React from 'react';
import { TouchableOpacity, 
  TouchableOpacityProps, 
  Text 
} from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest} : Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}