import React from 'react'
import { Text } from 'react-native'

import Filho from './Filho'

export default props => {
  const x = 13
  const y = 13
  
  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={x + 100} b={y + 100} />
    </>
  )
}