import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const TaskItem = ({onPress, task}) => {
  return (
    <View style ={ styles.container}>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {onPress}
        />
        <Text style = {styles.text}>{task}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: 'white',
        borderRadius: 15,
        height: 30,
        width: 30,

    },

    container: {
        alignItems: 'center',
        backgroundColor: '#212121',
        borderRadius: 15,
        flexDirection: 'row',
        padding: 10,
    
    },
    text :{
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
    }
})
export default TaskItem