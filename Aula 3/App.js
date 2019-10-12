/******************************************************/
/*               Curso de React Native                */
/* Código da Prática 1 da aula de Components e State  */
/*                                                    */
/* Caso tenha alguma dúvida veja o PDF da aula no GIT */
/*                                                    */
/******************************************************/

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