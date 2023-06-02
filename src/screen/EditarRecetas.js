import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const EditarRecetas=()=> {
    return (
        <View>
            {/*container - login*/}
            <View>
                <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 40}}>
                    <View style={{marginTop: 50}}>
                        <Text style={{color: 'black', fontSize: 20}}>Editar Receta</Text>
                        <Image style= {{width: 40, height: 35, resizeMode: 'contain'}}/>
                    </View>

                    <View style={{marginTop: 60}}>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#999999'}}>Titulo</Text>
                    </View>
                    <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/>

                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#999999'}}>Ingredientes</Text>
                    </View>
                    <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/>
                    
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#999999'}}>Preparacion</Text>
                    </View>
                    <TextInput style={{height: 30, margin: 5, borderRadius: 100, backgroundColor: '#e7e7e7', padding: 10}} autoCapitalize='none' autoCorrect={false} value={''}/>
                    


                    <TouchableOpacity style={{marginTop: 30}}>
                        <View style={{margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
                            <Text style={{color: 'white', fontSize: 20}}>Eliminar</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop: 30}}>
                        <View style={{margin: 5, backgroundColor: '#4f5898', justifyContent: 'center', alignItems: 'center', borderRadius: 100, paddingVertical: 10}}>
                            <Text style={{color: 'white', fontSize: 20}}>Editar</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}
export default EditarRecetas;