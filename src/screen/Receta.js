import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

let userId = localStorage.getItem("userId");

const RecipeScreen = ({route}) => {
  const [recipe, setRecipe] = useState(null);
  const [valoraciones, setValoraciones] = useState(null);
  const navigation = useNavigation();
  const { id } = route.params

  let userId = localStorage.getItem("userId");

  const getValoraciones = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/recetas/mostrarsuscalificaciones/${id}`);
      const data = response.data;
      console.log(data);
      setValoraciones(data);
    } catch (error) {
      console.error('Error al obtener valoraciones:', error);
    }
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/recetas/${id}`);
        const data = response.data;
        setRecipe(data);
      } catch (error) {
        console.error('Error al obtener la receta:', error);
      }
    };

    fetchRecipe();
  }, []);
  
  useEffect(() => {
    getValoraciones();
  }, []);

  console.log(valoraciones);

  const guardarReceta = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/recetas/agregarrecetaaintentar/${userId}/${id}`);
      const results = response.data;
      console.log(results)
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };


  const continuar = () => {
    console.log("ENTRE AL METODO--------------")
    navigation.navigate('Comentar') 
  }

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
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.goBackButton}>Volver</Text>
      </TouchableOpacity>
      <View style={{display:'flex',width:'100%',alignItems:'flex-end',justifyContent: "space-between", flexDirection: "row"}}> 

       <TouchableOpacity style={styles.valorarButton} onPress={guardarReceta}>
          <Text>Guardar</Text>
        </TouchableOpacity>

        <View>
        <TouchableOpacity style={styles.valorarButton} onPress={() => navigation.navigate('Comentar',{id:id})}>
          <Text>Valorar</Text>
        </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.name}>{recipe.nombre}</Text>
      <Text style={styles.servings}>{`Para ${recipe.cantidadPersonas} personas`}</Text>
      <Image source={{ uri: recipe.urlfotounica }} style={styles.image} />
      <Text style={styles.sectionTitle}>Valoraciones</Text>
      <View>
      {valoraciones.map((valoracion, i)=><React.Fragment key={i}><Text>Comentario: {valoracion.comentarios}</Text><Text>Calificación: {valoracion.calificacion}</Text></React.Fragment>)}
      </View>
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
  goBackButton: {
    color: '#ffffff',
    fontSize: 17,
    backgroundColor: '#70011b',
    borderRadius: 100,
    textAlign: 'center',
    width: 80,
    padding: 5,
    marginBottom: 20,
  },
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
  valorarButton: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
    width: 70,
    marginBottom: 3,
    marginTop: 3,
  }
});

export default RecipeScreen;
