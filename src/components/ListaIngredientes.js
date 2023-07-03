import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ListaIngredientes = () => {
  const navigation = useNavigation();
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(new Set());

  useEffect(() => {
    obtenerIngredientes();
  }, []);

  const obtenerIngredientes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/recetas/getallingredientes');
      setIngredientes(response.data);
    } catch (error) {
      console.log('Error al obtener los ingredientes:', error);
    }
  };

  const seleccionarIngrediente = (ingrediente) => {
    setIngredientesSeleccionados((prevSeleccionados) => {
      const nuevosSeleccionados = new Set(prevSeleccionados);

      // Si el ingrediente ya está seleccionado, se deselecciona
      if (nuevosSeleccionados.has(ingrediente)) {
        nuevosSeleccionados.delete(ingrediente);
      } else {
        // Si el ingrediente no está seleccionado, se selecciona
        nuevosSeleccionados.add(ingrediente);
      }

      return nuevosSeleccionados;
    });
  };

  const renderizarIngredientes = ({ item }) => (
    <TouchableOpacity
      style={[styles.ingredienteButton, ingredientesSeleccionados.has(item) && styles.ingredienteButtonSelected]}
      onPress={() => seleccionarIngrediente(item)}
    >
      <Text style={styles.ingredienteText}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  const continuar = () => {
    const ingredientesArray = Array.from(ingredientesSeleccionados);
    console.log('---------INGREDIENTES:', ingredientesArray)
    navigation.navigate('ListaUnidades', { ingredientes: ingredientesArray });
    
  };
  

  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>Ingredientes:</Text>
        <Text style={{fontSize: 15, textAlign: 'center', paddingBottom: 40}}>¡Selecciona el/los ingredientes necesarios para realizar tu receta!</Text>
        <FlatList
        style={styles.flatListContainer}
          data={ingredientes}
          keyExtractor={(item) => item.idIngrediente.toString()}
          renderItem={renderizarIngredientes}
          numColumns={3}
        />

        <Text style={styles.title}>Ingredientes seleccionados:</Text>

        <View style={styles.ingredientesSeleccionadosContainer}>
          {Array.from(ingredientesSeleccionados).map((ingrediente) => (
            <TouchableOpacity
              key={ingrediente.idIngrediente}
              style={[styles.ingredienteButton, styles.ingredienteButtonSelected]}
              onPress={() => seleccionarIngrediente(ingrediente)}
            >
              <Text style={styles.ingredienteText}>{ingrediente.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
 
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={continuar} style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /*
    flexWrap: 'wrap',
    flex:1,
    backgroundColor: '#FFFED3',
    padding: 20,*/
    //flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor:'#FFFED3',
    flex:1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  ingredienteButton: {
    backgroundColor: '#9e4e02',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  ingredienteButtonSelected: {
    backgroundColor: '#f7dbb2',
  },
  ingredienteText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ingredientesSeleccionadosContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,

  },
  flatListContainer:{
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default ListaIngredientes;