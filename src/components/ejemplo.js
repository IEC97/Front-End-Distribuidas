import React, { useState } from 'react';
import { View, Dimensions, Text, Picker, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

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
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(new Set());

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
    return Object.keys(categoriasIngredientes).map((categoria) => (
      <Picker.Item key={categoria} label={categoria} value={categoria} />
    ));
  };

  const renderizarIngredientesPorFila = ({ item }) => {
    return (
      <View style={styles.ingredientesContainer}>
        {item.map((ingrediente) => (
          <TouchableOpacity
            key={ingrediente}
            style={[styles.ingredienteButton, ingredientesSeleccionados.has(ingrediente) && styles.ingredienteButtonSelected]}
            onPress={() => seleccionarIngrediente(ingrediente)}
          >
            <Text style={styles.ingredienteText}>{ingrediente}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    
    <View style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Seleccionar los ingredientes</Text>
            <Text style={styles.label}>Selecciona una categoría:</Text>
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
                    keyExtractor={(item) => item.join()}
                    renderItem={renderizarIngredientesPorFila}
                    numColumns={1}
                />
            </View>
           
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaUnidades')}>
                    <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
            <Text style={{paddingTop: 10, fontSize: 12, fontStyle: 'italic'}}>Continuar con la seleccion de unidades por ingrediente.</Text>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFED3',
    flex: 1,
    flexWrap: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //maxWidth: windowWidth,
 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  picker: {
    marginBottom: 16,
  },
  ingredientesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ingredienteButton: {
    flex: 1,
    margin: 5,
    width: 200,
    backgroundColor: '#FFE5A6',
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
  ingredienteButtonSelected: {
    backgroundColor: '#c2780a',
  },
  ingredienteText: {
    fontSize: 14,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#703701',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 120,
  },
  buttonBack:{
    marginRight: 'auto',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#703701',
    alignItems: 'center',
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 60,
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

export default App;