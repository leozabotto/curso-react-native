import React, { useState } from 'react'

import {
  Button,
  Text,
} from 'react-native'

import Style from './style'

export default function(props) {  
  const [num, setNum] = useState(props.inicial)

  const inc = () => setNum(num + 1)
  const dec = () => setNum(num - 1)

  return (
    <>
      <Text style={Style.txtBig}>{num}</Text>
      <Button 
        title="+"
        onPress={inc}
      />
      <Button 
        title="-"
        onPress={dec}
      />
    </>
  )
}