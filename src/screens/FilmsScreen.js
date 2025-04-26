import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { getFilmDetails } from '../api/swapi';
import { globalStyles } from '../styles/globalStyle';

export default function FilmsScreen({ route, navigation }) {
  const { films } = route.params;
  const [filmDetails, setFilmDetails] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      if (films && films.length > 0) {
        try {
          const details = await getFilmDetails(films);
          setFilmDetails(details);
        } catch (error) {
          console.error('Erro ao carregar filmes:', error);
        }
      }
    }
    loadFilms();
  }, [films]);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<View style={{ padding: 20, paddingTop: 90 }}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={globalStyles.backButton}>← Voltar</Text>
				</TouchableOpacity>
			</View>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Filmes</Text>
        {filmDetails.length > 0 ? (
          filmDetails.map(film => (
            <View key={film.url} style={{ marginBottom: 20 }}>
              <Text style={globalStyles.label}>Título: {film.title}</Text>
              <Text style={globalStyles.label}>Diretor: {film.director}</Text>
              <Text style={globalStyles.label}>Lançamento: {film.release_date}</Text>
            </View>
          ))
        ) : (
          <Text style={globalStyles.label}>Sem filmes associados.</Text>
        )}
      </ScrollView>
    </View>
  );
}