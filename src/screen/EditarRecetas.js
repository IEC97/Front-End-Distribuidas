import React, {useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import ModalEditar from '../components/ModalEditar'
import { View, StyleSheet, Text, Image, useColorScheme, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';


const EditarRecetas=({})=> {
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
        <Text style={styles.textStyle}>Editar Receta</Text>
      </View>

      <View style={styles.imageView}>
        <Image style= {styles.imageStyle} source={tortilla}/>
      </View>
                  
      <View>
        <Text style={styles.textStyle}>Titulo</Text>
        <Text style={styles.textStyle}>Tortilla de Papa</Text>
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
                  
      <TouchableOpacity style={styles.buttonStyle}>
        <View>
          <Text style={styles.textButton}>Eliminar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}>
        <View>
          <Text style={styles.textButton}>Editar</Text>
        </View>
      </TouchableOpacity> 
    </View>
  );
}
export default EditarRecetas;

const styles = StyleSheet.create({
    // container: {
    //     flexGrow: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingVertical: 20,
    //     backgroundColor:'#FFFED3',
    //   },
    
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
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 100, 
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20,
    },
    buttonStyle2:{
      margin: 5, 
      backgroundColor:  '#984C00',
      fontWeight: 'white', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 100, 
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 10,
    },
    imageStyle:{
      width: 120, 
      height: 70, 
      resizeMode: 'center',
      borderRadius: 100,
    },
    imageView:{
      marginTop: 10, 
      alignItems:'center'
    },

  });