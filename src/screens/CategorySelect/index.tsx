import React from 'react';
import { 
  View, 
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';
import { Button } from '../../components/Form/Button';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';

interface Category {
  key: string;
  name: string;
  icon: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({category, setCategory, closeSelectCategory} : Props) {
  function handleCategorySelect(category: Category){
    setCategory(category);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Categoria
        </Text>
      </View>
      <FlatList 
          data={categories}
          style={styles.flatlist}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => (
            <TouchableOpacity 
              style={[styles.category, {
                backgroundColor: item.key === category.key ? theme.colors.SECUNDARY_LIGHT : theme.colors.BACKGROUND  
              }]}
              onPress={() => handleCategorySelect(item)}
            >
                <Icon 
                  name={item.icon} 
                  style={styles.icon}
                />
                <Text style={styles.name}>
                  {item.name}
                </Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />

        <View style={styles.footer}>
          <Button 
            title="Selecionar" 
            onPress={closeSelectCategory}
          />
        </View>
    </View>
  );
}