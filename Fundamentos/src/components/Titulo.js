import {
  View,
  Text,
} from 'react-native'

import Style from './style'

export default function(props) {
  return (

    //React.Fragment
    <>
      <Text style={Style.txtBig}>{props.principal}</Text>
      <Text>{props.secundario}</Text>
    </>
  )
}