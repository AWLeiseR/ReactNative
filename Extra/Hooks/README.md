# Hooks sem app sem classes

* Com o Hooks deixamos de lado todo o aparato de classes e usamos apenas funções.

```Javascript
import React from 'react'
import {View, Text} from 'react-native'

function App()=>{
    return(
        <View>
            <Text>Oi, eu sou um app sem class</Text>
        </View>
    )
}
export dafault App
```

* E não para por ai, os states ficaram muito mais simples!

```Javascript
import React,{useState} from 'react'
import {View, Text, Button} from 'react-native'

function App()=>{
    const [contador,setContador]=useState(0)
    return(
        <View>
            <Text>O botão foi clicado {contador} vezes!</Text>
            <Button title="Clique"
                 onPress={() => setContador(contador++)}/>
        </View>
    )
}
export dafault App
```

* Agora vamos as explicações:
    * As variáveis recebem um vetor formado primeiro pelo nome da variável, seguido pelo nome da função para alterar o valor dela.
    
    * E o `useState` é uma função do hooks para setar o valor inicial.
    
    `const [nomeVariavel,funcaoAlterar]=useState('valorInicial')`