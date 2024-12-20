import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Estoque' }} />
        <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Adicionar Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
