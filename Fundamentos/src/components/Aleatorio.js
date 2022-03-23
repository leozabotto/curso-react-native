import {
  Text
} from 'react-native'

import Style from './style'

export default function() {
  return (
    <Text style={Style.txtBig}>
      {(Math.random() * (1000 - 0) + 0).toFixed(0)}
    </Text>
  )
}