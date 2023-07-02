import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base';
import { ActivityIndicator } from 'react-native-web';

const Loading=({isVisible, text})=> {
  return (
    <Overlay
        isVisible={isVisible}
        windowBackgroundColor="rgba(0,0,0,0.5)"
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlay}
    >
        <View>
            <ActivityIndicator/>
            {
                text && <Text>{text}</Text>
            }
        </View>
    </Overlay>
  );
}
export default Loading;
const styles = StyleSheet.create({
    overlay:{
        height: 100,
        width: 100,
        backgroundColor: "#fff",
        borderColor: "#442484",
        borderWidth:2,
        borderRadius:10,
    },
    // view:{

    // },
})