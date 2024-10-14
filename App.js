import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbaar from './components/navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from './components/Product'; 


function App() {

  

  return (
    <Router>
      <Navbaar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
