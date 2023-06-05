import React, { useState } from 'react';
import { View, Button, Alert} from 'react-native';
import Toast from 'react-native-toast-message';

const EliminarUsuario = () => {
  const [usuarioEliminado, setUsuarioEliminado] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);


  const handleEliminarUsuario = () => {
    Alert.alert(
      'Eliminar Usuario',
      '¿Estás seguro de que deseas eliminar este usuario?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            // Lógica para eliminar el usuario
            eliminarUsuario();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const eliminarUsuario = () => {
    // Simulación de eliminación de usuario
    // Aquí puedes realizar una llamada a la API o ejecutar la lógica necesaria para eliminar el usuario
  
    // Si la eliminación es exitosa
    setUsuarioEliminado(true);
  
    // Mostrar notificación
    setToastVisible(true);
  };
  

  return (
    <View>
      <Button title="Eliminar Usuario" onPress={handleEliminarUsuario} />
    </View>
  );
};

export default EliminarUsuario;