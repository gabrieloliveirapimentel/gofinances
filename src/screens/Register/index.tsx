import React, { useEffect, useState } from 'react';
import {
  Alert,   
  View, 
  Text,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

import { styles } from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Preço é obrigatório')
});

export function Register() {
  const dataKey = '@gofinances:transactions';

  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
    icon: 'home'
  });

  const { 
    control, 
    handleSubmit, 
    formState: { errors} 
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionsTypeSelect (type: 'up' | 'down'){ setTransactionType(type); }
  function handleOpenSelectCategoryModal(){ setCategoryModalOpen(true); }
  function handleCloseSelectCategoryModal(){ setCategoryModalOpen(false);}
  
  async function handleRegister(form: FormData){
    if(!transactionType) return Alert.alert('Selecione o tipo da transação');
    if(category.key === 'category') return Alert.alert('Selecione a categoria');

    const newTransaction = { 
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key  
    }
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        //...currentData,
        newTransaction
      ];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

    } catch(error){
      console.log(error);
      Alert.alert('Não foi possível salvar');
    }
  }

  useEffect(() => {
    async function loadData(){
      const dataKey = '@gofinances:transactions';
      const response = await AsyncStorage.getItem(dataKey);
      console.log(JSON.parse(response!));
    }
    loadData();
  },[]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Cadastro
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.fields}>
          <InputForm
            name="name" 
            control={control}
            placeholder="Nome" 
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
          <InputForm
            name="amount"
            control={control} 
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />

          <View style={styles.transactionsTypes}>
            <TransactionTypeButton 
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </View>
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </View>
        <Button 
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </View>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </View>
    </TouchableWithoutFeedback>
  );
}