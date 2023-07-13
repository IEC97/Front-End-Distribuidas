import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Pasos = () => {
    const navigation = useNavigation();
    const [pasos, setPasos] = useState([{ texto: '' }]);
    const [receta, setReceta] = useState({
      imagen: '',
      nombre: '',
      cantidadPersonas: 0,
      ingredientes: [],
      pasos: [{ texto: '' }],
    });

    const agregarPaso = () => {
        setPasos([...pasos, { texto: '' }]);
    };

    const handleChangeTexto = (texto, index) => {
        const nuevosPasos = [...pasos];
        nuevosPasos[index].texto = texto;
        setPasos(nuevosPasos);
    };

    const finalizarCarga = () => {
      navigation.navigate('BottomTab');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.goBackButton}>Volver</Text>
            </TouchableOpacity>

        <Text style={styles.title}>Pasos de la receta</Text>
        {pasos.map((paso, index) => (
            <View key={index} style={styles.pasoContainer}>
            <TextInput
                style={styles.input}
                placeholder="Escribe el paso"
                value={paso.texto}
                onChangeText={(texto) => handleChangeTexto(texto, index)}
            />
            {index === pasos.length - 1 && (
                <Button style={{backgroundColor: '#3f6654'}} title="Agregar paso" onPress={agregarPaso} />
            )}
            </View>
        ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={finalizarCarga} style={styles.buttonFinal}>
              <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFED3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  pasoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#FFE5A6',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    padding: 5,
  },
  goBackButton: {
    color: '#ffffff',
    fontSize: 15,
    backgroundColor: '#70011b',
    borderRadius: 100,
    textAlign: 'center',
    justifyContent: 'center',
    width: 80,
    padding: 5,
    marginBottom: 20,
  },
  agregarPaso:{
    backgroundColor: '#3f6654',
  },
  buttonFinal:{
    marginTop: 10,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 150,
  },
  buttonText:{
    color: 'white',
    fontSize: 15,
  },
  buttonContainer:{
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
    flexDirection: 'row',
    marginTop: 50
  },
});

export default Pasos;