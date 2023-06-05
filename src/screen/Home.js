import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';




const HomePage = ({ navigation }) => {

  const recipes = [

    { name: 'Receta 1', image: require('../imagen/pasta.jpg'), rating: 4 },

    { name: 'Receta 2', image: require('../imagen/tortilla.jpg'), rating: 3 },

    { name: 'Receta 3', image: require('../imagen/pasta.jpg'), rating: 5 },

    { name: 'Receta 4', image: require('../imagen/tortilla.jpg'), rating: 2 },

  ];




  const navigateToRecipes = () => {

    navigation.navigate('Recipes');

  };




  const renderRecipeCard = ({ item }) => (

    <TouchableOpacity style={styles.recipeCard} onPress={navigateToRecipes}>

      <Image source={item.image} style={styles.recipeImage} resizeMode="cover" />

      <View style={styles.recipeDetails}>

        <Text style={styles.recipeName}>{item.name}</Text>

        <View style={styles.ratingContainer}>

          {[1, 2, 3, 4, 5].map((star) => (

            <Text

              key={star}

              style={[

                styles.starIcon,

                star <= item.rating && styles.filledStar,

              ]}

            >

              ★

            </Text>

          ))}

        </View>

      </View>

    </TouchableOpacity>

  );




  return (

    <View style={styles.container}>

      <Text style={styles.title}>¡Bienvenido a la Aplicación de Recetas!</Text>




      <View style={styles.searchBarContainer}>

        <TextInput

          style={styles.searchBarInput}

          placeholder="Buscar recetas"

        />

      </View>




      {recipes.map((recipe, index) => (

        <TouchableOpacity

          key={index}

          style={styles.recipeCard}

          onPress={navigateToRecipes}

        >

          <Image source={recipe.image} style={styles.recipeImage} resizeMode="cover" />




          <View style={styles.recipeDetails}>

            <Text style={styles.recipeName}>{recipe.name}</Text>

            <View style={styles.ratingContainer}>

              {[1, 2, 3, 4, 5].map((star) => (

                <Text

                  key={star}

                  style={[

                    styles.starIcon,

                    star <= recipe.rating && styles.filledStar,

                  ]}

                >

                  ★

                </Text>

              ))}

            </View>

          </View>

        </TouchableOpacity>

      ))}

    </View>

  );

};




const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    padding: 16,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  searchBarContainer: {

    backgroundColor: '#f2f2f2',

    borderRadius: 5,

    paddingHorizontal: 10,

    marginBottom: 16,

  },

  searchBarInput: {

    height: 40,

  },

  recipeCard: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  recipeImage: {

    width: 80,

    height: 80,

    borderRadius: 40,

    marginRight: 16,

  },

  recipeDetails: {

    flex: 1,

  },

  recipeName: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  ratingContainer: {

    flexDirection: 'row',

  },

  starIcon: {

    fontSize: 18,

    color: 'white',

    marginRight: 4,

    borderColor: 'black',

   

  },

  filledStar: {

    color: 'gold',

  },

});




export default HomePage;