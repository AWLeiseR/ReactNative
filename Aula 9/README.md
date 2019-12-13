# Nona Aula - Calculadora (Continuação)

Nesta aula seguimos com o desenvolvimento da Calculadora. Abaixo está o código atualizado.

* src/pages/main/Main.js

```Javascript
import React from 'react'
import {View,
        Text} from 'react-native'
import Button from '../../components/button/Button'

import Styles from './Styles'

class Main extends React.Component {

    state = {
        displayValue: 0
    }
    
    addDigit = digit => {
        this.setState({displayValue: digit})
    }


    render(){
        return(
            <>
                <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 25}}>
                    <Text style={{color: '#fff', fontSize: 90}}>{this.state.displayValue}</Text>
                </View>
                <View style={{backgroundColor: '#000', flex: 2.1}}>
                    <View style={{ flexDirection: 'row'}}>
                        <Button color='#969696' label='AC' labelColor='black'/>
                        <Button color='#969696' label='+/-' labelColor='black'/>
                        <Button color='#969696' label='%' labelColor='black'/>
                        <Button color='orange' label='÷'/>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <Button color='#494a49' label='7' funcao = {digit => this.setState({displayValue: digit})} />
                        <Button color='#494a49' label='8'/>
                        <Button color='#494a49' label='9'/>
                        <Button color='orange' label='×'/>
                    </View><View style={{ flexDirection: 'row'}}>
                        <Button color='#494a49' label='4'/>
                        <Button color='#494a49' label='5'/>
                        <Button color='#494a49' label='6'/>
                        <Button color='orange' label='-'/>
                    </View><View style={{ flexDirection: 'row'}}>
                        <Button color='#494a49' label='1'/>
                        <Button color='#494a49' label='2'/>
                        <Button color='#494a49' label='3'/>
                        <Button color='orange' label='+'/>
                    </View><View style={{ flexDirection: 'row'}}>
                        <Button color='#494a49' tamanho={2}x label='0'/>                
                        <Button color='#494a49' label=','/>
                        <Button color='orange' label='='/>
                    </View>
                </View>
            </>
        )
    }

}

export default Main

```


* src/pages/main/Styles.js

* src/components/button/Button.js

* src/pages/button/Styles.js

Os arquivos acima continuam idênticos à aula anterior. [Clique aqui](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%208) para ver os códigos da última aula.

## Veja também

Seção anterior: 

[Aula 8 - Calculadora ](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%208)

[Início](https://github.com/AWLeiseR/ReactNative)