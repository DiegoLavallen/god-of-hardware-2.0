import './ItemDetailContainer.css'
import { useEffect, useState} from 'react'
import { getProducts } from '../api/api'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'



export default function ItemDetailContainer(){

    const {productId} = useParams();
    const { categoryName } = useParams();
    console.log(categoryName);
    //El useParams es un hook de react-router-dom que nos provee para obtener los
    //parametros de la URL
    //El nombre 'productId' es arbitrario y lo tengo que definir en el app.js

    const [Item, setItem] = useState()

    useEffect(() => {
        getProducts().then((products) =>{
            const item = products.find((i) =>  i.id === Number(productId));
            setItem(item);
        }).catch((error) => {
            console.log(error);
        });
    }, [productId]);

    return (
        <div className='item-detail-container'>
            {!Item ? <p>Cargando producto...</p> : <ItemDetail item={Item} />}

        </div>
    )
}