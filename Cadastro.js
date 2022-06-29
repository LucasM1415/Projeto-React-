
import React, { Component } from 'react';

class Cadastro extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome:props.nome
            
        }
        this.entrar = this.entrar.bind(this)
    }

    entrar(){
       alert('Nome Alterado') 
       this.setState({nome: 'Turma de IPI'})
    }

    render(){
        return(
            <div>

               <h2>Bem-vindo(a) {this.state.nome}</h2>
               <button onClick = {this.entrar}>

                    Entrar como Jean

               </button>
               <button onClick ={() => this.setState({nome: ''})} >

                    Sair

               </button>

            </div>
        );
    }
}

export default Cadastro;
