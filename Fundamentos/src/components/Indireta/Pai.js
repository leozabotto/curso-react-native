import React, { useState } from 'react'
import { Text } from 'react-native'
import style from '../style'

import Filho from './Filho'

export default props => {
  const [num, setNum] = useState(0)

  function exibirValor(num) {
    setNum(num)
  }

  return (
    <>
      <Text style={style.txtBig}>{num}</Text>
      <Filho 
        min={1}
        max={60}
        funcao={exibirValor} 
      />
    </>
  )
}