
import './App.css';
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Policy" element={<Policy/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
    </>
  );
}

export default App;
