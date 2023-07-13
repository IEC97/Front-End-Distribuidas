import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker'
import axios from 'axios';
import Crypto from 'crypto-js';


const Pasos = () => {
  var ImagePicker = require('react-native-image-picker');
  const navigation = useNavigation();
  const route = useRoute();
  const [pasos, setPasos] = useState([{ nroPaso: 1, texto: '' }]);

  const agregarPaso = () => {
    const ultimoNroPaso = pasos[pasos.length - 1].nroPaso;
    setPasos([...pasos, { nroPaso: ultimoNroPaso + 1, texto: '' }]);
  };

  const handleChangeTexto = (texto, index) => {
    const nuevosPasos = [...pasos];
    nuevosPasos[index].texto = texto;
    setPasos(nuevosPasos);
  };

  const handleSeleccionarImagen = (index) => {
    const options = {
      title: 'Titulo del Picker',
      cancelButton: 'Cancelar',
      chooseFromLibraryButtonTitle: 'Abrir Galeria',
      noData: true,
      quality: 0,
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);
      const uri = res.uri;
      const type = res.type;
      const name = res.fileName || 'image.jpg';

      const photo = { uri, type, name };
      const ts = Math.round((new Date()).getTime()/1000);
      const apiKey = '232787685252115';
      const apiSecret = '0bLS_78HtXFvyobtQdBuC7LThHM';
      const hash = `timestamp=${ts}${apiSecret}`;
      const signature = Crypto.SHA1(hash).toString();
      const url = 'https://api.cloudinary.com/v1_1/dyxacp8wi/images/upload'
  
      const formData = new FormData();
      formData.append('file', photo);
      formData.append('timestamp', ts);
      formData.append('api_key', apiKey);
      formData.append('signature', signature);

      fetch(url, {
        method : 'POST',
        body : formData,
      })
      .then(res => res.json())
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }))

      /*
    ImagePicker.launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error) {
        const nuevosPasos = [...pasos];
        nuevosPasos[index].imagen = response.assets[0].uri;
        setPasos(nuevosPasos);
      }*/
    });
  };

  const finalizarCarga = async () => {
    const { idReceta } = route.params;

    const pasosAPI = pasos.map(paso => ({
      nroPaso: paso.nroPaso,
      texto: paso.texto,
      multimedia: [] // Ajusta esto según los requisitos de tu API
    }));

    try {
      await axios.post(`http://localhost:8080/pasos/agregarPasos/${idReceta}`, pasosAPI);
      console.log('Id de la receta: ',idReceta)
      navigation.navigate('BottomTab');
    }
    catch (error) {
      console.log('Error al enviar los pasos:', error);
      // Maneja el error en caso de que no se puedan enviar los pasos
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButton}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Pasos de la receta</Text>
      {pasos.map((paso, index) => (
        <View key={index} style={styles.pasoContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe el paso"
            value={paso.texto}
            onChangeText={(texto) => handleChangeTexto(texto, index)}
          />
          <TouchableOpacity style={styles.imagenButton} onPress={() => handleSeleccionarImagen(index)}>
            {paso.imagen ? (
              <Image source={{ uri: paso.imagen }} style={styles.imagen} />
            ) : (
              <Text style={styles.imagenButtonText}>Seleccionar imagen</Text>
            )}
          </TouchableOpacity>
          {index === pasos.length - 1 && (
            <Button style={styles.agregarPaso} title="Agregar paso" onPress={agregarPaso} />
          )}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={finalizarCarga} style={styles.buttonFinal}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFED3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  pasoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFE5A6',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
  },
  goBackButton: {
    color: '#ffffff',
    fontSize: 15,
    backgroundColor: '#70011b',
    borderRadius: 100,
    textAlign: 'center',
    justifyContent: 'center',
    width: 80,
    padding: 5,
    marginBottom: 20,
  },
  imagenButton: {
    backgroundColor: '#3f6654',
    padding: 10,
    borderRadius: 5,
  },
  imagenButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
  },
  agregarPaso: {
    backgroundColor: '#3f6654',
  },
  buttonFinal: {
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
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
    flexDirection: 'row',
    marginTop: 50,
  },
});

export default Pasos;
