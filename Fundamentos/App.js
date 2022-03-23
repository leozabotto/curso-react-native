import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Aleatorio from './src/components/Aleatorio';
import Botao from './src/components/Botao';
import Contador from './src/components/Contador';
import Pai from './src/components/Direta/Pai';
import MinMax from './src/components/MinMax'
import CompPadrao, { Comp1, Comp2 } from './src/components/Mult'
import PrimeiroComponente from './src/components/Primeiro'
import Titulo from './src/components/Titulo';
import PaiIndireto from './src/components/Indireta/Pai';
import ContadorV2 from './src/components/Contador/ContadorV2';
import Diferenciar from './src/components/Diferenciar';
import ParImpar from './src/components/ParImpar';


import Membro from './src/components/Relacao/Membro';
import Familia from './src/components/Relacao/Familia';
import UsuarioLogado from './src/components/UsuarioLogado';
import ListaProdutos from './src/components/Produtos/ListaProdutos';
import ListaProdutosV2 from './src/components/Produtos/ListaProdutosV2';
import DigiteSeuNome from './src/components/DigiteSeuNome';
import FlexboxV1 from './src/components/layout/FlexboxV1';
import FlexboxV2 from './src/components/layout/FlexboxV2';
import FlexboxV3 from './src/components/layout/FlexboxV3';
import FlexboxV4 from './src/components/layout/FlexboxV4';

export default function App() {
  return (
    <SafeAreaView style={style.App}>      
      <FlexboxV4 />

      {/* 
      
      <DigiteSeuNome />

      <ListaProdutosV2 />

      <ListaProdutos />

      <UsuarioLogado usuario={{ nome: 'Leo', email: 'leo@leo.com' }}/>

      <Familia>
        <Membro nome="Ana" sobrenome="Silva" /> 
        <Membro nome="Julio" sobrenome="Silva" /> 
        <Membro nome="Mariana" sobrenome="Silva" /> 
      </Familia>
      
      <ParImpar num={2} />

      <Diferenciar />

      <PrimeiroComponente />

      <ContadorV2 />

      <Pai />
      <PaiIndireto />

      <Botao />

      <Titulo principal={"Olá"} secundario={"Seja bem-vindo!"} />
      
      <Contador inicial={100} />
      
      <Aleatorio />

      <MinMax min={1} max={94} />
      <MinMax min={3} max={20} />

      <CompPadrao />
      <Comp1 />
      <Comp2 /> 

      */}

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1, // ou flex: 1
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
})