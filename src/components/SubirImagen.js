import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import eliminarImg from '../imagen/eliminarImg.png';

function SubirImagenes( {route} ) {
  const { idReceta } = route.params;
  const [imageSelected, setImageSelected] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(imageSelected);
  }, [imageSelected]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
    });

    if (!result.canceled) {
      setImageSelected(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(imageSelected);
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

    } catch (error) {
      console.log(error);
    }
  };

  const guardarImagen = async (respuesta) => {
    try {
      console.log('SUPUESTO URL:', respuesta.data.secure_url);

      const formData = new FormData();
      formData.append("idreceta", idReceta); 
      formData.append("file", respuesta.data.secure_url);
      
      console.log("URL GUARDADO:", formData.get("file"));

      Axios.post('http://localhost:8080/recetas/addFOTOREAL', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
    // Procesa la respuesta del servidor
      console.log('SE SUBIO GUARDO LA FOTO! ->', response.data);
      navigation.navigate('ListaIngredientes', { idReceta: idReceta });
      })
    } catch (error) {
      console.log(error);
    }
};

      

  return (
    <View style={{flex:1}}>
        
        <View style={styles.container}>
            <View style={{marginRight:'auto', paddingLeft: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.goBackButton}>Volver</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.titulo}>Seleccione una imagen de la receta!</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.botonImagen} onPress={pickImage}>
                    <Text style={styles.botonText}>CARGAR DESDE ORDENADOR</Text>
                </TouchableOpacity>
            </View>

            {/* Vista de imagenes */}
            {imageSelected !== null && (
                <View style={styles.imageContainer}>
                <Image source={{ uri: imageSelected.uri }} style={styles.image} resizeMode="cover" />
                <TouchableOpacity onPress={() => setImageSelected(null)}>
                    <Image style={{ alignSelf: 'center', width: 20, height: 20, marginTop: 5 }} source={eliminarImg} />
                </TouchableOpacity>
                </View>
            )}

            <View style={{paddingVertical: 40}}>
                <TouchableOpacity style={styles.botonEnviarImagen} onPress={uploadImage}>
                    <Text style={styles.botonText}>Upload Image</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: '#FFFED3',
    },
    titulo: {
        marginTop: 20,
        color: 'black',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        paddingBottom: 20,
    },
    goBackButton: {
        color: '#ffffff',
        fontSize: 15,
        backgroundColor: '#70011b',
        borderRadius: 100,
        textAlign: 'center',
        width: 80,
        padding: 5,
        marginBottom: 80,
      },
    botonImagen: {
        backgroundColor: '#3f6654',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        maxWidth: 300,
    },
    botonEnviarImagen: {
        backgroundColor: '#70011b',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        maxWidth: 300,
    },
    botonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default SubirImagenes;