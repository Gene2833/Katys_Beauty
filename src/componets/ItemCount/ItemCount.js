import { useState } from 'react'

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
       <div className=' justify-content-center flex-direction: column d-flex'>          
            <div className='d-flex justify-content-center'>
                <button className="btn btn-lg btn-info p-2 m-2" onClick={decrement}>-</button>
                <h4 className='p-2 m-1 h4 '>{count}</h4>
                <button className="btn btn-lg btn-info p-2 m-2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-lg btn-info p-2 m-2" onClick={() => onAdd (count)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount