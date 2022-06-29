

import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
 
 
function RoutesApp(){
   return(
       <BrowserRouter>
       <Routes>
           <Route path ="/" element = {<Home/>} />
           <Route path ="/cadastro" element = {<Cadastro/>} />
           <Route path ="/Contato" element = {<Contato/>} />
       </Routes>
       </BrowserRouter>
   )
 
  
 
 
}
 
export default RoutesApp;
