import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative',
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({data} : Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text
        style={[styles.amount, {color: data.type === 'positive' ? theme.colors.SUCCESS : 
        theme.colors.ALERT}]}
      >{data.type === 'negative' && '- '}{data.amount}
      </Text>
      <View style={styles.footer}>
        <View style={styles.category}>
          <Icon 
            style={styles.icon} 
            name={data.category.icon}
          />
          <Text style={styles.categoryName}>{data.category.name}</Text>
        </View>
        <Text style={styles.date}>{data.date}</Text>
      </View>
    </View>
  );
}