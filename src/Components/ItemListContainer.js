import React from "react";
import './ItemListContainer.css';
import { useEffect } from "react";
import { getProducts} from '../api/api';
import { useState } from 'react';
import ItemList from './ItemList'
import { useParams} from 'react-router-dom'


// 1. La funcion de este componente es obtener la lista de productos
// 2. Guardala en un estado propio { useState }
// 3. Y pasarsela a otro componente hijo.

function ItemListContainer (){

    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();
    console.log(categoryName);

    //Un hook que nos permite ejecutar codigo cuando se monta el componente
    useEffect(() => {
        getProducts().then((products) =>{
            if (!categoryName){
                setProducts(products);
            }else{
                const itemsPorCategoria = products.filter((producto) => {
                    return producto.category === categoryName;
                })
                setProducts(itemsPorCategoria);
            }
            
        }).catch((error) => {
            console.log(error);
        });

        //Ir al backend y obtener los productos
    }, [categoryName]);

    function onAddItem(itemCount){
        console.log(itemCount);
    }

    return (
        <div>
        { products.length > 0 ? <ItemList products={products} /> : <p>Cargando...</p>}
        </div>
    )
};

export default ItemListContainer;