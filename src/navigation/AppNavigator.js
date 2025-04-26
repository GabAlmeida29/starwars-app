import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';
import StarshipsScreen from '../screens/StarshipsScreen';
import FilmsScreen from '../screens/FilmsScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
       >
        <Stack.Screen name="Personagens" component={CharactersScreen} />
        <Stack.Screen name="Detalhes" component={CharacterDetailsScreen} />
        <Stack.Screen name="Naves" component={StarshipsScreen} />
        <Stack.Screen name="Filmes" component={FilmsScreen} />
        <Stack.Screen name="Sobre" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
