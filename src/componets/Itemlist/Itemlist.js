import Item from "../Item/Item"

const Itemlist = ({products}) =>{
        return(
            <div className="    flex-direction: row flex-wrap justify-content-between">
                {products.map(prod => <Item key={prod.id} {...prod} />)}
           
            </div>
        )
}

export default Itemlist