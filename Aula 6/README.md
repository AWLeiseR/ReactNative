# Sexta Aula Callbacks

* App.js

```Javascript
import React from 'react'
import {View, Text, Button} from 'react-native'
import MeuBotao from './MeuBotao'

class App extends React.Component {

    state = {
        valor: 0
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + 1
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - 1
        })
    }

    render(){
        return(
            <View>
                <Text style={{fontSize: 60}}>{this.state.valor}</Text>
                <MeuBotao texto='incrementar' funcao={this.incrementar}/>
                <MeuBotao texto='decrementar' funcao={this.decrementar}/>
            </View>
        )
    }
    

}
export default App
```

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

## Veja também

Seção anterior: 

[Aula 5 - Props e Callback ](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%205)

[Início](https://github.com/AWLeiseR/ReactNative)