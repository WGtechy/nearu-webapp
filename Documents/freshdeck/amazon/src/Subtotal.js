import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { total } from './reducer';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    console.log(dispatch)
  return (
    <div className='subtotal'>
<CurrencyFormat 
    renderText={(value) => (
        <>
            <p>
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
                <input type='checkbox'/>this is ur gift
            </small>
        </>
    )}
    decimalScale={2}
    value={total(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={'$'}
/>
     <button>proceed to checkout</button>
    </div>
  )
}

export default Subtotal