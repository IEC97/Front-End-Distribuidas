import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function ImageUploader({ route }) {
  const { idReceta } = route.params;
  const [contador, setCont] = useState(0);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
    });

    if (!result.canceled) {
      setImage(result);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', {
      uri: image.uri,
      type: 'image/jpg',
      name: 'image.jpg',
    });
    data.append('upload_preset', 'wl1ryhrd'); // Reemplaza 'tu_upload_preset' con tu valor real
    data.append('cloud_name', 'dyxacp8wi'); // Reemplaza 'tu_cloud_name' con tu valor real

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dyxacp8wi/image/upload', data); // Reemplaza 'tu_cloud_name' con tu valor real
      console.log(response);
      setUrl(response.data.url);

    } catch (error) {
      console.log(error);
    }
  };

  const postToBack = async () => {
    const newUrl = url;
    const tipo = url.split('.').pop();
    console.log(newUrl);
    console.log(tipo);
    if (newUrl !== '' && tipo !== '') {
      setCont(contador + 1);
      if (contador <= 1) {
        let datos = {
          path: newUrl,
          tipo: tipo,
          //nroReclamo: idReclamo, // Asegúrate de definir idReclamo
        };
        try {
          const response = await axios.post(`http://localhost:8080/recetas/addfotounica/${idReceta}`, datos);
          console.log(response);
          navigation.navigate('ListaIngredientes', { idReceta: idReceta })
        } catch (error) {
          console.log(error);
        }
      } else if (contador === 2) {
        setCont(0);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cargar Imagen</Text>
      <View style={styles.cargarImagen}>
        {image ? (
          <>
            <Text style={styles.uploadedText}>IMAGEN CARGADA SATISFACTORIAMENTE</Text>
            <Image source={{ uri: image.uri }} style={styles.uploadedImage} />
          </>
        ) : (
          <Text style={styles.notLoadedText}>No se ha cargado ninguna imagen.</Text>
        )}
        <TouchableOpacity style={styles.botonImagen} onPress={pickImage}>
          <Text style={styles.botonText}>CARGAR DESDE ORDENADOR</Text>
        </TouchableOpacity>
        {image && (
          <TouchableOpacity style={styles.botonImagen} onPress={uploadImage}>
            <Text style={styles.botonText}>Cargar Imagen</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.salir}>
        <TouchableOpacity style={styles.botonSalir} onPress={postToBack}>
          <Text style={styles.botonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cargarImagen: {
    marginBottom: 20,
  },
  uploadedText: {
    fontSize: 16,
    marginBottom: 10,
  },
  notLoadedText: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadedImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  botonImagen: {
    backgroundColor: '#3f6654',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  botonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  salir: {
    alignItems: 'center',
  },
  botonSalir: {
    backgroundColor: '#70011b',
    padding: 10,
    borderRadius: 5,
  },
});
