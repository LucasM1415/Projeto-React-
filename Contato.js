import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contato.css";
class Contato extends Component {
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
         <p className="kk">Central de ajuda </p>
         <div className="pharse-div2">
           <p>
             Caso precise de alxilio, entre em contato nas nossas redes
             sociais:
           </p>
           <div className="redes">
             <Link className="link1" to="/">
               Facebook
             </Link>
             <Link className="link2" to="/">
               Twiter
             </Link>
             <Link className="link3" to="/">
               Instagram
             </Link>
           </div>
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
 
export default Contato;
 

