import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';

const LogIn = props => {
  return (
    <View>
        <View style={{backgroundColor: '#ffffff'}}>
            <View style={{backgroundColor: '#4f5898', padding: 50, borderBottomLeftRadius: 60}}>
                <View style={{}}>
                    <Image Style={{width:100, height: 100, resizeMode:'contain'}} source={require('../assets/favicon.png')}/>
                </View>
            </View>
        </View>

    </View>
    );
};

export default LogIn;

const styles = StyleSheet.create({

});