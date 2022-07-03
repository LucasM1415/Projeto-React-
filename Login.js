
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
class Login extends Component {
 constructor(props) {
   super(props);
   this.finalizarL = this.finalizarL.bind(this);
 }
 
 finalizarL() {
   alert("Login não realizado");
 }
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
         <h2 className="Frases2">Login </h2>
         <div className="pharse-div4">
           <div className="log">
             <div className="Q22">
               Email :<input className="I22" type="text" name="2nome"></input>
             </div>
             <div className="Q22">
               Senha :<input className="I3" type="text" name="2nome"></input>
             </div>
           </div>
 
           <div className="outra">
             <h6 className="ooo">Ainda não uma conta?</h6>
             <Link className="linkE" to="/Cadastro">
               Clique aqui
             </Link>
           </div>
           <button className="enviar2" onClick={this.finalizarL}>
             Enviar
           </button>
         </div>
         <footer className="f2">
           <div className="Rodape">
             <p>Instituto Federal de Pernambuco</p>
             <p>Desenvolvimento Web 2</p>
             <p>Palmares, 29/06/2022</p>
           </div>
         </footer>
       </div>
     </div>
   );
 }
}
 
export default Login;
 

