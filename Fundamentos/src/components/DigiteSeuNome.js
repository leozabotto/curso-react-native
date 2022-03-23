import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Style from './style'

export default props => {

  const [nome, setNome] = useState('Teste')

  return (
    <View>
      <Text style={Style.txtBig}>{nome}</Text>
      <TextInput 
        placeholder="Digite seu Nome"
        value={nome} // null === uncontrolled
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  )
}