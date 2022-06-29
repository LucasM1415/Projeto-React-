import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Contato extends Component{
  render(){
    return(
      <div>

      <header>
      <Link className="logo" to="/Home">Sistema</Link>
      <Link className="cadastro" to="/Cadastro">Cadastro</Link>
      <Link className="contato" to="/Contato">Contato</Link>
      </header> 
      <div className="Body">
      <h2>Central de ajuda </h2>
      <div className="Cajuda">
        <p>Caso precise de alxilio, entre em contato nas nossas redes sociais:</p>
        <div className="Links">
          <Link className="linkf" to="/">Facebook</Link>
          <Link className="link" to="/">Twiter</Link>
          <Link className="link" to="/">Instagram</Link>
        </div>
      </div>
        <footer>
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
