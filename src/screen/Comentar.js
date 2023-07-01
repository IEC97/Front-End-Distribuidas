import React, {useRef, useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { AirbnbRating, Input } from '@rneui/themed';
import  Toast  from 'react-native-easy-toast';
import {isEmpty} from 'lodash'
import Loading from '../components/Loading';
//{navigation, route}

const Comentar=()=> {
  //const {idUsuario}=route.params
  const toastRef=useRef()

  const[rating, setRating]=useState(null)
  const[title, setTitle]=useState("")
  const[errorTitle, setErrorTitle]=useState(null)
  const[review, setReview]=useState("")
  const[errorReview, setErrorReview]=useState(null)
  const[loading, setLoading]=useState(false)
  

  const addReview=()=>{
    if (!validForm()){
      return
    }
  }
  const validForm=()=>{
    setErrorTitle(null)
    setErrorReview(null)
    let isValid=true

    if(!rating){
      toastRef.current.show("Debes darle una puntuacion a la receta.", 3000)
      isValid=false
    }
    if(isEmpty(title)){
      setErrorTitle("Debes imgresar un titulo a tu comentario.")
      isValid=false
    }
    if(isEmpty(review)){
      setErrorReview("Debes ingresar un comentario.")
      isValid=false
    }
    return isValid
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Tortilla de Papa</Text>
      </View>

      <View style={styles.imageView}>
        <Image style= {styles.imageStyle} source={tortilla}/>
      </View>

      <View>
        <View style={styles.viewRating}>
          <AirbnbRating 
            count={5} 
            reviews={["Malo", "Regular","Normal", "Bueno", "Excelente"]}
            defaultRating={0}
            size={30}
            onFinishRating={(value)=>setRating(value)}
          />
        </View>
      </View>

      <View style={styles.formReview}>
        <Input placeholder="Titulo..."
          containerStyle={styles.input}
          onChange={(e) =>setTitle(e.nativeEvent.text)}
          errorMessage={errorTitle}
        />
        <Input placeholder="Comentario..."
          containerStyle={styles.input}
          style={styles.textArea}
          multiline
          onChange={(e) =>setReview(e.nativeEvent.text)}
          errorMessage={errorReview}
        />
      </View>

      <TouchableOpacity onPress={addReview} style={styles.buttonStyle}>
        <View>
          <Text style={styles.textButton}>Enviar</Text>
        </View>
      </TouchableOpacity>
      <Toast ref={toastRef} position="center" opacity={0.9}/>
      <Loading isVisible={loading} text="Enviando comentario..."/>
    </View>
  );
}
export default Comentar;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor:'#FFFED3',
      },
      viewRating:{
        height:50,
        backgroundColor:"#f2f2f2",
      },
      textStyle:{
        fontWeight: 'Bold',
        paddingLeft: 5,
        fontSize: 18,
        color: 'black',
        marginTop: 10,
      },
      buttonStyle:{
        margin: 5,
        backgroundColor: '#703701',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 10,
      },
      textButton:{
        color: 'white',
        fontSize: 17,
      },
      imageStyle:{
        width: 120,
        height: 70,
        resizeMode: 'center',
        borderRadius: 100,
      },
      imageView:{
        marginTop: 10,
        alignItems:'center',
      },
      formReview:{
        flex: 1,
        alignItems:'center',
        margin:10,
        marginTop:20,
      },
      input:{
        marginBottom:20,
      },
      textArea:{
        height:150,
        width:"100%",
        padding:0,
        margin:0,
      },
  });
  