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
      console.log('---------INGREDIENTES:', ingredientesArray)
      console.log('---------INGREDIENTES:', ingredientesArray)
      console.log('---------INGREDIENTES:', ingredientesArray)
      console.log('---------INGREDIENTES:', ingredientesArray)
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
                <Button title="Agregar paso" onPress={agregarPaso} />
            )}
            </View>
        ))}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={finalizarCarga} style={styles.button}>
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
});

export default Pasos;