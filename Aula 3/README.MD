# Terceira aula - Componentes

### Components

[Pdf da aula](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%203/Componentes%20-%20Parte%201.pdf)

* Código de exemplo está no link abaixo ou no quadro.

[Código da Prática 1](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%203/App.js)

```Javascript
import React from 'react'
import {View, Text, Button} from 'react-native'

const App = () => {

    return(
        <View>
            <Text>Olá Mundo!</Text>
            <Button title='Enviar Mensagem'
                    onPress={()=>null}/>
        </View>
    )

}

export default App
```

##### Material extra

[Documentação de alguns Components nativos](https://facebook.github.io/react-native/docs/components-and-apis.html)

### Algumas extensões para o Visual Studio Code

* Color Highlight

* GitLens (posibilita melhor interação com o github)

## Veja também

[Início](https://github.com/AWLeiseR/ReactNative) 

Aulas Anteriores:

[Aula 2 - Conseitos de JavaScript ](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%202)

[Pré aula - primeiro projeto](https://github.com/AWLeiseR/ReactNative/tree/master/Pr%C3%A9%20aula%202)

Próxima Aula:

[Aula 4 - Compoentes e Estados (state)](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%204)