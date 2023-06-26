import * as React from 'react';
import tortilla from '../imagen/tortilla.jpg';
import ModalEditar from '../components/ModalEditar'
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';


const EditarRecetas=()=> {
    return (
        <View style={styles.container}>
            <View>
                <View style={{marginTop: 20}}>
                    <Text style={{color: 'black', fontSize: 20}}>Editar Receta</Text>
                </View>
                    

                <View style={{marginTop: 10, alignItems:'center'}}>
                    <Image style= {{width: 120, height: 70, resizeMode: 'center',borderRadius: 100}} source={tortilla}/>
                </View>
                    

                <View style={{marginTop: 10}}>
                     <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Titulo</Text>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 15, color: 'black'}}>Tortilla de Papa</Text>
                </View>
                    {/* <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/> */}

                <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Ingredientes</Text>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 14, color: '#999999'}}>Editar ingredientes</Text><Button title="Open Modal"/><ModalEditar/>
                </View>
                    {/* <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/> */}
                    
                <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: 'black'}}>Preparacion</Text>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 14, color: '#999999'}}>Presiona en un paso para verlo completo!</Text>
                </View>
                    {/* <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/> */}
                    

                    
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
    );
}
export default EditarRecetas;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor:'#FFFED3',
      },
  });