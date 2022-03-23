import React from 'react'
import { Text } from 'react-native'
import Style from './style'

export default props => {
  return (
    <Text style={Style.txtBig}>
      {props.num % 2 === 0 ? 'Par' : 'Ímpar'}
    </Text>
  )
}