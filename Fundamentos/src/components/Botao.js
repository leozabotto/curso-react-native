import {
  Button,
  Text,
} from 'react-native'

import Style from './style'

export default function(props) {


  return (
    <>
      <Button 
        title="Executar #01"
        onPress={executar}
      />

      <Button 
        title="Executar #02"
        onPress={() => {
          console.warn("Executei 2 \o/")
        }}
      />  
    </>
  )
}