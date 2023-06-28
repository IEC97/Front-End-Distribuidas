import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>

        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>

      <Text>Selecciona una o varias opciones:</Text>
      <View style={styles.ingredientesContainer}>
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
      </View>
      <Text>Opciones seleccionadas:</Text>
      {opcionesSeleccionadas.map((opcion) => (
        <Text key={opcion.id}>{opcion.label}</Text>
      ))}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFED3',
},
button: {
  marginBottom: 10,
  backgroundColor: '#703701',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  paddingVertical: 5,
  paddingHorizontal: 15,
},
buttonBack: {
    marginRight: 'auto',
    backgroundColor: '#703701',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
},
ingredientesContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  flex:1,
},

  optionButton: {
    flexGrow: 1,
    flexDirection: 'row',
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