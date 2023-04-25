import React from 'react';
import { 
  TouchableOpacity,
  Text,
} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';

import { styles } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({title, onPress} : Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.category}>{title}</Text>
      <Icon style={styles.icon} name="chevron-down" />
    </TouchableOpacity>
  );
}