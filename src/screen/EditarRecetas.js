import React, {useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import ModalEditar from '../components/ModalEditar'
import { View, StyleSheet, Text, Image, useColorScheme, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';


const EditarRecetas=()=> {
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isModalOpen
      ? isDarkMode
        ? '#ffffff30'
        : 'gray'
      : isDarkMode
      ? '#000'
      : '#fff',
  };

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 17,
    fontWeight: '300',
  };
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <Text style={{color: 'black', fontSize: 20}}>Editar Receta</Text>
        </View>

        <View style={{marginTop: 10, alignItems:'center'}}>
          <Image style= {{width: 120, height: 70, resizeMode: 'center',borderRadius: 100}} source={tortilla}/>
        </View>
                    
        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Titulo</Text>
          <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 15, color: 'black'}}>Tortilla de Papa</Text>
        </View>
        
        <View>
          <Text style={textStyle}>Ingredientes</Text>
          <Text style={textStyle}>Editar ingredientes</Text>
          <Button title="Aqui" onPress={() => setIsModalOpen(!isModalOpen)}/> 

          <ModalEditar  
            isDarkMode={isDarkMode}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Preparacion</Text>
          <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 14, color: '#999999'}}>Presiona en un paso para verlo completo!</Text>
        </View>
                    
        <TouchableOpacity style={{marginTop: 20}}>
          <View style={{margin: 5, backgroundColor: '#703701', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
            <Text style={{color: 'white', fontSize: 17}}>Eliminar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 20}}>
          <View style={{margin: 5, backgroundColor: '#703701', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
            <Text style={{color: 'white', fontSize: 17}}>Editar</Text>
          </View>
        </TouchableOpacity>
            
      </View>
    );
}
export default EditarRecetas;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor:'#FFFED3',
      },
    textStyle2:{

    }, 
  });