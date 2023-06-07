import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    <View style={{ flex: 1 }}>
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.goBackButton}>Volver</Text>
                </TouchableOpacity>

                <View style={{ paddingLeft: 50,justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500', fontSize: 25, color: '#ffffff' }}>Registrar</Text>
                    <Text style={{ fontWeight: '400', fontSize: 20, color: '#ffffff', fontStyle: 'italic' }}>Solo unos datos más... ¡Ya casi!</Text>
                </View>
            </View>

            
            

            <View style={{ backgroundColor: '#489c80' }}>
            <View style={{ justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 30, borderTopRightRadius: 35 }}>
                <View style={{ marginTop: 40, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding: 20 }}>Nombre</Text>
                <TextInput
                    style={{
                    fontSize: 20, textAlign: 'center', width: 300, height: 40, margin: 5,
                    borderRadius: 100, color: '#244f37', backgroundColor: '#e7e7e7', padding: 10
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
                    fontSize: 20, textAlign: 'center', width: 300, height: 40, margin: 5,
                    borderRadius: 100, color: '#244f37', backgroundColor: '#e7e7e7', padding: 10
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
                    fontSize: 20, textAlign: 'center', width: 300, height: 40, margin: 5,
                    borderRadius: 100, color: '#244f37', backgroundColor: '#e7e7e7', padding: 10
                    }}
                    autoCapitalize='none' secureTextEntry autoCorrect={false}
                    placeholder='Ingrese su contraseña'
                    value={contrasenia}
                    onChangeText={text => setContrasenia(text)}
                />
                </View>

                <View style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
                <TouchableOpacity onPress={handleRegister2}>
                    <View style={{ margin: 5, backgroundColor: '#244f37', borderRadius: 100, paddingVertical: 10, textAlign: 'center', width: 300 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Finalizar</Text>
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
        flexDirection: 'row',
        alignContent: 'space-between',
        marginRight: 1,
        backgroundColor: '#489c80',
        padding: 65,
        borderBottomLeftRadius: 35,
      },
      goBackButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        backgroundColor: '#244f37',
        borderRadius: 100,
        textAlign: 'center',
        width: 100,
        paddingVertical: 5,
      }
});