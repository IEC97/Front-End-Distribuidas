import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base';
import { ActivityIndicator } from 'react-native';

const Loading=({isVisible, text})=> {
  return (
    <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(0,0,0,0.5)"
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlay}
    >
        <View styles={styles.view}>
            <ActivityIndicator 
                size="large"
                color="#442484"
            />
            {
                text && <Text style={styles.text}>{text}</Text>
            }
        </View>
    </Overlay>
  );
}
export default Loading;
const styles = StyleSheet.create({
    overlay:{
        height: 100,
        width: 150,
        backgroundColor: "#fff",
        borderColor: "#442484",
        borderWidth:2,
        borderRadius:10,
    },
    view:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        color:"black",
        marginTop:10,
        textAlign:"center",
    },
})