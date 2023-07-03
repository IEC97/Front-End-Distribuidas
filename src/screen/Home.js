import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { TouchableOpacity, View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:8080/recetas/todas');
      const results = response.data;
      console.log(results);
      setSearchResults(results);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          type="text"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Buscar..."
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultsContainer}>
        <View style={styles.cardList}>
          {searchResults.map((result) => (
            <TouchableOpacity key={result.idReceta} onPress={() => navigation.navigate('RecipeScreen')}>
              <View style={styles.card}>
                <Image source={{ uri: result.fotoUnica }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{result.nombre}</Text>
                <Text style={styles.cardDescription}>{result.descripcion}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFED3'
},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
  },
  resultsContainer: {
    marginTop: 10,
  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default HomeScreen;