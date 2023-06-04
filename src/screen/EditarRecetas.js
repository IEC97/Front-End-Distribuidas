import * as React from 'react';
import tortilla from '../imagen/tortilla.jpg';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
const Separator = () => <View style={styles.separator} />;

const EditarRecetas=()=> {
    return (
        <View style={{flex:1}}>
            <View>
                <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 20}}>
                    
                    <View style={{marginTop: 20}}>
                        <Text style={{color: 'black', fontSize: 20}}>Editar Receta</Text>
                    </View>
                    <Separator />

                    <View style={{marginTop: 10, alignItems:'center'}}>
                        <Image style= {{width: 120, height: 70, resizeMode: 'center',borderRadius: 100}} source={tortilla}/>
                    </View>
                    <Separator />

                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Titulo</Text>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 15, color: 'black'}}>Tortilla de Papa</Text>
                    </View>
                    {/* <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/> */}

                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Ingredientes</Text>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 14, color: '#999999'}}>Editar ingredientes</Text>
                    </View>
                    {/* <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/> */}
                    
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Preparacion</Text>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 14, color: '#999999'}}>Presiona en un paso para verlo completo!</Text>
                    </View>
                    {/* <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/> */}
                    

                    <Separator />
                    <TouchableOpacity style={{marginTop: 20}}>
                        <View style={{margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
                            <Text style={{color: 'white', fontSize: 17}}>Eliminar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop: 20}}>
                        <View style={{margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
                            <Text style={{color: 'white', fontSize: 17}}>Editar</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}
export default EditarRecetas;

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });