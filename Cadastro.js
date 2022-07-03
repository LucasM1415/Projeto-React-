import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";
 
class Cadastro extends Component {
 constructor(props) {
   super(props);
   this.state = { nome: props.nome };
   this.finalizar = this.finalizar.bind(this);
 }
 
 finalizar() {
   alert("Cadastro Realizado com sucesso");
 }
 alterarNome = (event) => {
   this.setState({ nome: event.target.value });
 };
 render() {
   return (
     <div>
       <header>
         <Link className="logo" to="/Home">
           O poder das palavras
         </Link>
         <Link className="cadastro" to="/Login">
           Login
         </Link>
         <Link className="contato" to="/Contato">
           Contato
         </Link>
       </header>
       <div className="Body">
         <h2 className="Titulo">Cadastro </h2>
         <div className="pharse-div3">
           <p className="txt">
             Para que possemos te conhecer melhor, é necessario que voçê faça
             um pequeno cadastro em nosso site:
           </p>
           <div className="C">
             <div className="Q1">
               Primeiro Nome:{" "}
               <input
                 className="I1"
                 type="text"
                 name="1nome"
                 value={this.state.nome}
                 onChange={this.alterarNome}
               ></input>
             </div>
 
             <div className="Q2">
               Segundo Nome :
               <input className="I2" type="text" name="2nome"></input>
             </div>
             <div className="Q2">
               Email :<input className="I3" type="text" name="2nome"></input>
             </div>
             <div className="Q2">
               CPF :<input className="I4" type="text" name="2nome"></input>
             </div>
             <div className="Q2">
               Telefone :
               <input className="I5" type="text" name="2nome"></input>
             </div>
           </div>
         </div>
       </div>
 
       <h2 className="NomeA">Olá {this.state.nome}!</h2>
       <h1 className="Ftxt">
         Para que possamos entregar mais conteúdo com a sua cara, gostariamos
         que preenchesse esse formulario:
       </h1>
       <div className="Forms">
         <div className="task1">
           <h1>Qual é a sua idade?</h1>
           <select className="task1">
             <option>De 5 a 10 anos</option>
             <option>De 11 a 17 anos</option>
             <option>De 18 a 24 anos</option>
             <option>Maior do que 25</option>
           </select>
         </div>
         <div className="task2">
           <h1>Quais são seus tópicos preferidos?</h1>
           <div className="P1">
             <div className="OP1">
               <input type="checkbox"></input>
               <label className="sub1">Romance</label>
             </div>
             <div className="OP1">
               <input type="checkbox"></input>
               <label className="sub1">Comedia</label>
             </div>
             <div className="OP1">
               <input type="checkbox"></input>
               <label className="sub1">Motivasional</label>
             </div>
             <div className="OP1">
               <input type="checkbox"></input>
               <label className="sub1">Trabalho</label>
             </div>
           </div>
         </div>
         <div className="task1">
           <h1>Como voçê se sente na maioria do tempo?</h1>
           <select className="idades">
             <option>Normal</option>
             <option>Feliz</option>
             <option>Tenso</option>
             <option>Ancioso</option>
           </select>
         </div>
       </div>
 
       <button className="enviar" onClick={this.finalizar}>
         Enviar
       </button>
       <footer>
         <div className="Rodape">
           <p>Instituto Federal de Pernambuco</p>
           <p>Desenvolvimento Web 2</p>
           <p>Palmares, 29/06/2022</p>
         </div>
       </footer>
     </div>
   );
 }
}
 
export default Cadastro;
 

