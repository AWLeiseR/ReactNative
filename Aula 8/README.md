# Oitava Aula - Calculadora

Nesta aula começamos um novo projeto, no fim dele teremos uma calculadora funcional seguindo o modelo do IPhone

![](https://github.com/AWLeiseR/ReactNative/blob/master/Aula%208/calculadora.jpeg)

* index.js

```Javascript
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/pages/main/Main';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

```

* src/pages/main/Main.js

```Javascript

import React from 'react'
import {View,
        Text} from 'react-native'
import Button from '../../components/Button/Button'

import Styles from './Styles'

class Main extends React.Component {

    render(){
        return(
            <View style={{backgroundColor: '#000', flex: 1}}>
                <Button color='gray' label='Ac' labelColor='black'/>
                <Button color='orange' label='-'/>
            </View>
        )
    }

}

export default Main

```

* src/pages/main/Styles.js

```Javascript

import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({

})

export default Styles

```


* src/components/button/Button.js

```Javascript

    import React from 'react'
    import { TouchableOpacity, View, Text, Dimensions } from 'react-native'
    import Styles from './Styles'

    class Button extends React.Component {
        render(){
            const stylesButton = [Styles.Button]
            if(this.props.tamanho === 2){
                stylesButton.push({ 
                    width: (Dimensions.get('window').width / 5) * 2,
                    alignItems: 'flex-start',
                    paddingLeft: Dimensions.get('window').width/19})
            }
            stylesButton.push({ backgroundColor: this.props.color })
            return(
                <TouchableOpacity activeOpacity={0.8} >
                    <View style={stylesButton}>
                        <Text style={[Styles.Text, { color: this.props.labelColor ? this.props.labelColor : '#fff'}]}>{ this.props.label }</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    export default Button 

```
* src/pages/button/Styles.js

```Javascript
import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({

    Button:{
        height: Dimensions.get('window').width/5,
        width: Dimensions.get('window').width/5,
        margin: Dimensions.get('window').height/70,
        borderRadius: Dimensions.get('window').width/2.5,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text:{
        fontSize: Dimensions.get('screen').fontScale * 30,
        textAlign: 'center'
    }


})

export default Styles
```

## Veja também

Seção anterior: 

[Aula 7 - Estilos ](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%207)

[Início](https://github.com/AWLeiseR/ReactNative)