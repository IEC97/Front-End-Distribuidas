import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const unidades = ['Taza', 'Cucharada', 'Unidades', 'Mililitros', 'Gramos', 'Miligramos', 'Litros', 'Kilos'];

const ListaUnidades = () => {
  const navigation = useNavigation();
  const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState([]);

  const seleccionarUnidad = (unidad) => {
    setUnidadesSeleccionadas((prevSeleccionadas) => {
      const nuevasSeleccionadas = [...prevSeleccionadas];
      const index = nuevasSeleccionadas.indexOf(unidad);

      if (index > -1) {
        nuevasSeleccionadas.splice(index, 1);
      } else {
        nuevasSeleccionadas.push(unidad);
      }

      return nuevasSeleccionadas;
    });
  };

  const renderizarUnidades = () => {
    return unidades.map((unidad) => (
      <TouchableOpacity
        key={unidad}
        style={[
          styles.unidadButton,
          unidadesSeleccionadas.includes(unidad) && styles.unidadButtonSelected,
        ]}
        onPress={() => seleccionarUnidad(unidad)}
      >
        <Text style={styles.unidadText}>{unidad}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Seleccionar las unidades</Text>

      <View style={styles.unidadesContainer}>{renderizarUnidades()}</View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ejemplo2', { unidades: unidadesSeleccionadas})}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <Text style={{ paddingBottom: 40, fontSize: 12, fontStyle: 'italic' }}>
        Continuar con el resumen de la selección.
      </Text>
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
  unidadesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  unidadButton: {
    backgroundColor: '#9e4e02',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  unidadButtonSelected: {
    backgroundColor: '#f7dbb2',
  },
  unidadText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ListaUnidades;