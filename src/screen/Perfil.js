import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import usuario from '../imagen/usuario.png';
//import EliminarUsuario from '../components/EliminarUsuario';

export default function Perfil({navigation}){
    return(

        <View style={{ flex:1}}> 
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 10}}>Perfil</Text>
                
                <Text style={{fontSize: 15}}>Configuracion de la cuenta</Text>

                <View style={{marginTop: 10, alignItems:'center',justifyContent: 'center'}}>
                    <Image style= {{width: 100, height: 60, resizeMode: 'center'}} source={usuario}/>
                </View>

                <Text style={{fontSize: 18, paddingVertical: 10, fontWeight: 'bold'}}>Juan Pablo</Text>
                <Text style={{fontSize: 15, paddingVertical: 5, fontWeight: 'semibold'}}>juanpablo17@gmail.com</Text>

                <View style={{display:'flex', marginTop: 15, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>  
                        <Text style={styles.buttonText}>Cerrar Sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>   
                        <Text style={styles.buttonText}>Eliminar Cuenta</Text>
                    </TouchableOpacity>
                </View>

            </View>
   
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor:'#FFFED3',
      },
      titulo: {
        marginTop: 20,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
      },
      button: {
        marginTop: 15,
        backgroundColor: '#C61D00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        paddingVertical: 5,
        paddingHorizontal: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 15,
      },
});