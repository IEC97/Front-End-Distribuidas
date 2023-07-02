import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import rodillo from '../imagen/rodillo.png';
import cheff from '../imagen/cheff.png';
import axios from 'axios';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const navigation = useNavigation();

  const fetchLogin = () => {

  navigation.navigate('BottomTab');

    const data = JSON.stringify({
      nickname: nickname,
      contrasenia: contrasenia
    });
    console.log('Email:', email);
    console.log('Nickname:', nickname);

    const config = {
      method: 'post',
      url: 'http://localhost:8080/usuarios/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        navigation.navigate('BottomTab');
        console.log('TERMINE EL PROCESO DE INICIO DE SESION');
      })
      .catch(error => {
        console.log(error.response.data);
        if (error.response && error.response.status === 401) {
          alert('Credenciales inválidas');
        } else {
          alert('Error en el servidor');
        }
      }); 
    };
  
  return (


    //<View style={{ flex: 1, backgroundColor: '#fcdc8d' }}>
    //<View style={{ flex: 1, backgroundColor: '#6b4070'}}>
    <View style={{ flex: 1, backgroundColor: '#502f54'}}>
      <ScrollView>
        <View style={{ backgroundColor: '#9C67A2', padding: 25}}>

          <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
            <Image style={styles.image} source={cheff} />
            <Text style={{ marginRight: 120, fontWeight: '500', fontSize: 25, color: '#ffffff' }}>Iniciar Sesion</Text>
            
          </View>
  

        </View>


        {/* container - login */}
        <View style={{ backgroundColor: '#9C67A2' }}>
          <View style={{ justifyContent: 'center', backgroundColor: '#FFFED3', paddingHorizontal: 30, borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
            <View style={{ marginTop: 40, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#803269', padding: 20 }}>Username</Text>
              <TextInput
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  width: 250,
                  height: 40,
                  margin: 5,
                  borderRadius: 100,
                  color: '#703701',
                  backgroundColor: '#FFE5A6',
                  padding: 10
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={nickname}
                onChangeText={text => setNickname(text)}
                placeholder="Ingrese un usuario"
              />
            </View>

            <View style={{ marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#803269', padding: 20 }}>Password</Text>
              <TextInput
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  width: 250,
                  height: 40,
                  margin: 5,
                  borderRadius: 100,
                  color: '#703701',
                  backgroundColor: '#FFE5A6',
                  padding: 10
                }}
                autoCapitalize="none"
                secureTextEntry
                autoCorrect={false}
                placeholder="Ingrese su contraseña"
                value={contrasenia}
                onChangeText={text => setContrasenia(text)}
              />
            </View>

            <View style={{ display: 'flex', marginTop: 35, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={fetchLogin}>
                <Image style={{ width: 180, height: 35 }} source={rodillo} />
              </TouchableOpacity>
            </View>
    
            <View style={{ paddingVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate('RegisterStage1')}>
                <Text style={{ fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#713700' }}>
                  <br />
                  No tienes una cuenta?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    marginRight: 20,
    width: 120,
    height: 140,
  },
})