import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import usuario from '../imagen/usuario.png';
import EliminarUsuario from '../components/EliminarUsuario';

export default function Perfil({navigation}){
    return(

        <View style={{ flex:1}}> 
            <ScrollView>
                <View style={{padding:20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 26, fontWeight: 'bold'}}>Perfil</Text>
                
                <Text style={{fontSize: 20}}>Configuracion de la cuenta</Text>

                <View style={{marginTop: 10, alignItems:'center',justifyContent: 'center'}}>
                    <Image style= {{width: 120, height: 70, resizeMode: 'center'}} source={usuario}/>
                </View>

                <Text style={{fontSize: 23, paddingVertical: 10, fontWeight: 'bold'}}>Juan Pablo</Text>
                <Text style={{fontSize: 23, paddingVertical: 5, fontWeight: 'semibold'}}>juanpablo21@gmail.com</Text>

                <View style={{display:'flex', marginTop: 20, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={{margin: 5, backgroundColor: '#C61D00', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:300}}>
                        <Text style={{color: 'white', fontSize: 20}}>Cerrar Sesión</Text>
                    </View>
                </TouchableOpacity>


                <View style={{display:'flex', marginTop: 20, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <View style={{margin: 5, backgroundColor: '#A61900', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:300}}>
                        <Text style={{color: 'white', fontSize: 20}}>Eliminar Cuenta</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        </ScrollView>
    </View>
    );
}