import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ContactUS from './pages/ContactUS';
import NavBar from './compnents/Navbar';
import { useAppContext } from './features/AppProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from './compnents/Sidebar';
import Register from './pages/Register';
import Login from './pages/Login';
import Btnn from './compnents/Btnn';
import CreateProduct from './crud/CreateProduct';
import GetProduct from './crud/GetProduct';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [islogedin, setIslogedin] = useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  }
  const handleLoginSuccess = () => {
    setIslogedin(true);
  }
 
const details={
  name:'Damayanti',
  surname:'Ponkshe',
  pass:'hfhkdhj',
  link:''
}
  return (
    // <>
    //   {islogedin ? (
    //     <BrowserRouter>
    //       <NavBar />
    //       <div className="app-layout">
    //         <main className="main-content">
    //           <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/home" element={<Home />} />
    //             <Route path="/product" element={<Product />} />
    //             <Route path="/contactUs" element={<ContactUS />} />
    //           </Routes>
    //         </main>
    //       </div>
    //     </BrowserRouter>
    //   ) : isRegistered ?
    //     (<Login onLogin={handleLoginSuccess} />)
    //     : (<Register onRegistration={handleRegistrationSuccess} />)
    //   }
    // </>
    <>
    {/* <BrowserRouter>
    
    <Btnn data=
    {details}/>
     </BrowserRouter> */}
    <GetProduct/>
  </>
  );
}

export default App;
