import React from 'react'
import { Text } from 'react-native'

import Style from './style'

export default function Comp() {
  return <Text style={Style.txtBig}>Comp #Oficial</Text>
}

export function Comp1() {
  return <Text style={Style.txtBig}>Comp #01</Text>
}

export function Comp2() {
  return <Text style={Style.txtBig}>Comp #02</Text>
}

//export { Comp1, Comp2 }
//export default Comp