import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './product.css'
import { useStateValue } from './StateProvider';

function Product({id,  title, price, image, rating }) {
  //  const [{basket}, dispatch] = useStateValue()
  
  const addToBasket = () =>{
      //  dispatch({
      //    type: 'ADD-TO-BASKET',
      //    item: {
      //     id: id,
      //      price: price,
      //      image: image,
      //      title: title,
      //      rating: rating,
      //    }
      //  })
  }
  
  return (
    <div className='product'>
        <div className='product-info'>
            <p>{title} </p>
            <p className='product-price'>
            <CurrencyFormat 
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            </p>
            <div className='product-rating'>
            {Array(rating).fill().map((_, i)=>(
                        <p key={i}>🌟</p>
            ))}

            </div>
        </div>
       
            <img src={image} alt=''/> 
       <button onClick={addToBasket}>Add to cart</button>
      
    </div>
  );
}

export default Product