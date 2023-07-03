import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lechuga3 from '../imagen/lechuga3.png';
import cheff3 from '../imagen/cheff3.png';
import axios from 'axios';

const RegisterStage2 = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const navigation = useNavigation();

  const handleRegister2 = async () => {
    try {
      const response = await axios.post('http://localhost:8080/usuarios/terminaralta', {
        mail,
        nickname,
        nombre,
        avatar: null,
        apellido,
        contrasenia,
        clavederecu: null,
      });

      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Contraseña:', contrasenia);

      if (response.data.success) {
        Alert.alert('Muchas gracias por registrarte!');
      } else if (response.data.error) {
        Alert.alert('Error de registro', response.data.error);
      } else {
        Alert.alert(
          'Error',
          'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.'
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Error',
        'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.'
      );
    }

    navigation.navigate('Login');
    console.log('TERMINE EL PROCESO DE REGISTRACION');
  };
    return (
    <View style={{ flex: 1 , backgroundColor: '#3f6654'}}>
        <ScrollView >
            <View style={styles.container}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.goBackButton}>Volver</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ marginLeft:120,fontWeight: '500', fontSize: 25, color: '#ffffff' }}>Registrar</Text>
                  
                  <Image style={styles.image} source={cheff3} />
                  
                </View>
            </View>

            <View style={{ backgroundColor: '#489c80' }}>
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Nombre</Text>
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none' autoCorrect={false}
                      placeholder='Ingrese su nombre'
                      value={nombre}
                      onChangeText={text => setNombre(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Apellido</Text>
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none' autoCorrect={false}
                      placeholder='Ingrese su apellido'
                      value={apellido}
                      onChangeText={text => setApellido(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                  <TextInput
                      style={styles.input}
                      autoCapitalize='none' secureTextEntry autoCorrect={false}
                      placeholder='Ingrese su contraseña'
                      value={contrasenia}
                      onChangeText={text => setContrasenia(text)}
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={handleRegister2}>
                    <Image style={styles.imagenBoton} source={lechuga3} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
};

export default RegisterStage2;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginRight: 1,
        backgroundColor: '#489c80',
        padding: 15,
        
      },
      goBackButton: {
        color: '#ffffff',
        fontSize: 17,
        backgroundColor: '#244f37',
        borderRadius: 100,
        textAlign: 'center',
        width: 80,
      },
      formContainer: {
        backgroundColor: '#FFFED3',
        paddingHorizontal: 30,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: 'center'
      },
      inputContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      label: {
        fontWeight: '600',
        paddingLeft: 5,
        fontSize: 26,
        color: '#246b54',
        padding: 20
      },
      image: {
        marginLeft: 10,
        width: 100,
        height: 140,
      },
      input: {
        fontSize: 20,
        textAlign: 'center',
        width: 250,
        height: 40,
        margin: 5,
        borderRadius: 100,
        color: '#244f37',
        backgroundColor: '#FFE5A6',
        padding: 10
      },
      buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
      },
      imagenBoton: {
        width: 110,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center' 
      },
});