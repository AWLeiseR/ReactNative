# Décima Aula - Calculadora

Segue o código da aula comentado. 

* src/pages/main/Main.js

```Javascript

import React from 'react'
//importando componentes nativos do react-native
import {View,
        Text} from 'react-native'
// importando componente criado para funcionar como botao
import Button from '../../components/button/Button'
//importando Styles, arquivo com a estilizacao do nosso app
import Styles from './Styles'

//criando a classe principal da nossa calculadora, extendendo Component para herdar todas as propriedades 
class Main extends React.Component {

    // variaveis/estados
    state = {
        // variavel responsavel por armazenar os caracteres q serao exibidos na tela
        displayValue: 0,
        //valores que serao utilizados nas operacoes
        values: [0,0],
        //indicador para o primeiro ou segundo operando (ou primeiro ou segundo valor do vetor)
        value: 0,
        //indicador de operacao
        operator: undefined
    }
    
    //funcao para adicionar um digito
    addDigit = digit => {

        //chama metodo que modifica os estados
        this.setState({
            
            //alteracao da variavel display value
            //utilizando if ou condicional terciaria, (condicao ? verdadeiro : falso)
            displayValue: this.state.displayValue === 0 ? digit : this.state.displayValue + digit 
        
        })
            
        //transfere o vetor "values" do STATE para uma variavel local LET
        let values = this.state.values
        
        /*
        cria uma variavel local utilizando LET
        primeira posicao do vetor: se o value for 0 ele recebe o valor do display, caso contrario recebe o elemento 0 do values
        segunda posicao do vetor: se o value for 1 ele recebe o valor do display, caso contrario recebe o elemento 1 do values
        */ 
        let digitos = [this.state.value === 0 ? this.state.displayValue : values[0], this.state.value === 1 ? this.state.displayValue : values[1]]
        
        //a variavel values do STATE recebe a variavel digitos
        this.setState({values: digitos})
        
        //comando para imprimir algo no terminal a varivael values
        console.log(this.state.values)
    
    }

    //funcao para identificar o operador
    addOperation = operator => {
        
        //verifica se a variavel passada e igual a '='
        if(operator === "=") {
            //casa seja concatena 1º elemento de values mais operador e 2º elemento de values
            let resultado = this.state.values[0] + this.state.operator + this.state.values[1] 
            //imprime o resultado no terminal
            console.log(resultado)
        }
        //a variavel operador do STATE recebe a variavel local operador, value recebe 1 e displayValue recebe "" (de certa forma e zerado)
        this.setState({operator, value: 1, displayValue: ""})
        //imprime o conteudo de operador no terminal
        console.log(operator)
    }

    // metodo que contem tudo o que vai ser renderizado pelo react-native
    render(){
        return(
            //o metodo return so pode retornar uma unica tag/componente entao podemos utilizar uma tag/componente vazia para englobar todo nosso layout
            <>

                {/*tag/componente que engloba o display*/}
                <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 25}}>
                
                    {/*texto do display*/}
                    <Text style={{color: '#fff', fontSize: 90}}>{this.state.displayValue}</Text>
                
                </View>
                
                {/* tag/componente que engloba os botoes da calculadora*/}
                <View style={{backgroundColor: '#000', flex: 2.1}}>
                    {/*tag/componente que engloba os botoes da primeira linha (simbolos)*/}
                    <View style={{ flexDirection: 'row'}}>
                        {/*componente para botao AC*/}
                        <Button color='#969696' label='AC' labelColor='black'/>
                        {/*componente para botao +/-*/}
                        <Button color='#969696' label='+/-' labelColor='black'/>
                        {/*componente para botao %*/}
                        <Button color='#969696' label='%' labelColor='black'/>
                        {/*componente para botao ÷ */}
                        <Button color='orange' label='÷' funcao = {digit => this. addOperation(digit)}/>
                    
                    </View>

                    {/*tag/componente que engloba os botoes da segunda linha (numeros) e '×' */}
                    <View style={{ flexDirection: 'row'}}>
                        {/*componente para botao 7*/}
                        <Button color='#494a49' label='7' funcao = {digit => this.addDigit(digit)} />
                        {/*componente para botao 8*/}
                        <Button color='#494a49' label='8' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao 9*/}
                        <Button color='#494a49' label='9' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao ×*/}
                        <Button color='orange' label='×' funcao = {digit => this. addOperation(digit)}/>
                    
                    </View>
                    
                    {/*tag/componente que engloba os botoes da segunda linha (numeros) e '-' */}
                    <View style={{ flexDirection: 'row'}}>
                        {/*componente para botao 4*/}
                        <Button color='#494a49' label='4' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao 5*/}
                        <Button color='#494a49' label='5' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao 6*/}
                        <Button color='#494a49' label='6' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao -*/}
                        <Button color='orange' label='-' funcao = {digit => this. addOperation(digit)}/>
                    
                    </View>
                    
                    {/*tag/componente que engloba os botoes da segunda linha (numeros) e '+' */}
                    <View style={{ flexDirection: 'row'}}>
                        {/*componente para botao 1*/}
                        <Button color='#494a49' label='1' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao 2*/}
                        <Button color='#494a49' label='2' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao 3*/}
                        <Button color='#494a49' label='3' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao +*/}
                        <Button color='orange' label='+' funcao = {digit => this. addOperation(digit)}/>
                    
                    </View>

                    {/*tag/componente que engloba os botoes da segunda linha 0 , ',' e '=' */}
                    <View style={{ flexDirection: 'row'}}>
                        {/*componente para botao 0*/}
                        <Button color='#494a49' tamanho={2}x label='0' funcao = {digit => this.addDigit(digit)}/>                
                        {/*componente para botao ,*/}
                        <Button color='#494a49' label=',' funcao = {digit => this.addDigit(digit)}/>
                        {/*componente para botao =*/}
                        <Button color='orange' label='=' funcao = {digit => this. addOperation(digit)}/>
                    {/*Fechamentos das tag/componentes do return e do render*/}
                    </View>
                
                </View>
            
            </>
        )
    }

}

export default Main

```

