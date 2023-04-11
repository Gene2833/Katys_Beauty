import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './componets/Home/Home';
import Footer from './componets/Footer/footer';
import { CartProvider } from './componets/CartContext/CartContex';
import Nosotros from './componets/Nosotros/Nosotros';
import NavBar from './componets/NavBar/Navbar';
import Contacto from "./componets/Contacto/Contacto"
import Cart from "./componets/Cart/Cart"
import Checkout from './componets/Checkout/Checkout';
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer"


function App() {

  return (
  
    <CartProvider>
     <BrowserRouter>
    <NavBar/>
     <Routes>
     <Route path='/'  element={<Home/>}/> 
     <Route path='/ItemListContainer' element={<ItemListContainer greeting={"Listado de productos"}/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:productId' element={<ItemDetailContainer/>} />
    <Route path='/Nosotros'  element={<Nosotros/>}/>
    <Route path='/Contacto'  element={<Contacto/>}/>
    <Route path='/cart' element={<Cart/>} />
    <Route path='/checkout' element={<Checkout/>} /> 
     </Routes>
     <Footer/>
     </BrowserRouter>
     </CartProvider>
    
  );
}

export default App;
