import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const opciones = [
  { id: 1, label: 'Opción 1' },
  { id: 2, label: 'Opción 2' },
  { id: 3, label: 'Opción 3' },
  { id: 4, label: 'Opción 4' },
];

const ListaIngredientes =  () => {
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);
  const navigation = useNavigation();
  //navigation.navigate('Login');

  const handleSeleccionarOpcion = (opcion) => {
    const opcionIndex = opcionesSeleccionadas.findIndex((o) => o.id === opcion.id);

    if (opcionIndex !== -1) {
      setOpcionesSeleccionadas(prevSeleccionadas =>
        prevSeleccionadas.filter((o) => o.id !== opcion.id)
      );
    } else {
      setOpcionesSeleccionadas(prevSeleccionadas => [...prevSeleccionadas, opcion]);
    }
  };

  return (
      <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.container}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Volver</Text>
              </TouchableOpacity>
              <View>
                  <Text style={styles.titulo}>Seleccionar ingredientes</Text>
              </View>

              {/* Opciones */}
              <View>
                {opciones.map((opcion) => (
                  <TouchableOpacity
                    key={opcion.id}
                    onPress={() => handleSeleccionarOpcion(opcion)}
                    style={[
                      styles.optionButton,
                      opcionesSeleccionadas.some((o) => o.id === opcion.id) && styles.optionButtonSelected,
                    ]}
                  >
                    <Text>{opcion.label}</Text>
                  </TouchableOpacity>
                ))}
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={styles.titulo}>Opciones seleccionadas:</Text>
                  {opcionesSeleccionadas.map((opcion) => (
                    <Text style={{textAlign: 'center'}} key={opcion.id}>{opcion.label}</Text>
                  ))}
                </View>
                
                <View style={{textAlign: 'center', padding: 30}}>
                    <Text style={{fontSize: 15}}>Alguno de los ingredientes que usas no está en la lista?
                    Añadilo acá abajo y lo revisaremos!</Text>
                      
                    <View>
                      <TextInput
                        style={{
                          fontSize: 15, alignSelf: 'center',textAlign: 'center', width: 200, height: 30, margin: 5, 
                          borderRadius: 100, color: '#703701', backgroundColor: '#FFE5A6', padding: 10
                          }}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Ingrese otro ingrediente"
                      />
                    </View>
                </View>
       
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaUnidades')}>
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
            <Text style={{paddingTop: 10, fontSize: 12, fontStyle: 'italic'}}>Continuar con la seleccion de unidades por ingrediente.</Text>

          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor:'#FFFED3',
  },
  titulo: {
    margin: 10,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  optionButton: {
    fontSize: 15, textAlign: 'center', width: 100, height: 20, margin: 5, 
    borderRadius: 100, color: '#703701', backgroundColor: '#FFE5A6',
  },
  optionButtonSelected: {
    backgroundColor: '#c2780a',
  },
  optionButtonText: {
    fontWeight: 'bold',
  },
 
});

export default ListaIngredientes;
