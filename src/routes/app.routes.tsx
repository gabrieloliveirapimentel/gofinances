import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
  return (
    <Navigator
      screenOptions={{
        "tabBarActiveTintColor": theme.colors.SECUNDARY,
        "tabBarInactiveTintColor": theme.colors.TEXT,
        "tabBarLabelPosition": "beside-icon",
        "tabBarStyle": {
          "paddingVertical": Platform.OS === 'ios' ? 20 : 0,
          "height": 88
        }
      }}
    >
      <Screen 
        name="Listagem" 
        component={Dashboard} 
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, color }) => (
            <Icon 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <Screen 
        name="Cadastrar" 
        component={Register} 
        options={{ 
          headerShown: false,
          tabBarIcon: (({ size, color }) => (
            <Icon 
              name="attach-money"
              size={size}
              color={color}
            />
          ))
        }}
      />
      
    </Navigator>
  );
}

//<Screen name="Resumo" component={Resumo} />
/*
<Screen 
  name="Resumo" 
  component={Register} 
  options={{ 
    headerShown: false,
    tabBarIcon: (({ size, color }) => (
      <Icon 
        name="pie-chart"
        size={size}
        color={color}
      />
    ))
  }}
  />


*/