import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Datos de ejemplo para las tarjetas de recetas
const data = [
  {
    id: '1',
    title: 'Receta 1',
    description: 'Descripción de la receta 1',
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  {
    id: '2',
    title: 'Receta 2',
    description: 'Descripción de la receta 2',
    image: require('../imagen/tortilla.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  {
    id: '3',
    title: 'Receta 3',
    description: 'Descripción de la receta 3',
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  // Agrega más recetas aquí
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = data.filter((recipe) =>
      recipe.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <Image source={item.image} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar recetas"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeCard}
        horizontal={true} // Acomoda las tarjetas horizontalmente
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFED3'
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginRight: 16, // Espacio entre las tarjetas
    flexDirection: 'row', // Acomoda los elementos en una fila
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
  },
  recipeDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;
