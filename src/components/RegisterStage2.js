import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lechuga from '../imagen/lechuga.png';
import cheff3 from '../imagen/cheff3.png';

const RegisterStage2 = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const navigation = useNavigation();

  const handleRegister2 = async () => {
    // Realizar solicitud al backend para verificar disponibilidad de email y alias
    try {
        console.log('ENTRE A LA FUNCION')
      const response = await fetch('/usuarios/terminaralta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, contrasenia }),
        
      });
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Contraseña:', contrasenia);
      const data = await response.json();

      

      if (data.success) {
        Alert.alert('Muchas gracias por registrarte!');
      } else if (data.error) {
        Alert.alert('Error de registro', data.error);
      } else {
        // Otro error
        Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
      }
      
      
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
    }
    navigation.navigate('Login')
    console.log('TERMINE EL PROCESO DE REGISTRACION')
  };

    return (
    <View style={{ flex: 1 , backgroundColor: '#3f6654'}}>
        <ScrollView >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.goBackButton}>Volver</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ marginLeft:140,fontWeight: '500', fontSize: 25, color: '#ffffff' }}>Registrar</Text>
                  
                  <Image style={styles.image} source={cheff3} />
                  
                </View>
            </View>

            <View style={{ backgroundColor: '#489c80' }}>
              <View style={{ justifyContent: 'center', backgroundColor: '#a8e6c9', paddingHorizontal: 30, borderTopLeftRadius: 35,borderTopRightRadius: 35 }}>
                <View style={{ marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding: 20 }}>Nombre</Text>
                  <TextInput
                      style={{
                      fontSize: 20, textAlign: 'center', width: 250, height: 40, margin: 5,
                      borderRadius: 100, color: '#244f37', backgroundColor: '#5fc7a4', padding: 10
                      }}
                      autoCapitalize='none' autoCorrect={false}
                      placeholder='Ingrese su nombre'
                      value={nombre}
                      onChangeText={text => setNombre(text)}
                  />
                </View>

                <View style={{ marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding: 20 }}>Apellido</Text>
                  <TextInput
                      style={{
                      fontSize: 20, textAlign: 'center', width: 250, height: 40, margin: 5,
                      borderRadius: 100, color: '#244f37', backgroundColor: '#5fc7a4', padding: 10
                      }}
                      autoCapitalize='none' autoCorrect={false}
                      placeholder='Ingrese su apellido'
                      value={apellido}
                      onChangeText={text => setApellido(text)}
                  />
                </View>

                <View style={{ marginTop: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding: 20 }}>Password</Text>
                  <TextInput
                      style={{
                      fontSize: 20, textAlign: 'center', width: 250, height: 40, margin: 5,
                      borderRadius: 100, color: '#244f37', backgroundColor: '#5fc7a4', padding: 10
                      }}
                      autoCapitalize='none' secureTextEntry autoCorrect={false}
                      placeholder='Ingrese su contraseña'
                      value={contrasenia}
                      onChangeText={text => setContrasenia(text)}
                  />
                </View>

                <View style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
                  <TouchableOpacity onPress={handleRegister2}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ width: 120, height: 80}} source={lechuga} />
                    </View>
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
      image: {
        marginLeft: 40,
        width: 100,
        height: 140,
      },
});