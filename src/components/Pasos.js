import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import Axios from 'axios';

const Pasos = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pasos, setPasos] = useState([{ nroPaso: 1, texto: '', imagen: null }]);

  const agregarPaso = () => {
    const ultimoNroPaso = pasos[pasos.length - 1].nroPaso;
    setPasos([...pasos, { nroPaso: ultimoNroPaso + 1, texto: '', imagen: null }]);
  };

  const handleChangeTexto = (texto, index) => {
    const nuevosPasos = [...pasos];
    nuevosPasos[index].texto = texto;
    setPasos(nuevosPasos);
  };

  const handleSeleccionarImagen = async (index) => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo', quality: 0.5 }, (response) => {
      if (!response.didCancel) {
        const nuevosPasos = [...pasos];
        nuevosPasos[index].imagen = response.uri;
        console.log("SUPUESTO LINK: ",response.uri);
        setPasos(nuevosPasos);
        uploadImage(response.uri, index);
      }
    });
  };

  const uploadImage = async (uri, index) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append('file', blob);
      formData.append('upload_preset', 'wl1ryhrd');

      console.log('File:', formData.get('file'));
      console.log('Upload Preset:', formData.get('upload_preset'));

      const respuesta = await Axios.post(
        'https://api.cloudinary.com/v1_1/dyxacp8wi/image/upload',
        formData
      );

      console.log('SE SUBIO EXITOSAMENTE A LA NUBE! ->', respuesta);
      guardarImagen(respuesta);
      navigation.navigate('ListaIngredientes', { idReceta: idReceta });


      const nuevosPasos = [...pasos];
      nuevosPasos[index].imagen = respuesta.data.secure_url;
      setPasos(nuevosPasos);
    } catch (error) {
      console.log('Error al subir la imagen:', error);
    }
  };

  const finalizarCarga = async () => {
    const { idReceta } = route.params;

    const pasosAPI = pasos.map((paso) => ({
      nroPaso: paso.nroPaso,
      texto: paso.texto,
      multimedia: paso.imagen ? [paso.imagen] : []
    }));

    try {
      await Axios.post(`http://localhost:8080/pasos/agregarPasos/${idReceta}`, pasosAPI);
      navigation.navigate('BottomTab');
    } catch (error) {
      console.log('Error al enviar los pasos:', error);
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
    alignItems: 'center',
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
    marginRight: 10,
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
