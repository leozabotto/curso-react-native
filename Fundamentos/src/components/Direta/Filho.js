import React from 'react'
import { Text } from 'react-native'
import Style from '../style'

export default props => {
  return (
    <>
      <Text style={Style.txtBig}>{props.a}</Text>
      <Text style={Style.txtBig}>{props.b}</Text>
    </>
  )
}