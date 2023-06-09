import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import cocina3 from '../imagen/cocina3.png';


const RegisterStage1 = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  
  const fetchRegister = () => {
    // Validar el formato del email
    if (!email.includes('@')) {
      setErrorMessage('Ingrese un email válido');
      return;
    }
  
    const data = JSON.stringify({
      mail: email,
      nickname: nickname
    });
  
    const config = {
      method: 'post',
      url: 'http://localhost:8080/usuarios/nuevousuario',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        navigation.navigate('RegisterStage2');
        console.log('PASE LA 1ER ETAPA DE REGISTRACION!');
      })
      .catch(error => {
        console.log(error.response);
        if (error.response && error.response.status === 409) {
          setErrorMessage('Ya existe una cuenta registrada con ese email.');
        } else {
          setErrorMessage('Error en el servidor');
        }
      });
  };
  
  return (
    <View style={{ flex: 1 , backgroundColor: '#3f6654'}}>
      <ScrollView>
        <View style={styles.container}>

          <View>
            <Image style={styles.image} source={cocina3} />
          </View> 
          
        </View>
        
        <View style={{ backgroundColor: '#489c80' }}>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="Ingrese su email"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={nickname}
                onChangeText={text => setNickname(text)}
                placeholder="Ingrese un nickname"
              />
            </View>

            {errorMessage ? (
              <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'red', fontSize: 16 }}>{errorMessage}</Text>
              </View>
            ) : null}

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={fetchRegister} style={styles.button}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Ya tienes una cuenta?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginRight: 1,
    backgroundColor: '#489c80',
    padding: 15,
  }, 
  image: {
    width: 280,
    height: 160,
    alignSelf: 'center',
    marginTop: 20,
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
    justifyContent: 'center'
  },
  button: {
    margin: 5,
    backgroundColor: '#244f37',
    borderRadius: 100,
    paddingVertical: 10,
    textAlign: 'center',
    width: 200
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  loginContainer: {
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    fontWeight: '300',
    paddingLeft: 5,
    fontSize: 17,
    color: '#3f6654'
  }
});

export default RegisterStage1;