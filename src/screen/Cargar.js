import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import eliminarImg from '../imagen/eliminarImg.png';
import axios from 'axios';

export default function SubirImagenes({ route }) {
  const { idUsuario } = route.params;

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [nombre, setNombre] = useState('');
  const [personas, setPersonas] = useState(1);
  const [porciones, setPorciones] = useState(1);
  const [descripcion, setDescripcion] = useState('');
  const [idTipo, setIdTipo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const obtenerIdTipo = (tipo) => {
    tipo = tipo.toLowerCase(); // Convertir a minúsculas
    let idTipo = '';
    switch (tipo) {
      case 'pasta':
        idTipo = '1';
        break;
      case 'carne':
        idTipo = '2';
        break;
      case 'pescado':
        idTipo = '3';
        break;
      case 'vegetariano':
        idTipo = '4';
        break;
      default:
        setErrorMessage('Verifique la categoría de su receta e inténtelo de nuevo!');
        break;
    }
    if (idTipo !== '') {
      continuar(idTipo); // Pasar idTipo como argumento a continuar
    }
    return idTipo;
  };

  const continuar = async (idTipo) => {
    const datosReceta = {
      nombre: nombre,
      descripcion: descripcion,
      porciones: porciones,
      cantidadPersonas: personas,
      fotounica: imagenSeleccionada,
      idtipo: idTipo,
    };
    console.log('Categoria de la receta: ', datosReceta.idtipo);

    try {
      const response = await axios.post(`http://localhost:8080/recetas/${idUsuario}`, datosReceta);
      console.log('Receta creada:', response.data);
      console.log('ID DE LA RECETA: ', response.data.idReceta);
      navigation.navigate('ImageUploader', { idReceta: response.data.idReceta });
    } catch (error) {
      console.log('Error al cargar la receta:', error);
      // Manejar el error en caso de que no se pueda cargar la receta
    }
  };

  const incrementarPersonas = () => {
    setPersonas((prevPersonas) => prevPersonas + 1);
  };

  const decrementarPersonas = () => {
    if (personas > 1) {
      setPersonas((prevPersonas) => prevPersonas - 1);
    }
  };

  const incrementarPorciones = () => {
    setPorciones((prevPorciones) => prevPorciones + 1);
  };

  const decrementarPorciones = () => {
    if (porciones > 1) {
      setPorciones((prevPorciones) => prevPorciones - 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>

        <View>
          <Text style={styles.titulo}>Titulo de la receta</Text>
          <TextInput
            style={{
              fontSize: 15,
              textAlign: 'center',
              width: 250,
              height: 30,
              margin: 5,
              borderRadius: 100,
              color: '#703701',
              backgroundColor: '#FFE5A6',
              padding: 10,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Ingrese un titulo para su receta"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View>
          <Text style={styles.titulo}>Descripcion de la receta</Text>
          <TextInput
            style={{
              fontSize: 15,
              textAlign: 'center',
              width: 250,
              height: 30,
              margin: 5,
              borderRadius: 100,
              color: '#703701',
              backgroundColor: '#FFE5A6',
              padding: 10,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Ingrese una breve descripcion"
            value={descripcion}
            onChangeText={setDescripcion}
          />
        </View>

        <View>
          <Text style={styles.titulo}>¿Cuantas porciones rinde tu receta?</Text>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Indica la cantidad de porciones que se pueden hacer</Text>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>con tu receta. Ajusta las cantidades con los botones!</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{
            fontSize: 15,
            textAlign: 'center',
            width: 130,
            padding: 6,
            borderRadius: 30,
            color: '#703701',
            backgroundColor: '#FFE5A6',
          }}>{porciones} porcion/es
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={decrementarPorciones}>
            <View style={styles.actionBtn}>
              <Icon name="remove" size={20} color='white' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={incrementarPorciones}>
            <View style={styles.actionBtn}>
              <Icon name="add" size={20} color='white' />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.titulo}>¿Para cuantas personas es tu receta?</Text>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Indica la cantidad de personas que se pueden alimentar</Text>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>con tu receta. Ajusta las cantidades con los botones!</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{
            fontSize: 15,
            textAlign: 'center',
            width: 130,
            padding: 6,
            borderRadius: 30,
            color: '#703701',
            backgroundColor: '#FFE5A6',
          }}>{personas} persona/s
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={decrementarPersonas}>
            <View style={styles.actionBtn}>
              <Icon name="remove" size={20} color='white' />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={incrementarPersonas}>
            <View style={styles.actionBtn}>
              <Icon name="add" size={20} color='white' />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.titulo}>Tipo de receta</Text>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Las categorias disponibles son: pasta, carne, pescado y vegetariano!</Text>
          <TextInput
            style={{
              fontSize: 15,
              textAlign: 'center',
              width: 250,
              height: 30,
              margin: 5,
              alignSelf: 'center',
              borderRadius: 100,
              color: '#703701',
              backgroundColor: '#FFE5A6',
              padding: 10,
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Ingrese la categoria de su receta"
            value={idTipo}
            onChangeText={setIdTipo}
          />
        </View>

        {errorMessage ? (
          <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'red', fontSize: 16 }}>{errorMessage}</Text>
          </View>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={() => obtenerIdTipo(idTipo)}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFED3',
  },
  titulo: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  actionBtn: {
    margin: 10,
    width: 60,
    height: 20,
    backgroundColor: '#984C00',
    borderRadius: 30,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  pasoInput: {
    fontSize: 15,
    textAlign: 'center',
    width: 250,
    height: 30,
    margin: 5,
    borderRadius: 100,
    color: '#703701',
    backgroundColor: '#FFE5A6',
    padding: 10,
  },
});