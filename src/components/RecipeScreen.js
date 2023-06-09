import React, { useEffect, useState } from 'react';

import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import axios from 'axios';




const RecipeScreen = () => {

  const [recipe, setRecipe] = useState(null);




  useEffect(() => {

    const fetchRecipe = async () => {

      try {

        const response = await axios.get('http://localhost:8080/recetas/4');

        const data = response.data;

        setRecipe(data);

      } catch (error) {

        console.error('Error al obtener la receta:', error);

      }

    };




    fetchRecipe();

  }, []);




  const renderIngredient = ({ item }) => (

    <Text style={styles.ingredient}>{item}</Text>

  );




  const renderStep = ({ item, index }) => (

    <Text style={styles.step}>{`${index + 1}. ${item}`}</Text>

  );




  if (!recipe) {

    return (

      <View style={styles.loadingContainer}>

        <Text style={styles.loadingText}>Cargando receta...</Text>

      </View>

    );

  }




  return (

    <View style={styles.container}>

      <Text style={styles.name}>{recipe.nombre}</Text>

      <Text style={styles.servings}>{`Para ${recipe.cantidadPersonas} personas`}</Text>

      <Image source={{ uri: recipe.urlfotounica }} style={styles.image} />

      <Text style={styles.sectionTitle}>Ingredientes:</Text>

      <FlatList

  data={recipe.utilizados}

  keyExtractor={(item, index) => index.toString()}

  renderItem={({ item }) => (

    <Text style={styles.ingredient}>

      {`${item.idIngrediente.nombre}: ${item.cantidad}`}

    </Text>

  )}

/>

      <Text style={styles.sectionTitle}>Pasos de la preparación:</Text>

<FlatList

  data={recipe.pasos}

  keyExtractor={(item, index) => index.toString()}

  renderItem={({ item, index }) => (

    <Text style={styles.step}>{`${index + 1}. ${item.texto}`}</Text>

  )}

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

  loadingContainer: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  loadingText: {

    fontSize: 18,

    fontWeight: 'bold',

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