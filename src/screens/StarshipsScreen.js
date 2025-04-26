import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { getStarshipDetails } from '../api/swapi';
import { globalStyles } from '../styles/globalStyle';

export default function StarshipsScreen({ route, navigation }) {
  const { starships } = route.params;
  const [starshipDetails, setStarshipDetails] = useState([]);

  useEffect(() => {
    async function loadStarships() {
      if (starships && starships.length > 0) {
        try {
          const details = await getStarshipDetails(starships);
          setStarshipDetails(details);
        } catch (error) {
          console.error('Erro ao carregar naves:', error);
        }
      }
    }
    loadStarships();
  }, [starships]);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ padding: 20, paddingTop: 90 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButton}>← Voltar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Naves</Text>
        {starshipDetails.length > 0 ? (
          starshipDetails.map((ship) => (
            <View key={ship.url} style={{ marginBottom: 20 }}>
              <Text style={globalStyles.label}>Nome: {ship.name}</Text>
              <Text style={globalStyles.label}>Modelo: {ship.model}</Text>
              <Text style={globalStyles.label}>Passageiros: {ship.passengers}</Text>
            </View>
          ))
        ) : (
          <Text style={globalStyles.label}>Sem naves associadas.</Text>
        )}
      </ScrollView>
    </View>
  );
}
