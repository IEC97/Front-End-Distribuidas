import React, {useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import ModalEditar from '../components/ModalEditar';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { View, StyleSheet, Text,TextInput, Image, useColorScheme, TouchableOpacity} from 'react-native';

const EditarRecetas=({navigation})=> {

  const[selectedImage, setSelectedImage]=useState(tortilla)

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundStyle = {
    flex: 1,
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: isModalOpen
      ? isDarkMode
        ? '#ffffff30'
        : 'gray'
      : isDarkMode
      ? '#000'
      : '#FFFED3',
  };
  return (
    <View style={backgroundStyle}>

      <View>
        <Text style={styles.textStyle}>Editar Imagen</Text>
        <View style={styles.iconoLapiz}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image 
              source={{uri:selectedImage}}
              style={styles.imageStyle}
            />
            <View style={styles.viewIcono}>
              <FontAwesome name="pencil-square" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
                  
      <View>
        <Text style={styles.textStyle}>Editar Titulo</Text>
        <TextInput
          style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Cambie el tiutlo de su receta"
        />               
      </View>
      
      <View>
        <Text style={styles.textStyle}>Ingredientes</Text>
        <Text style={styles.textStyle2}>Editar ingredientes</Text>

        <TouchableOpacity style={styles.buttonStyle2}  onPress={() => setIsModalOpen(!isModalOpen)}>
          <Text style={styles.textButton}>Aqui!</Text>
        </TouchableOpacity> 

        <ModalEditar  
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </View>

      <View>
        <Text style={styles.textStyle}>Preparacion</Text>
        <Text style={styles.textStyle2}>Presiona en un paso para verlo completo!</Text>
      </View>
                  
      <View style={styles.buttonStyle}>
        <TouchableOpacity>
            <View>
              <Text style={styles.textButton}>Editar</Text>
            </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}
export default EditarRecetas;

const styles = StyleSheet.create({
    iconoLapiz:{
      alignItems:"center", 
      marginVertical:25,
    },
    inputStyle:{
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
    viewIcono:{
      position:'absolute',
      bottom:0,
      right:0,
      zIndex:9999,
    },
    viewIcono2:{
      position:'absolute',
      bottom:0,
      right:45,
      zIndex:9999,
    },
    textStyle:{
      fontWeight: 'Bold', 
      paddingLeft: 5, 
      fontSize: 18, 
      color: 'black',
      marginTop: 10,
    },
    textStyle2:{
      fontWeight: '300', 
      paddingLeft: 5, 
      fontSize: 14, 
      color: 'black',
    },
    textButton:{
      color: 'white', 
      fontSize: 17,
    },
    buttonStyle:{
      margin: 5,
      backgroundColor: '#703701',
      borderRadius: 100,
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20,
    },
    buttonStyle2:{
      margin: 5,
      backgroundColor:  '#984C00',
      fontWeight: 'white',
      borderRadius: 100,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 10,
    },
    imageView:{
      marginTop: 10, 
      alignItems:'center'
    },
    imageStyle:{
      width: 120, 
      height: 85, 
      resizeMode: 'center',
      borderRadius: 100,
      borderWidth:2,
    },
  });