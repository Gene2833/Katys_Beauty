import { useState } from 'react'
import "./ItemCount.css"
const ItemCount = ({ initial = 1, stock, onAdd})=> {

   const [count, setCount ]= useState(initial)

   const decrement = () => {
       if(count > 1) {
           setCount(prev => prev - 1)
       }
   }

   const increment = () => {
    if(count < stock){
        setCount(prev => prev + 1)
    }
       }     
   

   return(
       <div className='contador'>          
            <div className='button'>
                <button className="contador__boton" onClick={decrement}>-</button>
                <h4 className='contador__numero'>{count}</h4>
                <button className="contador__boton" onClick={increment}>+</button>
            </div>
                <div className='botones'>
                <button className="contador__boton--agregar" onClick={() => onAdd (count)}>Agregar al carrito</button>
                </div>
       </div>
   )

}
export default ItemCount