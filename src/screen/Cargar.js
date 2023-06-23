import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SubirImagenes() {
    const [imageUris, setImageUris] = useState([]);
    const contador = 0;

    const subirImagenes = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            multiple: true, // Habilita la selección múltiple de imágenes
          });
    
          if (!result.canceled) {
            setImageUris(prevUris => [...prevUris, result.uri]);
          }
        }
      };

      const eliminarImagen = index => {
        setImageUris(prevUris => {
          const updatedUris = [...prevUris];
          updatedUris.splice(index, 1);
          return updatedUris;
        });
      };
      
    return(
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={styles.titulo}>Cargar Imágenes</Text>
                </View>

                {/* Previsualización de las imágenes */}
                {imageUris.map((uri, index) => (
                <Image key={index} source={{ uri }} style={styles.image} resizeMode="cover" />
                ))}

                <TouchableOpacity onPress={subirImagenes}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Subir</Text>
                    </View>
                </TouchableOpacity>
            
            
                <View>
                    <Text style={styles.titulo}>Ingrese el titulo de la receta</Text>
                    <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/>
                </View>

            <View>
                <View>
                    <Text style={styles.titulo}>¿Para cuantas personas es tu receta?</Text>
                    <Text style={{fontSize: 12, textAlign:'center'}}>Indica la cantidad de personas que se pueden alimentar</Text>
                    <Text style={{fontSize: 12, textAlign:'center'}}>con tu receta. Ajusta las cantidades con los botones!</Text>
                </View>
            </View>


            
                <View style={{marginTop: 20}}>
                    <Text style={{color: 'black', fontSize: 15}}>Contador: </Text>
                </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{marginTop: 20}}>
                    <View style={styles.actionBtn}>
                        <Icon name="remove" size={20} color='white' />
                    </View>
                </TouchableOpacity>
                
                <Text>Personas</Text>

                <TouchableOpacity style={{marginTop: 20}}>
                    <View style={styles.actionBtn}>
                        <Icon name="add" size={20} color='white' />
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{marginTop: 20}}>
                <View style={styles.button}>
                    <Text style={{color: 'white', fontSize: 17}}>Siguiente</Text>
                </View>
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
        backgroundColor:'#FFFED3',
      },
      titulo: {
        marginTop: 20,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
      },
      button: {
        marginTop: 15,
        backgroundColor: '#703701',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 20,

        //margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 30, paddingVertical: 10, padding: 30
      },
      buttonText: {
        color: 'white',
        fontSize: 17,
      },
      image: {
        marginTop: 20,
        width: 100,
        height: 100,
      },
      actionBtn: {
        width: 80,
        height: 20,
        backgroundColor: '#984C00',
        borderRadius: 30,
        paddingHorizontal: 5,
        textAlign: 'center',
      },
      buttonContainer: {
        margin: 20,
        flexDirection: 'row',
      },
});
