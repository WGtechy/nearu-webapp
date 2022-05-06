import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Layout from './Layout'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  console.log(dispatch)
  return (
    <Layout>
    <div className='checkout'>
       <div className='checkout-left'>
       <img className='checkout-ad'
           src='https://ng.jumia.is/cms/0-1-cpr/2022/1-Jan/0-free-delivery/lagos-ibadan-abuja/a-2-TopStrip_free-delivery_.gif'
           alt=''
       />
       <div>
       <h2 className='checkout-title'>
         Shopping Basket
         </h2>
            {basket.map((item, index) =>
            <CheckoutProduct 
               id={item.id}
               key={index}
               title={item.title}
               image={item.image}
              price={item.price}
              rating={item.rating}
            />
            
            )}

       </div>
       </div>
       <div className='checkout-right'>
            <Subtotal />
       </div>
    </div>
    </Layout>
  )
}

export default Checkout