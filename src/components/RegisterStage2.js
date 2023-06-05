import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const RegisterStage2 = ({ navigation }) => {
  return (
    <View style={{ flex:1}}> 
        <ScrollView>
            
            <View style={styles.container}>
               
                    
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterStage1')}>
                            <View style={{backgroundColor: '#244f37', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:150}}>
                                <Text style={{color: 'white', fontSize: 20}}>Volver</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                        
                    <View style={{paddingLeft :420,justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontWeight: '500', fontSize: 25, color: '#ffffff'}}>Registrar</Text>
                        <Text style={{fontWeight: '400', fontSize: 20, color: '#ffffff', fontStyle: 'italic'}}>Solo unos datos más... ¡Ya casi!</Text>
                    </View>
                
               
            </View>

            <View style={{backgroundColor: '#489c80'}}>
                <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 30, borderTopRightRadius: 35}}>
                    
                    <View style={{marginTop: 40, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding:20}}>Nombre</Text>
                        <TextInput style={{fontSize: 20,textAlign: 'center',width:300,height: 40, margin: 5, borderRadius: 100, color:'#244f37', backgroundColor: '#e7e7e7', padding: 10}}
                        autoCapitalize='none' autoCorrect={false} placeholder = {'Ingrese su nombre'}/>
                    </View>

                    <View style={{marginTop: 10, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding:20}}>Apellido</Text>
                        <TextInput style={{fontSize: 20,textAlign: 'center',width:300,height: 40, margin: 5, borderRadius: 100, color:'#244f37', backgroundColor: '#e7e7e7', padding: 10}}
                        autoCapitalize='none' autoCorrect={false} placeholder = {'Ingrese su apellido'}/>
                    </View>

                    <View style={{marginTop: 10, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding:20}}>Password</Text>
                        <TextInput style={{fontSize: 20,textAlign: 'center',width:300,height: 40, margin: 5, borderRadius: 100, color:'#244f37', backgroundColor: '#e7e7e7', padding: 10}}
                        autoCapitalize='none' secureTextEntry autoCorrect={false} placeholder = {'Ingrese su nombre'}/>
                    </View>

                    <View style={{display:'flex', marginTop: 20, alignItems:'center', justifyContent:'center', paddingBottom:20}}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterStage2')}>
                            <View style={{margin: 5, backgroundColor: '#244f37', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:300}}>
                                <Text style={{color: 'white', fontSize: 20}}>Finalizar</Text>
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
        borderBottomLeftRadius: 35
        },
});