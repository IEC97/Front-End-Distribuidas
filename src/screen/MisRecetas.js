import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import RecipeScreen from './Receta';

// Datos de ejemplo para las recetas
const recipes = [
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
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  {
    id: '3',
    title: 'Receta 3',
    description: 'Descripción de la receta 3',
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  {
    id: '4',
    title: 'Receta 4',
    description: 'Descripción de la receta 4',
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  {
    id: '5',
    title: 'Receta 5',
    description: 'Descripción de la receta 5',
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  {
    id: '6',
    title: 'Receta 6',
    description: 'Descripción de la receta 6',
    image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  },
  // Agrega más recetas aquí
];

const MisRecetasScreen = () => {
  const renderRecipeCard = ({ item }) => (
    <View style={styles.recipeCard}>
      <Image source={item.image} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>)
  ;

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeCard}
        numColumns={2} // Muestra las tarjetas en 2 columnas
        contentContainerStyle={styles.recipeListContainer} // Ajusta el estilo del contenedor de las tarjetas
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
  recipeListContainer: {
    justifyContent: 'space-between',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flex: 1,
    marginHorizontal: 8,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeDetails: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MisRecetasScreen;
