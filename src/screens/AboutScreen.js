import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ padding: 20, paddingTop: 90 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButton}>← Voltar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Sobre o Desenvolvedor</Text>
        <Text style={globalStyles.label}>Nome: Gabriel Franco de Almeida</Text>
        <Text style={globalStyles.label}>RA: 1125229</Text>
        <Text style={globalStyles.label}>E-mail: gabalmeida29@gmail.com</Text>
      </ScrollView>
    </View>
  );
}
