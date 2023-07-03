import React, {useRef,useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import ModalEditar from '../components/ModalEditar';
import {FontAwesome,Ionicons} from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import Loading from '../components/Loading';
import {isEmpty} from 'lodash'
import {Input} from '@rneui/themed';
import  Toast  from 'react-native-easy-toast';
import {useNavigation} from '@react-navigation/native';
import {View,StyleSheet,Text,Image,useColorScheme,TouchableOpacity} from 'react-native';

const EditarRecetas=()=> {
  const toastRef=useRef()
  const[selectedImage, setSelectedImage]=useState(tortilla)

  const[campos, setCampos]=useState("")
  const[errorCampos, setErrorCampos]=useState(null)
  const[loading, setLoading]=useState(false)
  const navigation = useNavigation();

  const editar=()=>{
    if (!validForm()){
      return
    }
    setLoading(true)
    setLoading(false)
  }

  const validForm=()=>{
    setErrorCampos(null)
    let isValid=true
    if(!campos){
      toastRef.current.show("Debes completar el campo", 3000)
      isValid=false
    }
    if(isEmpty(campos)){
      setErrorCampos("Debes completar el campo.")
      isValid=false
    }
    return isValid
  }

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

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.viewIcono2}>
              <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>

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
        <Input
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Cambie el tiutlo de su receta"
          onChange={(e) =>setCampos(e.nativeEvent.text)}
          errorMessage={errorCampos}
        />               
      </View>
      
      <View>
        <Text style={styles.textStyle}>Editar ingredientes</Text>

        <View style={styles.buttonStyle2}>
          <TouchableOpacity   onPress={() => setIsModalOpen(!isModalOpen)}>
            <Text style={styles.textButton}>Aqui!</Text>
          </TouchableOpacity>
        </View>

        <ModalEditar  
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </View>

      <View>
        <Text style={styles.textStyle}>Editar Pasos</Text>
        
      </View>
                  
      
      <TouchableOpacity style={styles.buttonStyle} onPress={editar}>
        <Text style={styles.textButton}>Guardar</Text>
      </TouchableOpacity>
      <Toast ref={toastRef} position="center" opacity={0.9}/>
      <Loading isVisible={loading} text="Guardando..."/>

    </View>
  );
}
export default EditarRecetas;

const styles = StyleSheet.create({
    iconoLapiz:{
      alignItems:"center", 
      marginVertical:25,
    },
    input:{
      fontSize: 15,
      textAlign: 'center',
      width: 150,
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
      top:7,
      right:230,
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