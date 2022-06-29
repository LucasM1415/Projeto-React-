import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component{
  render(){
    return(
      <div>
    
      <header>
          
      <Link className="logo" to="/">Sistema</Link>
      <Link className="cadastro" to="/Cadastro">Cadastro</Link>
      <Link className="contato" to="/Contato">Contato</Link>
       </header>
        
      </div>

    );
  }
}


export default Home;
