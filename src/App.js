import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './componets/Home/Home';
import Footer from './componets/Footer/footer';
import { CartProvider } from './componets/CartContext/CartContex';
import Nosotros from './componets/Nosotros/Nosotros';


function App() {
  return (
  
    <CartProvider>
     <BrowserRouter>
     <Home/>
     <Routes> 
    <Route path='/Nosotros'  element={<Nosotros/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     </CartProvider>
    
  );
}

export default App;
