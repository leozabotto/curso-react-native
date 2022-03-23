import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../style'
import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props => {
  const [num, setNum] = useState(10)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return (
    <>
      <Text style={Style.txtBig}>
        Contador
      </Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  )
}