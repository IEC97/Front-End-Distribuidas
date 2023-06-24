import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import rodillo from '../imagen/rodillo.png';

const Login = () => {
    const [nickname, setNickname] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const navigation = useNavigation();
  
    const handleLogin = async () => {
      try {
        console.log('ENTRE A LA FUNCION');
        const response = await fetch('REEMPLAZAR CON LOGIN', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nickname, contrasenia }),
        });
        const data = await response.json();
    
        if (data.success) {
          Alert.alert('Login exitoso', 'Se accedió correctamente al sitio.');
        } else if (data.error) {
          Alert.alert('Error de login', data.error);
        } else {
          Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
        }
      } catch (error) {
        console.log(error);
        //Alert.alert('Error', 'Ocurrió un error al procesar el registro. Inténtalo nuevamente más tarde.');
      }
    
      console.log('Nickname:', nickname);
      console.log('Contraseña:', contrasenia);
      navigation.navigate('BottomTab');
      console.log('TERMINE EL PROCESO DE INICIO DE SESION');
    };
  
  return (
    <View style={{ flex:1}}>
    <ScrollView style={{flexGrow: 1, backgroundColor:'#FFF0B7'}}>

        {/*container - logo */}
        <View style={{backgroundColor: '#FFFDC3'}}>
            <View style={{backgroundColor: '#9C67A2', padding: 65, borderBottomLeftRadius: 35}}>
                
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
        <View style={{backgroundColor: '#9C67A2'}}>
            <View style={{justifyContent: 'center', backgroundColor: '#FFFED3', paddingHorizontal: 30, borderTopRightRadius: 35}}>
                
                <View style={{marginTop: 40, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#803269', padding:20}}>Username</Text>
                    <TextInput
                       style={{
                        fontSize: 20, textAlign: 'center', width: 300, height: 40, margin: 5,
                        borderRadius: 100, color: '#703701', backgroundColor: '#FFE5A6', padding: 10
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={nickname}
                        onChangeText={(text) => setNickname(text)}
                        placeholder="Ingrese un usuario"
                    />
                </View>

                <View style={{marginTop: 10, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#803269', padding:20}}>Password</Text>
                    <TextInput
                    style={{
                    fontSize: 20, textAlign: 'center', width: 300, height: 40, margin: 5,
                    borderRadius: 100, color: '#703701', backgroundColor: '#FFE5A6', padding: 10
                    }}
                    autoCapitalize='none' secureTextEntry autoCorrect={false}
                    placeholder='Ingrese su contraseña'
                    value={contrasenia}
                    onChangeText={text => setContrasenia(text)}
                />
                </View>

              <View style={{ display: 'flex', marginTop: 35, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={handleLogin}>
                  <Image style ={{width: 180, height: 35}} source={rodillo} />
              </TouchableOpacity>
              </View>     
              
                <View style={{ paddingVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterStage1')}>
                      <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#713700'}}><br></br>No tienes una cuenta?</Text>
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