 
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import ProducDetails from './Components/ProducDetails';
import ProductControl from './Components/ProductControl';
import ProdcutAdd from './Components/ProdcutAdd';
import Update from './Components/Update';
 

function App() {
  

  AOS.init();
  return (
    <div  >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<ProducDetails></ProducDetails>}></Route>
        <Route path='/control' element={<ProductControl></ProductControl>}></Route>
        <Route path='/add' element={<ProdcutAdd></ProdcutAdd>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
    

      </Routes>
       
    </div>
  );
}
export default App;
