import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const opciones = [
  { id: 1, label: 'Opción 1', screen: 'Screen1' },
  { id: 2, label: 'Opción 2', screen: 'Screen2' },
  { id: 3, label: 'Opción 3', screen: 'Screen3' },
  { id: 4, label: 'Opción 4', screen: 'Screen4' },
];

const MultipleSelect = () => {
  const navigation = useNavigation();
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

  const handleSeleccionarOpcion = (opcion) => {
    const opcionIndex = opcionesSeleccionadas.findIndex((o) => o.id === opcion.id);

    if (opcionIndex !== -1) {
      setOpcionesSeleccionadas(prevSeleccionadas =>
        prevSeleccionadas.filter((o) => o.id !== opcion.id)
      );
    } else {
      setOpcionesSeleccionadas(prevSeleccionadas => [...prevSeleccionadas, opcion]);
      // Navegar a la pantalla correspondiente al seleccionar una opción
      navigation.navigate(opcion.screen);
    }
  };

  return (
    <View>
      <Text>Selecciona una o varias opciones:</Text>
      {opciones.map((opcion) => (
        <TouchableOpacity
          key={opcion.id}
          onPress={() => handleSeleccionarOpcion(opcion)}
          style={[
            styles.optionButton,
            opcionesSeleccionadas.some((o) => o.id === opcion.id) && styles.optionButtonSelected,
          ]}
        >
          <Text style={styles.optionButtonText}>{opcion.label}</Text>
        </TouchableOpacity>
      ))}
      <Text>Opciones seleccionadas:</Text>
      {opcionesSeleccionadas.map((opcion) => (
        <Text key={opcion.id}>{opcion.label}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    backgroundColor: '#EEE',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionButtonSelected: {
    backgroundColor: '#CCC',
  },
  optionButtonText: {
    fontWeight: 'bold',
  },
});

export default MultipleSelect;