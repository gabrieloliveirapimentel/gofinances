import React from 'react';
import { Feather as Icon} from '@expo/vector-icons';
import { 
  View, 
  Text, 
  Image,
  ScrollView,
  FlatList
} from 'react-native';

import { styles } from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [{
    id: "1",
    type: "positive",
    title:"Desenvolvimento de site",
    amount:"R$12.000,00",
    category:{
      name: "Vendas",
      icon: "dollar-sign"
    },
    date: "13/04/2020"
  },
  {
    id: "2",
    type: "negative",
    title:"Hamburgueria Pizzy",
    amount:"R$59,00",
    category:{
      name: "Alimentação",
      icon: "coffee"
    },
    date: "10/04/2020"
  },
  {
    id: "3",
    type: "negative",
    title:"Aluguel do apartamento",
    amount:"R$1.200,00",
    category:{
      name: "Casa",
      icon: "shopping-bag"
    },
    date: "10/04/2020"
  },
]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.userWrapper}>
        <View style={styles.userInfo}>
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/63811493?v=4g'}} style={styles.photo} />
          <View style={styles.user}>
            <Text style={styles.userGreeting}>Olá,</Text>
            <Text style={styles.userName}>Gabriel</Text>
          </View>
        </View>
        <Icon name="power" style={styles.Icon}/>
      </View>
      </View>
      <ScrollView 
        horizontal 
        style={styles.HighlightCards}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 24}}
      >
      <HighlightCard 
        type="up"
        title="Entradas" 
        amount="R$17.400,00" 
        lastTransaction="última entrada dia 13 de abril" 
      />
      <HighlightCard 
        type="down"
        title="Saídas" 
        amount="R$1.259,00" 
        lastTransaction="última saída dia 03 de abril"
      />
      <HighlightCard 
        type="total"
        title="Total" 
        amount="R$16.141,00" 
        lastTransaction="01 à 16 de abril"
      />
      </ScrollView>
      <View style={styles.transactions}>
        <Text style={styles.title}>Listagem</Text>
        
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/>}
          style={styles.transactionList}
          showsVerticalScrollIndicator={false}
        />

  
      </View>
    </View>
  );
}


