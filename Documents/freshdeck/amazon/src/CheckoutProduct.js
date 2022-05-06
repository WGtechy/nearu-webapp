import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price, rating}) {
  const [{basket}, dispatch] = useStateValue()
  console.log(basket)
  const removeFromBasket = () => {
      dispatch({
          type: 'REMOVE-FROM-BASKET',
          id: id,
      })
  }

    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-img' src={image} 
            alt=''
        />
        <div className='checkoutProduct-info'>
           <p className='checkoutProduct-title'>{title}</p>
           <p className='checkoutProduct-price'>
           <CurrencyFormat 
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
           </p>
           <div className='checkoutProduct-rating'>
                {Array(rating).fill()
                .map((_, i) => (
                  <p key={i}>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket} >Remove From cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct