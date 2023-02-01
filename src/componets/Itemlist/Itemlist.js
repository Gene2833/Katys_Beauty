import Item from "../Item/Item"
import "./Itemlist.css"

const Itemlist = ({products}) =>{
        return(
            <div className="List-productos">
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        )
}

export default Itemlist