import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Resumen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { unidades } = route.params;
  const [cantidades, setCantidades] = useState({});

  const actualizarCantidad = (ingrediente, cantidad) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [ingrediente]: cantidad,
    }));
  };

  const renderizarIngredientes = () => {
    const ingredientesSeleccionados = Object.keys(cantidades);
    return ingredientesSeleccionados.map((ingrediente) => (
      <View key={ingrediente} style={styles.ingredienteContainer}>
        <Text style={styles.ingredienteText}>{ingrediente}</Text>
        <TextInput
          style={styles.cantidadInput}
          keyboardType="numeric"
          onChangeText={(text) => actualizarCantidad(ingrediente, text)}
          value={cantidades[ingrediente]}
          placeholder="Cantidad"
        />
      </View>
    ));
  };

  const continuar = () => {
    // Realizar las acciones necesarias con los datos recopilados
    navigation.navigate('Resultado');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Resumen de ingredientes</Text>

      <View style={styles.ingredientesContainer}>{renderizarIngredientes()}</View>

      <TouchableOpacity style={styles.button} onPress={continuar}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFED3',
  },
  buttonBack: {
    marginRight: 'auto',
    backgroundColor: '#703701',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientesContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ingredienteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ingredienteText: {
    fontSize: 16,
    marginRight: 10,
  },
  cantidadInput: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default Resumen;