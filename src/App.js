import "./App.css"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import Navbar from './componets/NavBar/Navbar';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Footer from './componets/Footer/footer';
import { CartProvider } from "./componets/cartContext/cartContex";



function App() {
  return (
    <div className="App">
    <CartProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer greeting={"Listado de productos"}/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:productId' element={<ItemDetailContainer/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
