import * as React from 'react';
import tortilla from '../imagen/tortilla.jpg';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
const Separator = () => <View style={styles.separator} />;

export default function Cargar({navigation}){
    return(
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text style={{fontSize: 26, fontWeight: 'bold'}}>Hola</Text>
        // </View>
        <View>
            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 20}}>
                <View style={{marginTop: 20}}>
                    <Text style={{color: 'black', fontSize: 20}}>Cargar Receta</Text>
                </View>
            </View>
            <Separator />

            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 20}}>
                <View style={{marginTop: 10}}>
                    <Text style={{color: 'black', fontSize: 20}}>Cargar Imagen</Text>
                </View>
            </View>
            <Separator />
            
            <View style={{marginTop: 10, alignItems:'center',justifyContent: 'center'}}>
                <Image style= {{width: 120, height: 70, resizeMode: 'center',borderRadius: 100}} source={tortilla}/>
            </View>
            <Separator />

            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 20}}>
                <View style={{marginTop: 10}}>
                    <Text style={{color: 'black', fontSize: 20}}>Ingrese el titulo de la receta</Text>
                </View>
                <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/>
            </View>
            <Separator />

            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 20}}>
                <View style={{marginTop: 10}}>
                    <Text style={{color: 'black', fontSize: 20}}>Ingredientes</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{color: 'black', fontSize: 15}}>Seleccione los ingredientes</Text>
                </View>
            </View>
            <Separator />

            <TouchableOpacity style={{marginTop: 20}}>
                <View style={{margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>Siguiente</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
