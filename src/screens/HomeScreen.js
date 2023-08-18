import React, { useState} from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacityComponent } from 'react-native';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const screenHeight = Dimensions.get('screen').height;
export default function HomeScreen() {
    const [addNew, setAddNew] = useState(false);
    const [task, setTask] = useState('');
  return (
    <SafeAreaView style = {{marginHorizontal: 20,}} >
        {/*Contenedor del input*/}
        {
            addNew && (
                <View>
            <TextInput
                onChange = {setTask}
                placeholder = "Agrega una tarea"
                style = {styles.input}
                value = {task}
                />
        
        <View style ={{marginVertical:  10, flexDirection:  'row'}}>
            <TouchableOpacity
            style ={[styles.button, styles.acceptButton]}>
                <Text style = {styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style ={[styles.button, styles.cancelButton]}
            onPress = {() => setAddNew(false)}
            >
                <Text style = {styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            </View>
            </View> 
            )
        }
       
        {/* Boton para agregar una tarea */}
        <View style = {styles.addButtonLocator}>
        <TouchableOpacity style ={ styles.addButton}
        onPress = {() => setAddNew(true)}
        >
      <Text style ={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    </View>
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    acceptButton: {
        backgroundColor: 'green',
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: 950,
        borderRadius: 30,
        height:50,
        justifyContent: 'center',
        width:50,
    }
    ,addButtonLocator: {
        right: 10,
        top: screenHeight - 100,
        position: 'absolute',
    }
    ,addButtonText: {
        color: 'white',
        fontSize: 24,
    },
    button: {
        alignSelf: 'flex-start',
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    cancelButton: {
        backgroundColor: 'red',
        marginLeft: 10,
    },
    input: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 10,
    }
})
