import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { globalStyles } from '../styles/globalStyle';

export default function CharactersScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      const ids = [1, 4, 14, 20, 13];
      const results = await Promise.all(
        ids.map(async (id) => {
          const response = await fetch(`https://swapi.info/api/people/${id}`);
          return await response.json();
        })
      );
      setCharacters(results);
      setLoading(false);
    };
    loadCharacters();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Selecione o Personagem</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CharacterCard character={item} onPress={() => navigation.navigate('Detalhes', { character: item })} />
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={{ marginTop: 20 }}>
        <Text style={globalStyles.buttonText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}