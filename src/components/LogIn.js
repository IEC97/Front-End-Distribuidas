import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const LogIn = ({ navigation }) => {
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
                    <TextInput style={{fontSize: 20,textAlign: 'center',width:300,height: 40, margin: 5, borderRadius: 100, color:'#575D8E', backgroundColor: '#e7e7e7', padding: 10}}
                    autoCapitalize='none' autoCorrect={false} placeholder = {'Ingrese un username'}/>
                </View>

                <View style={{marginTop: 10, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#4f5898', padding:20}}>Password</Text>
                    <TextInput style={{textAlign: 'center',width:300, fontSize: 20, margin: 5, borderRadius: 100, color:'#575D8E', backgroundColor: '#e7e7e7', padding: 10}}
                    autoCapitalize='none' secureTextEntry autoCorrect={false} placeholder = {'Ingrese su contraseña'}/>
                </View>

                <TouchableOpacity style={{display:'flex', marginTop: 20, alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate('BottomTab')}>
                    <View style={{margin: 5, backgroundColor: '#4f5898', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:300}}>
                        <Text style={{color: 'white', fontSize: 20}}>Login</Text>
                    </View>
                </TouchableOpacity>


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

export default LogIn;

const styles = StyleSheet.create({

});