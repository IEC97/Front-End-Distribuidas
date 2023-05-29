import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';

const LogIn = props => {
  return (
    <View>
        {/*container - logo */}
        <View style={{backgroundColor: '#ffffff'}}>
            <View style={{backgroundColor: '#4f5898', padding: 65, borderBottomLeftRadius: 35}}>
                
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
        <View style={{backgroundColor: '#4f5898'}}>
            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 30, borderTopRightRadius: 35}}>
                
                <View style={{marginTop: 60}}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#999999'}}>Username</Text>
                </View>
                <TextInput style={{height: 40, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={'Username'}/>

                <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#999999'}}>Password</Text>
                </View>
                <TextInput style={{height: 40, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={'password'}/>
                
                <TouchableOpacity style={{marginTop: 30}}>
                    <View style={{margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
                        <Text style={{color: 'white', fontSize: 20}}>Login</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <Image style= {{width: 40, height: 35, resizeMode: 'contain'}}/>
                </View>

                <View>
                    <Image style= {{width: 40, height: 35, resizeMode: 'contain'}}/>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#999999'}}>No tienes cuenta?</Text>
                </View>

            </View>
        </View>
    </View>
    );
};

export default LogIn;

const styles = StyleSheet.create({

});