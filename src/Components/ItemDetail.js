import './ItemDetail.css';
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function ItemDetail({ item }){
    const [itemCounter, setItemCounter] = useState()

    function onAddItem(newItemCount) {
        console.log(newItemCount);
        setItemCounter(newItemCount)
    }

    return(
        <div className='item-detail'>
            <img src={item.pictureUrl} alt='Imagen del producto' />
            <div className='right-column'>
                <div className='details'>
                    <h1>{item.tittle}</h1>
                    <p className='price'>USD {item.price}</p>
                    <p className='description'>{item.description}</p>
                </div>

                {
                    !itemCounter ?
                    <ItemCount stock={10} initial={0} onAdd={onAddItem}/> : 
                    <Link to="/cart">Ir al carrito</Link>
                }

            </div>
        </div>
    );
} 