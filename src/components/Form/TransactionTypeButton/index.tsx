import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';

import { theme } from '../../../global/styles/theme';
import { styles } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({type, title, isActive,...rest} : Props) {
  return (
    <TouchableOpacity 
      style={[styles.container, {
        backgroundColor: 
        isActive && type === 'up' ? theme.colors.SUCCESS_LIGHT : 
        isActive && type === 'down' ? theme.colors.ALERT_LIGHT :  
        theme.colors.BACKGROUND,
        borderWidth: isActive ? 0 : 1.5,
      }]}  
    {...rest} 
    isActive={isActive}>
      <Icon 
        name={icons[type]} 
        style={styles.icon}
        color={`${type === 'up' ? theme.colors.SUCCESS : 
        type === 'down' ? theme.colors.ALERT : null}`} 
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}