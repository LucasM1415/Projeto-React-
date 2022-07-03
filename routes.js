
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
 
function RoutesApp() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/Cadastro" element={<Cadastro />} />
       <Route path="/Contato" element={<Contato />} />
       <Route path="/Login" element={<Login />} />
     </Routes>
   </BrowserRouter>
 );
}
 
export default RoutesApp;
 

