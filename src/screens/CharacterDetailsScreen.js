import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

export default function CharacterDetailsScreen({ route, navigation }) {
  const { character } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ padding: 20, paddingTop: 90 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButton}>← Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>{character.name}</Text>
        <Text style={globalStyles.label}>Altura: {character.height} cm</Text>
        <Text style={globalStyles.label}>Peso: {character.mass} kg</Text>
        <Text style={globalStyles.label}>Cabelo: {character.hair_color}</Text>
        <Text style={globalStyles.label}>Pele: {character.skin_color}</Text>
        <Text style={globalStyles.label}>Olhos: {character.eye_color}</Text>
        <Text style={globalStyles.label}>Gênero: {character.gender}</Text>
        <View style={globalStyles.buttonRow}>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate('Naves', { starships: character.starships })}
          >
            <Text style={globalStyles.buttonText}>Naves</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => navigation.navigate('Filmes', { films: character.films })}
          >
            <Text style={globalStyles.buttonText}>Filmes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
