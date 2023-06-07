import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [nickname, setNickname] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const navigation = useNavigation();
  
    const handleLogin = async () => {
      // Realizar solicitud al backend para verificar login
      try {
          console.log('ENTRE A LA FUNCION')
        const response = await fetch('REEMPLAZAR CON LOGIN', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nickname, contrasenia }),
          
        });
        console.log('Nickname:', nickname);
        console.log('Contraseña:', contrasenia);
        const data = await response.json();
      
  
        if (data.success) {
          Alert.alert('Login exitoso', 'Se accedio correctamente al sitio.');
        } else if (data.error) {
          Alert.alert('Error de login', data.error);
        }  else {
          // Otro error
          Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
        }
        
    } catch (error) {
        console.log(error);
        //Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
      }
      navigation.navigate('BottomTab')
      console.log('TERMINE EL PROCESO DE REGISTRACION')
    };
  
  return (
    <View style={{ flex:1}}>
    <ScrollView>
        {/*container - logo */}
        <View style={{backgroundColor: '#ffffff'}}>
            <View style={{backgroundColor: '#6874C3', padding: 65, borderBottomLeftRadius: 35}}>
                
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image Style={{width:100, height: 100, resizeMode:'contain'}}/>
                </View>
                
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{fontWeight: '500', fontSize: 25, color: '#ffffff'}}>Iniciar Sesion</Text>
                    <Text style={{fontWeight: '400', fontSize: 20, color: '#ffffff'}}>Student</Text>
                </View>
            
            </View>
        </View>
        {/*container - login*/}
        <View style={{backgroundColor: '#6874C3'}}>
            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 30, borderTopRightRadius: 35}}>
                
                <View style={{marginTop: 40, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#4f5898', padding:20}}>Username</Text>
                    <TextInput
                        style={{
                        fontSize: 20,
                        textAlign: 'center',
                        width: 300,
                        height: 40,
                        margin: 5,
                        borderRadius: 100,
                        color: '#244f37',
                        backgroundColor: '#e7e7e7',
                        padding: 10,
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={nickname}
                        onChangeText={(text) => setNickname(text)}
                        placeholder="Ingrese un usuario"
                    />
                </View>

                <View style={{marginTop: 10, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#4f5898', padding:20}}>Password</Text>
                    <TextInput
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  width: 300,
                  height: 40,
                  margin: 5,
                  borderRadius: 100,
                  color: '#244f37',
                  backgroundColor: '#e7e7e7',
                  padding: 10,
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={contrasenia}
                onChangeText={(text) => setContrasenia(text)}
                placeholder="Ingrese su contraseña"
              />
                </View>

               
                <View style={{display:'flex', marginTop: 20, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={handleLogin}>

                    <View style={{margin: 5, backgroundColor: '#4f5898', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:300}}>
                        <Image source={require('./ruta/imagen.png')} />
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterStage1')}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#0A5269'}}><br></br>No tienes una cuenta?</Text>
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

});