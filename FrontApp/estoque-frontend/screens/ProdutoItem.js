import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import api from '../api/api';

const ProductItem = ({ produto, onEdit, onDelete }) => {
  const handleDelete = async () => {
    await api.delete(`/${produto._id}`);
    onDelete();
  };

  return (
    <View style={styles.item}>
      <Text>{produto.nome} - {produto.quantidade}</Text>
      <Text>{produto.descricao}</Text>
      <View style={styles.actions}>
        <Button title="Editar" onPress={onEdit} />
        <Button title="Deletar" onPress={handleDelete} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: { padding: 10, borderBottomWidth: 1 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
});

export default ProductItem;
