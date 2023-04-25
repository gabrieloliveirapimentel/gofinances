import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import { 
  View,
  Text
 } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Props {
  type: 'up' | 'down' | 'total' | undefined;
  title: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
}

export function HighlightCard({ type, title, amount, lastTransaction} : Props) {
  return (
    <View style={[styles.container, {backgroundColor: type === 'total' ? theme.colors.SECUNDARY : 
    theme.colors.SHAPE }]}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: type === 'total' ? theme.colors.SHAPE : theme.colors.TEXT_DARK}]}>{title}</Text>
        <Icon 
          name={icon[type]} 
          style={styles.Icon}
          color={`${type === 'up' ? theme.colors.SUCCESS : 
            type === 'down' ? theme.colors.ALERT : 
            type === 'total' ? theme.colors.SHAPE : null}`} 
        />
      </View>

      <View style={styles.footer}>
        <Text style={[styles.amount, {color: type === 'total' ? theme.colors.SHAPE : theme.colors.TEXT_DARK}]}>{amount}</Text>
        <Text style={[styles.lastTransaction, {color: type === 'total' ? theme.colors.SHAPE : theme.colors.TEXT}]}>{lastTransaction}</Text>
      </View>
    </View>
  );
}