import React from 'react'
import { Text } from 'react-native'
import Style from './style'
import If from './If'

export default props => {
  const usuario = props.usuario || {}
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Style.txtBig}>Usuário Logado:</Text>
          <Text style={Style.txtBig}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  )
}