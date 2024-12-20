import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';
import api from '../api/api';

const HomeScreen = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = async () => {
    const response = await api.get('/');
    setProdutos(response.data);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Adicionar Produto" onPress={() => navigation.navigate('Add')} />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ProductItem
            produto={item}
            onEdit={() => navigation.navigate('Edit', { produto: item })}
            onDelete={fetchProdutos}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default HomeScreen;

