import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import cocina3 from '../imagen/cocina3.png';

const RegisterStage1 = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const navigation = useNavigation();

  const fetchRegister = () => {
    const data = JSON.stringify({
      mail: email,
      nickname: nickname
    });
    console.log('Email:', email);
    console.log('Nickname:', nickname);
    

    const config = {
      method: 'post',
      url: 'http://localhost:8080/usuarios/nuevousuario',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    navigation.navigate('RegisterStage2');
    /*
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        navigation.navigate('RegisterStage2');
        console.log('PASE LA 1ER ETAPA DE REGISTRACION!');
      })
      .catch(error => {
        console.log(error.response);
        if (error.response && error.response.status === 409) {
          alert('Ya existe una cuenta registrada con ese email.');
        } else {
          alert('Error en el servidor');
        }
      });
      */
    };



/* -------------------ESTE NO VA------------------------

  const handleRegister = async () => {
    // Realizar solicitud al backend para verificar disponibilidad de email y alias
    try {
        console.log('ENTRE A LA FUNCION')
      const response = await fetch('http://localhost:8080/usuarios/nuevousuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nickname }),
        
      });
      console.log('Email:', email);
      console.log('Nickname:', nickname);
      const data = await response.json();
    

      if (data.success) {
        Alert.alert('Registro exitoso', 'Se envió un correo electrónico de confirmación.');
      } else if (data.error) {
        Alert.alert('Error de registro', data.error);
      } else if (data.suggestedNicknames) {
        // Nicknames sugeridos
        // setSuggestedNicknames(data.suggestedNicknames);
      } else {
        // Otro error
        Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
      }
      

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
    }

    navigation.navigate('RegisterStage2')
    console.log('REDIRIGI')
  };
*/
  return (
    <View style={{ flex: 1 , backgroundColor: '#3f6654'}}>
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ backgroundColor: '#489c80', padding: 20}}>
  
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 280, height: 160}} source={cocina3} />
            </View>

          </View>
        </View>

        <View style={{ backgroundColor: '#489c80' }}>
          <View style={{ justifyContent: 'center', backgroundColor: '#FFFED3', //backgroundColor: '#a8e6c9',
          paddingHorizontal: 30, borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
            <View style={{ marginTop: 20, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding: 20 }}>Email</Text>
              <TextInput
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  width: 250,
                  height: 40,
                  margin: 5,
                  borderRadius: 100,
                  color: '#244f37',
                  //backgroundColor: '#5fc7a4',
                  backgroundColor: '#FFE5A6',
                  padding: 10,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Ingrese su email"
              />
            </View>

            <View style={{ marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding: 20 }}>Username</Text>
              <TextInput
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  width: 250,
                  height: 40,
                  margin: 5,
                  borderRadius: 100,
                  color: '#244f37',
                  //backgroundColor: '#5fc7a4',
                  backgroundColor: '#FFE5A6',
                  padding: 10,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={nickname}
                onChangeText={(text) => setNickname(text)}
                placeholder="Ingrese un nickname"
              />
            </View>

            <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={fetchRegister}>
                <View
                  style={{
                    margin: 5,
                    backgroundColor: '#244f37',
                    borderRadius: 100,
                    paddingVertical: 10,
                    textAlign: 'center',
                    width: 200,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 20 }}>Continuar</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{paddingVertical: 30, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#3f6654' }}>
                  Ya tienes una cuenta?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterStage1;