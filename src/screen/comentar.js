import React, {useRef, useState} from 'react';
import tortilla from '../imagen/tortilla.jpg';
import {View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import {AirbnbRating,Input} from '@rneui/themed';
import {Ionicons} from '@expo/vector-icons'; 
import  Toast  from 'react-native-easy-toast';
import {isEmpty, result} from 'lodash'
import Loading from '../components/Loading';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Comentar=()=> {
  const {id} = route.params
  const toastRef=useRef()

  const[rating, setRating]=useState(null)
  const[review, setReview]=useState("")
  const[errorReview, setErrorReview]=useState(null)
  const[loading, setLoading]=useState(false)
  //const [valorar, setValorar] = useState([]);

  // const [usuario, setUsuario] = useState('');
  // const [receta, setReceta] = useState('');
  // const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.post('http://localhost:8080/recetas/calificar');
        const data = response.data;
        setCalificacion(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReview();
  }, []);
  const AddReview=async()=>{

    if (!validForm()){
      return
    }
    // const data = JSON.stringify({
    //   idusuario: usuario,
    //   idreceta: receta,
    //   //calificacion: 5,
    //   comentarios: comentario
    // });

    // const config = {
    //   method: 'post',
    //   url: 'http://localhost:8080/recetas/calificar',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };
    // axios(config)
    //   .then((response) => {
    //   console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setLoading(true)
    setLoading(false)
  };

  const validForm=()=>{
    setErrorReview(null)
    let isValid=true

    if(!rating){
      toastRef.current.show("Debes darle una puntuacion a la receta.", 3000)
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.viewIcono2}>
            <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.textStyle}>{calificacion.id_receta}</Text>
      <Text style={styles.textStyle}>Tortilla de Papa</Text>
    
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
        <Input placeholder="Comentario..."
          containerStyle={styles.input}
          style={styles.textArea}
          multiline
          onChange={(e) =>setReview(e.nativeEvent.text)}
          errorMessage={errorReview}
        />
      </View>

      <TouchableOpacity onPress={AddReview} style={styles.buttonStyle}>
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
        backgroundColor:"#FFFED3",
      },
      viewIcono2:{
        position:'absolute',
        top:7,
        right:80,
        zIndex:9999,
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
        alignItems:'center',
        margin:10,
        marginTop:50,
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