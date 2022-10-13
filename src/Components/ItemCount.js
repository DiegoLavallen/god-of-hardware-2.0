import React, { useState }  from "react";
import './ItemCount.css';


function ItemCount ({stock, initial, onAdd}){
    const [itemCounter, setItemCounter] = useState(initial)


     function sumarUno(){
         if(itemCounter < stock){
             setItemCounter(itemCounter + 1)
         }
     }


     function restarUno(){
       if(itemCounter < 1){
           setItemCounter(itemCounter)
       }else{
           setItemCounter(itemCounter - 1)

       }

     };

    function addToCart(){
        onAdd(itemCounter)
    }


    return(
        <div>




            <button onClick={sumarUno}> + </button>

            <p>
                {itemCounter}
            </p>

            <button onClick={restarUno}>-</button> 
            <button className="add-to-cart-button" onClick={addToCart}>agregar al carrito</button>
        </div>  

    )
};

export default ItemCount;