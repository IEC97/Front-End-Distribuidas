const uploadImage = async () => {
    const data = new FormData();
    data.append('file', {
      uri: imagenSeleccionada.uri,
      type: 'image/jpg',
      name: 'image.jpg',
    });

    try {
      const idReceta = response.data.idReceta;
      console.log('Id de la receta: -----',idReceta)
      const response = await axios.post(`http://localhost:8080/recetas/addfotounica/${idReceta}`, data);
      console.log('IMAGEN GUARDADA!!!!-----', response.data);
      navigation.navigate('ListaIngredientes', { idReceta: response.data.idReceta });
    }
    catch (error) {
      console.log('Error al cargar la receta:', error);
      // Manejar el error en caso de que no se pueda cargar la receta
    }
  };


<View>
    <Text style={styles.titulo}>Cargar Imágenes</Text>
</View>

{/* Vista de imagenes */}
{imagenSeleccionada !== null && (
    <View style={styles.imageContainer}>
    <Image source={{ uri: imagenSeleccionada.uri }} style={styles.image} resizeMode="cover" />
    <TouchableOpacity onPress={() => setImagenSeleccionada(null)}>
        <Image style={{ alignSelf: 'center', width: 20, height: 20, marginTop: 5 }} source={eliminarImg} />
    </TouchableOpacity>
    </View>
)}

<TouchableOpacity onPress={() => handleAñadirImagen()}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Subir</Text>
    </View>
</TouchableOpacity>