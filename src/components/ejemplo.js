import React, { useState } from 'react';
import { Dimensions, FlatList, Picker, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Na } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categoriasIngredientes = {
  'Verduras': ['Zanahoria', 'Cebolla', 'Tomate', 'Lechuga', 'Morron', 'Espinaca', 'Brócoli'],
  'Carnes y pescados': ['Pollo', 'Vaca', 'Cerdo', 'Salmón', 'Merluza', 'Camarones'],
  'Lácteos y productos lácteos': ['Leche', 'Leche condensada', 'Leche de almendras', 'Leche de coco', 'Leche de soja', 'Crema de leche', 'Queso crema', 'Queso azul', 'Queso mozzarella', 'Yogurt'],
  'Huevos': ['Huevos frescos', 'Clara de huevo', 'Yema de huevo'],
  'Legumbres': ['Arvejas', 'Lentejas', 'Garbanzos'],
  'Frutas': ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Uva', 'Ananá', 'Mango'],
  'Hierbas y especias': ['Albahaca', 'Orégano', 'Perejil', 'Cilantro', 'Cúrcuma', 'Comino', 'Canela'],
  'Condimentos y salsas': ['Sal', 'Pimienta', 'Salsa de soja', 'Dulce de leche', 'Ketchup', 'Mostaza', 'Vinagre', 'Barbacoa', 'Mayonesa', 'Miel'],
  'Aceites y grasas': ['Aceite de oliva', 'Aceite de girasol', 'Manteca', 'Margarina'],
  'Frutos secos y semillas': ['Almendras', 'Nueces', 'Semillas de chía', 'Arroz', 'Quinoa', 'Avena', 'Semillas de girasol', 'Semillas de sésamo'],
  'Harinas y panadería': ['Harina de trigo', 'Harina de maíz', 'Levadura', 'Azúcar'],
  'Azúcares y endulzantes': ['Azúcar blanco', 'Azúcar negro', 'Stevia', 'Splenda'],
  'Bebidas': ['Agua', 'Café', 'Té', 'Jugo de naranja', 'Vino tinto', 'Vino blanco'],
  'Ingredientes enlatados y en conserva': ['Atún', 'Choclo', 'Aceitunas', 'Champiñones'],
};
const windowWidth = Dimensions.get('window').width;

const App = () => {
    const navigation = useNavigation();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(
      new Set()
    );
    

    const mostrarIngredientes = (categoria) => {
      setCategoriaSeleccionada(categoria);
      setIngredientes(categoriasIngredientes[categoria]);
    };
  
    const seleccionarIngrediente = (ingrediente) => {
      setIngredientesSeleccionados((prevSeleccionados) => {
        const nuevosSeleccionados = new Set(prevSeleccionados);
  
        // Si el ingrediente ya está seleccionado, se deselecciona
        if (nuevosSeleccionados.has(ingrediente)) {
          nuevosSeleccionados.delete(ingrediente);
        } else {
          // Si el ingrediente no está seleccionado, se selecciona
          nuevosSeleccionados.add(ingrediente);
        }
  
        return nuevosSeleccionados;
      });
    };
  
    const renderizarIngredientes = ({ item }) => (
        <TouchableOpacity
          style={[styles.ingredienteButton, ingredientesSeleccionados.has(item) && styles.ingredienteButtonSelected]}
          onPress={() => seleccionarIngrediente(item)}
        >
          <Text style={styles.ingredienteText}>{item}</Text>
        </TouchableOpacity>
      );
  
    const renderizarCategorias = () => {
        const categoriasOrdenadas = Object.keys(categoriasIngredientes).sort();
        return categoriasOrdenadas.map((categoria) => (
          <Picker.Item key={categoria} label={categoria} value={categoria} />
        ));
      };
  
    const renderizarIngredientesPorFila = ({ item }) => {
      const ingredientesPorFila = [];
      for (let i = 0; i < item.length; i += 1) {
        const fila = item.slice(i, i + 1);
        ingredientesPorFila.push(fila);
      }
  
      return (
        <View style={styles.ingredientesContainer}>
          {ingredientesPorFila.map((fila, index) => (
            <View key={index} >
              {fila.map((ingrediente) => (
                <TouchableOpacity
                  key={ingrediente}
                  style={[
                    styles.ingredienteButton,
                    ingredientesSeleccionados.has(ingrediente) &&
                      styles.ingredienteButtonSelected,
                  ]}
                  onPress={() => seleccionarIngrediente(ingrediente)}
                >
                  <Text style={styles.ingredienteText}>{ingrediente}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      );
    };
  
    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
  
          <Text style={styles.title}>Seleccionar los ingredientes</Text>
          <Text style={styles.label}>Elige una categoría:</Text>
          <Picker
            selectedValue={categoriaSeleccionada}
            onValueChange={mostrarIngredientes}
            style={styles.picker}
          >
            <Picker.Item label="-- Seleccionar --" value="" />
            {renderizarCategorias()}
          </Picker>
  
          <Text style={styles.title}>Ingredientes:</Text>
          <FlatList
            data={ingredientes}
            keyExtractor={(item) => item}
            renderItem={renderizarIngredientes}
            numColumns={3}
          />
  
          <Text style={styles.title}>Ingredientes seleccionados:</Text>
          <View style={styles.ingredientesSeleccionadosContainer}>
            <FlatList
              data={[Array.from(ingredientesSeleccionados)]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderizarIngredientesPorFila}
            />
          </View>

          <View style={{textAlign: 'center', padding: 30}}>
                <Text style={{fontSize: 15}}>Alguno de los ingredientes que usas no está en la lista?
                Añadilo acá!</Text>
                    
                <View>
                    <TextInput
                    style={{
                        fontSize: 15, alignSelf: 'center',textAlign: 'center', width: 200, height: 30, margin: 5, 
                        borderRadius: 100, color: 'black', backgroundColor: '#f7dbb2', padding: 10
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
            <Text style={{paddingBottom: 20, fontSize: 12, fontStyle: 'italic'}}>Continuar con la seleccion de unidades por ingrediente.</Text>
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
        backgroundColor: '#703701',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
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
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    picker: {
        width: windowWidth - 40,
        marginBottom: 20,
        textAlign: 'center',
    },
    ingredienteButton: {
        backgroundColor: '#E66262',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginRight: 10,
    },
    ingredienteButtonSelected: {
        backgroundColor: '#FAB3B3',
    },
    ingredienteText: {
        fontSize: 16,
        color: 'black',
    },
    ingredientesSeleccionadosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 35,
        marginTop: 10,
        marginBottom: 10,
    },
    ingredientesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1,
    },
    filaContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5,
    },
  });
  
  export default App;