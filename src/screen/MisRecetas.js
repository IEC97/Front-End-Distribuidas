import React, { useEffect, useState, } from 'react';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import { TouchableOpacity, View, Text, Image, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

let userId = localStorage.getItem("userId");


const MisRecetasScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      handleSearch()
    }, [])
  );

  const handleSearch = async () => {
    console.log("anda");
    try {
      const response = await axios.get(`http://localhost:8080/recetas/getrecetastaaintentar/${userId}`);
      const results = response.data.recetas;
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
      </View>
      <View style={styles.filterContainer}>
        </View>
      <View style={styles.resultsContainer}>
        <View style={styles.cardList}>
          {searchResults.map((result) => (
            <TouchableOpacity key={result.idReceta} onPress={() => navigation.navigate('RecipeScreen', { id: result.idReceta })}>
            <View style={styles.card}>
              <Image source={{ uri: result.urlfotounica }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{result.nombre}</Text>
              <Text style={styles.cardDescription}>{result.descripcion}</Text>
              <Text>Creado por: {result.nombreUsuario}</Text>
              <Text>Fecha de Creacion: {result.fechaCreacion[2]}-{result.fechaCreacion[1]}-{result.fechaCreacion[0]}</Text>
              <Button color='red' title="Eliminar" onPress={() => handleDelete(result.idReceta)} />
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
    alignItems: 'center',
    marginBottom: 10,
    display: 'flex'
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
    width: 70,
    marginBottom: 3,
    marginTop: 3
  },

  resultsContainer: {
    marginTop: 10,
    height: "100%"
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
    backgroundColor: "white"
  },

  cardImage: {
    width: '100%',
    height: 100,
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
  deleteButton: {
    backgroundColor: "red"
  }
});




export default MisRecetasScreen;