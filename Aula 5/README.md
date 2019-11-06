# Quinta Aula Props e Callbacks

[PDF da aula](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%205/Props%20e%20Callbacks.pdf)

[Material extra (Props)](https://facebook.github.io/react-native/docs/props)

[Material extra (Callback)](https://medium.com/@thejasonfile/callback-functions-in-react-e822ebede766)

* MeuBotao.js

```Javascript
import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

class MeuBotao extends React.Component {

    state = {
        texto : this.props.texto
    }

    render(){
        return(
            <TouchableOpacity 
            onPress={() => this.setState({texto:'Fui pressionado!'})}
            style={{
                width: '100%',
                height: 30,
                backgroundColor: 'green',
                marginBottom: 5
            }}>
                <Text style={{
                    alignSelf: 'center',
                    color: 'white'
                }}>{this.state.texto}</Text>
            </TouchableOpacity>
        )
    }

}

export default MeuBotao
```

* App.js

```Javascript
import React from 'react'
import {View, Text, Button} from 'react-native'
import MeuBotao from './MeuBotao'

class App extends React.Component {

    render(){
        return(
            <View>
                <Text>Olá mundo!</Text>
                <MeuBotao texto='incrementar'/>
                <MeuBotao texto='decrementar'/>
            </View>
        )
    }
    

}

export default App
```

#### Atividade pratica 

* Fazer um app que tenha dois botões (incrementador e decrementador), ao clicar, eles somam e subtraem respectivamente uma variavel.

#### Desafio

* Fazer uma calculadora de IMC, as informações sobre o calculo e a classificação estão a baixo

[Dados sobre IMC](https://www.programasaudefacil.com.br/calculadora-de-imc)

* segue um exemplo de como deve ficar o app

![]()

## Veja também

Seção anterior: 

[Aula 4 - Componentes](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%204)

[Início](https://github.com/AWLeiseR/ReactNative) 