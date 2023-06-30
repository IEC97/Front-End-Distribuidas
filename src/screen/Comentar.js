import React, {useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { AirbnbRating, Input } from '@rneui/themed';



const Comentar=()=> {
    const[rating, setRating]=useState(null)
    const[title, setTitle]=useState("")
    const[errorTitle, setErrorTitle]=useState(null)
    const[review, setReview]=useState("")
    const[errorReview, setErrorReview]=useState(null)

    const addReview=()=>{
      console.log("Hola")
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>Tortilla de Papa</Text>
        </View>

        <View style={styles.imageView}>
          <Image style= {styles.imageStyle} source={tortilla}/>
        </View>
                    

          {/* <View>
            <Text style={styles.textStyle}>Titulo</Text>
            <Text style={styles.textStyle}>Tortilla de Papa</Text>
          </View> */}

        <View>
          <View>
            <AirbnbRating 
              count={5} 
              reviews={["Malo", "Regular","Normal", "Bueno", "Excelente"]}
              defaultRating={0}
              size={30}
            />
          </View>
        </View>

        <View>
          <Input placeholder="Titulo..."
            containerStyle={styles.Input}
            onChange={(e) =>setTitle(e.nativeEvent.text)}
            errorMessage={errorTitle}
          />
          <Input placeholder="Comentario..."
            containerStyle={styles.Input}
            style={styles.textArea}
            onChange={(e) =>setReview(e.nativeEvent.text)}
            errorMessage={errorReview}
          />
        </View>

        

        <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={addReview}>
              <View>
                <Text style={styles.textButton}>Enviar</Text>
              </View>
            </TouchableOpacity>
        </View>

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
        //justifyContent: 'space-evenly', 
        // alignItems: 'center', 
        borderRadius: 100, 
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20,
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
        alignItems:'center'
      },
  });