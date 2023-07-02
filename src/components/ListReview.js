import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button } from 'react-native';

const ListReview=({navigation, idUsuario})=> {
  const [userLogged, setUserLogged]=useState(false)
  
  return (
    <View>
      {
        userLogged?(
          <Button
            buttonStyle={styles.btnAddReview}
            title="Escribe una opinion"
            titleStyle={styles.btnTitleAddReview}
            icon={{
              type:"material-community",
              name:"square-edit-outline",
              color:"#a375c7"
            }}
          />
        ):(
          {/* <Text
            style={styles.mustLoginText}
            onPress={()=>navigation.navigate("login")}
          >

          </Text> */}
        )
      }
    </View>
  );
}
export default ListReview;
const styles = StyleSheet.create({
  btnAddReview:{
    backgroundColor:"transparent",
  },
  btnTitleAddReview:{
    color:"#a376c7",
  }
})