* src/components/button/Button.js

```Javascript


import React from 'react'
//importando componentes nativos do react-native
import { TouchableOpacity, View, Text, Dimensions } from 'react-native'
//importando Styles, arquivo com a estilizacao do nosso app
import Styles from './Styles'

//criando a classe do componente p/ os botoes da nossa calculadora, extendendo Component para herdar todas as propriedades
class Button extends React.Component {
    // metodo que contem tudo o que vai ser renderizado pelo react-native
    render(){
        
        //cria um vetor constante que recebe 'Styles.Button', objeto vindo do arquivo './Styles'
        const stylesButton = [Styles.Button]
        
        // verifica se a propriedade tamanho e igual a 2
        if(this.props.tamanho === 2){
            //adiciona mais elementos ao vetor de objetos
            //essas instrucoes vao sobrescrever instrucoes iguais anteriores
            stylesButton.push({ 
                //lagura com base na tela
                width: (Dimensions.get('window').width / 5) * 2.25,
                //alinhamento os itens
                alignItems: 'flex-start',
                //espacamento interno do lado esquerdo
                paddingLeft: Dimensions.get('window').width/19})
      
        }
        //adiciona a cor recebida como propiedade ao vetor
        stylesButton.push({ backgroundColor: this.props.color })
      
        return(
            //componente para botao que ao clicado muda a sua tonalidade indicando o toque
            <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.funcao(this.props.label)}>
                {/*area de visualizacao que recebe o vetor de style*/}
                <View style={stylesButton}>
                    {/*componente para o texto*/}
                    <Text style={[Styles.Text, { color: this.props.labelColor ? this.props.labelColor : '#fff'}]}>{ this.props.label }</Text>
                    {/*fechamento dos componetes e metodos*/}
                </View>

            </TouchableOpacity>
        )
    }
}

/* exporta o componente de forma padrao (default)*/
export default Button 

```

* src/pages/main/Styles.js

* src/pages/button/Styles.js

Os arquivos acima continuam idênticos. [Clique aqui](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%208) para ver os códigos.

#### Tarefa: implemetar todas as operações da calculadora ####

## Veja também

Seção anterior: 

[Aula 9 - Calculadora (continuação) ](https://github.com/AWLeiseR/ReactNative/tree/master/Aula%209)

[Início](https://github.com/AWLeiseR/ReactNative)