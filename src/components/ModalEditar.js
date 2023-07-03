import * as React from 'react';
import {Text,Modal,View,TouchableOpacity,StyleSheet} from 'react-native';

const ModalEditar=({isModalOpen, setIsModalOpen})=>{

  return(
    <Modal visible={isModalOpen} transparent={true} animationType={'slide'}>
      <View style={styles.modalContainerStyle}>
        <View style={styles.modalStyle}>
          <Text style={styles.titleStyle}>Ingredientes</Text>
            
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => setIsModalOpen(!setIsModalOpen)}
            >
            <Text style={styles.textButton}>Cerrar</Text>
            </TouchableOpacity>

        </View>
      </View>
    </Modal> 
    );
};
export default ModalEditar;

const styles = StyleSheet.create({
  modalStyle:({
    backgroundColor:  'white',
    alignItems: 'center',
    margin: 20,
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }),
  // optionContainer:({
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   marginVertical: 10,
  // }),
  modalContainerStyle:({
    flex: 1,
    justifyContent: 'center',
  }),
  // optionTextStyle:({
  //   fontSize: 18,
  //   fontWeight: '500',
  //   color: 'black',
  // }),
  titleStyle:({
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }),
  buttonStyle:({
    margin: 5, 
    backgroundColor: '#703701',  
    borderRadius: 100, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  }),
  textButton:({
    color: 'white', 
    fontSize: 17,
  }),
});