import './Item.css';
import { Link, link } from 'react-router-dom'

export default function Item({ item }){
    return (
    <div className='itemContainer'>
        <Link to={`/producto/${item.id}`}>
                <img className='itemImg' src={item.pictureUrl} alt="imagen del producto"/>
             <div className='detailContainer'>
                <p className='itemPrice'>{item.price}</p>
                <p className='itemTitle'>{item.tittle}</p>
                <p className='itemDescription'>{item.description}</p>
            </div>
        </Link>
          
    </div>
    );
};