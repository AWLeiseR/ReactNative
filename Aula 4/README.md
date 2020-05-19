# Quarta Aula - Components e Estado (state)

[Material extra (State)](https://facebook.github.io/react-native/docs/state)

[PDF da aula](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%204/Componentes%20e%20Estados.pdf)

### Segue abaixo os códigos feitos em aula

* MeuBotao.js

```javascript
import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

class MeuBotao extends React.Component {

    state = {
        texto : 'Me pressione'
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

```javascript
import React from 'react'
import {View, Text, Button} from 'react-native'
import MeuBotao from './MeuBotao'

const App = () => {

  return(
    <View>
      <Text>Olá mundo!</Text>
      <MeuBotao/>
      <MeuBotao/>
      <MeuBotao/>
      <MeuBotao/>
      <MeuBotao/>
    </View>
  )

}

export default App
```

#### Algumas observações

* Componetes: a primeira letra sempre maiúscula. Por exemplo: `MeuBotao`, `Text`, `TouchableOpacity`.

* Importação de componentes: ` import NomeDoComponente from './NomeDoArquivo' `.

* **export default** deve conter o nome da classe e não do arquivo. Por exemplo:
`export default NomeDaClasse`.

#### Desafios

* Desafio 1

    Fazer um Componente que seja um botão que conte a quantidade de clicks que foram dados. Semelhante ao exemplo abaixo.

    ![](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%204/desafio1.gif)

* Desafio 2

    Fazer Componente que seja um botão que tenha como frase `Esse botão foi pressionado: X vezes`, sendo que X é o numero de vezes. Semelhante ao exemplo abaixo.

    ![](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%204/desafio2.gif)

## Veja também

[Início](https://github.com/AWLeiseR/ReactNative) 

Aula anterior: 

[Aula 3 - Componentes](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%203)

Próxima Aula:

[Aula 5 - Pros e Callback ](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%205)