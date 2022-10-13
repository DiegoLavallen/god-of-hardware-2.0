import './ItemList.css'
import Item from './Item';


export default function ItemList({ products }){

    //Yo tengo en el array de products, un array de objetos.
    //Quiero iterar sobre el array de objetos y transformarlos en un array de elementos JSX

    return (
        <div className='item-list-container'>
            {
                products.map(function(producto){
                    return (
                        <Item key={producto.id} item={producto} />
                    )
                })
            }

        </div>
    )

};