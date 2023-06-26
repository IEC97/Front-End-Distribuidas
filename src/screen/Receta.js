import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// Datos de ejemplo para la receta
const recipe = {
  name: 'Receta de ejemplo',
  servings: 4,
  image: require('../imagen/pasta.jpg'), // Reemplaza la ruta con la imagen correspondiente
  ingredients: [
    'Ingrediente 1',
    'Ingrediente 2',
    'Ingrediente 3',
    'Ingrediente 4',
    'Ingrediente 5',
  ],
  steps: [
    'Paso 1',
    'Paso 2',
    'Paso 3',
    'Paso 4',
    'Paso 5',
  ],
};

const RecipeScreen = () => {
  const renderIngredient = ({ item }) => (
    <Text style={styles.ingredient}>{item}</Text>
  );

  const renderStep = ({ item, index }) => (
    <Text style={styles.step}>{`${index + 1}. ${item}`}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{recipe.name}</Text>
      <Text style={styles.servings}>{`Para ${recipe.servings} personas`}</Text>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderIngredient}
      />
      <Text style={styles.sectionTitle}>Pasos de la preparación:</Text>
      <FlatList
        data={recipe.steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderStep}
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  servings: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  step: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default RecipeScreen;
