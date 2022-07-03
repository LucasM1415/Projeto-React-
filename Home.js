import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
 
class Home extends Component {
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
         <h2 className="Frases">Frases de Reflexão</h2>
         <div class="box">
           <div class="pharse-div">
             <p>
               "Acredite em si próprio e chegará um dia em que os outros não
               terão outra escolha senão acreditar com você."
             </p>
           </div>
           <div class="pharse-div">
             <p>"Deixe pra trás o que não te leva pra frente."</p>
           </div>
           <div class="pharse-div">
             <p>
               "Não são as nossas ideias que nos fazem otimistas ou
               pessimistas, mas o otimismo e o pessimismo de origem fisiológica
               que fazem as nossas ideias."
             </p>
           </div>
           <div class="pharse-div">
             <p>
               "O remorso é a única dor da alma, que nem a reflexão nem o tempo
               atenuam."
             </p>
           </div>
           <div class="pharse-div">
             <p>
               "Há três métodos para ganhar sabedoria: primeiro, por reflexão,
               que é o mais nobre; segundo, por imitação, que é o mais fácil; e
               terceiro, por experiência, que é o mais amargo."
             </p>
           </div>
           <div class="pharse-div">
             <p>
               "A justiça não consiste em ser neutro entre o certo e o errado,
               mas em descobrir o certo e sustentá-lo, onde quer que ele se
               encontre, contra o errado."
             </p>
           </div>
           <div class="pharse-div">
             <p>
               "Só existem dois dias no ano que nada pode ser feito. Um se
               chama ontem e o outro se chama amanhã, portanto hoje é o dia
               certo para amar, acreditar, fazer e principalmente viver."
             </p>
           </div>
           <div class="pharse-div">
             <p>
               "A pessoa inteligente estuda a vida inteira para descobrir que
               não tem nada melhor do que dar uma de burro"
             </p>
           </div>
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
   );
 }
}
 
export default Home;
 

