import "./App.css"
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import Navbar from './componets/NavBar/Navbar';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Footer from './componets/Footer/footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:productId' element={<ItemDetailContainer/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
