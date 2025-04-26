import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyle';

export default function CharacterCard({ character, onPress }) {
  return (
    <TouchableOpacity style={globalStyles.card} onPress={onPress}>
      <Text style={globalStyles.cardText}>{character.name}</Text>
    </TouchableOpacity>
  );
}
