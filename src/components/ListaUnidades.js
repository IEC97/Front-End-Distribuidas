import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const unidades = ['Gramos', 'Kilos', 'Litros', 'Mililitros', 'Pieza/Unidad'];

const ListaUnidades = ({ route }) => {
  const navigation = useNavigation();
  const [cantidades, setCantidades] = useState({});
  const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState({});

  const { ingredientes } = route.params;

  const seleccionarCantidad = (ingrediente, cantidad) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [ingrediente.idIngrediente]: cantidad,
    }));
  };

  const seleccionarUnidad = (ingrediente, unidad) => {
    setUnidadesSeleccionadas((prevUnidadesSeleccionadas) => ({
      ...prevUnidadesSeleccionadas,
      [ingrediente.idIngrediente]: unidad,
    }));
  };

  const renderizarIngredientes = ({ item }) => (
    <View style={styles.ingredienteContainer}>
      <Text style={styles.ingredienteNombre}>{item.nombre}</Text>
      <Text style={styles.ingredienteCantidad}>Cantidad:</Text>
      <TextInput
        style={styles.inputCantidad}
        keyboardType="numeric"
        value={cantidades[item.idIngrediente] ? cantidades[item.idIngrediente].toString() : ''}
        onChangeText={(text) => seleccionarCantidad(item, parseInt(text))}
      />
      <Text style={styles.ingredienteUnidad}>Unidad:</Text>
      <Picker
        style={styles.pickerUnidad}
        selectedValue={unidadesSeleccionadas[item.idIngrediente]}
        onValueChange={(itemValue) => seleccionarUnidad(item, itemValue)}
      >
        {unidades.map((unidad) => (
          <Picker.Item key={unidad} label={unidad} value={unidad} />
        ))}
      </Picker>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButton}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Lista de Unidades</Text>
      <FlatList
        data={ingredientes}
        keyExtractor={(item) => item.idIngrediente.toString()}
        renderItem={renderizarIngredientes}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pasos')}>
          <Text style={styles.buttonText}>Continuar</Text>
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
  ingredienteContainer: {
    marginBottom: 20,
  },
  ingredienteNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredienteCantidad: {
    fontSize: 16,
    marginBottom: 5,
  },
  ingredienteUnidad: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputCantidad: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  pickerUnidad: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
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

export default ListaUnidades;