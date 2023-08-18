import { View, Text } from 'react-native'
import React from 'react'

const ListHeader = () => {
  return (
    <View style ={{marginBottom: 15}}>  
      <Text style ={{fontSize: 30, fontWeight:'bold',}}>Mis Tareas</Text>
    </View>
  )
}

export default ListHeader