import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { TouchableOpacity, View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { Picker } from 'react-native-web';
import { ScrollView } from 'react-native-gesture-handler';


let userId = localStorage.getItem("userId");


const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("Nombre");

  let endpoint ="";

  if (selectedValue=="Nombre")
    endpoint="http://localhost:8080/recetas/buscarentodas/"
  if (selectedValue=="Ingrediente")
    endpoint="http://localhost:8080/recetas/filtrarportipo/CONTIENEN/"
  if (selectedValue=="Falta de ingrediente")
    endpoint="http://localhost:8080/recetas/filtrarportipo/NO-CONTIENEN/" 
  if (selectedValue=="Usuario")
    endpoint=`http://localhost:8080/recetas/${userId}/`


    const handleSearch = async () => {
      if (searchQuery=="")
        endpoint="http://localhost:8080/recetas/todas"
      try {
        const response = await axios.get(endpoint + searchQuery);
        const results = response.data;
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
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 50 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Nombre" value="Nombre" />
        <Picker.Item label="Ingrediente" value="Ingrediente" />
        <Picker.Item label="Falta de ingrediente" value="Falta de ingrediente" />
        <Picker.Item label="Recetas Propias" value="Recetas Propias" />
        <Picker.Item label="Usuario" value="Usuario" />
      </Picker>
      </View>
      <View style={styles.filterContainer}>
        </View>


      <View style={styles.resultsContainer}>
        <View style={styles.cardList}>
          {searchResults.map((result) => (
            <TouchableOpacity key={result.idReceta} onPress={() => navigation.navigate('RecipeScreen',{id:result.idReceta})}>
              <View style={styles.card}>
              <Image source={{ uri: result.urlfotounica}} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{result.nombre}</Text>
                <Text style={styles.cardDescription}>{result.descripcion}</Text>
                <Text>Creado por : {result.nombreUsuario}</Text>
                <Text>Fecha de Creacion : {result.fechaCreacion[2]}-{result.fechaCreacion[1]}-{result.fechaCreacion[0]}</Text>
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