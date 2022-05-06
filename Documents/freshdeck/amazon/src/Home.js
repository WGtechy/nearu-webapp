import React from 'react'
import './Home.css'
import Layout from './Layout'
import Product from './Product'

function Home() {
  return (
    <Layout>
    <div className='home'>
        <div className='home-container'>
        {/* <img className='home-image'
            src=' https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg'
            alt=''
        /> */}
        
        <div className='home-row'>
          <Product
          id='234'
          title="Apple iPhone 12, 64GB, Blue - Unlocked (Renewed Premium)"
          price={500.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/7117DN7UkKL._AC_SY741_.jpg" />
          <Product
          id='23432'
           title="Soundance Laptop Stand, Aluminum Computer Riser, Ergonomic Laptops Elevator for Desk,"
          price={28.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_SX425_.jpg" />
          <Product 
          id='23431'
            title='Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port'
            price={30.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81p91cnIFEL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
          id='2367'
           title='Mac Book Pro Charger-100W USB C Charger Power Adapter Compatible with MacBook Pro 16, 15, 14, 13 Inch'
            price={39.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41MQhnG2u5L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
             />
        </div>
        <div className='home-row'>
        <Product
        id='23406'
         title='Google Nest Protect - Smoke Alarm - Smoke Detector and Carbon Monoxide Detector - Battery Operated , White - S3000BWES'
            price={119.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/714dK+uZTUL._AC_SX425_.jpg" />
        <Product 
        id='2094'
           title='Ninja BL660 Professional Compact Smoothie & Food Processing Blender, 1100-Watts, 3 Functions for Frozen Drinks, Smoothies'
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81wMNCy6zhL._AC_SX425_.jpg"
        />
        <Product 
        id='234864'
           title='CUSIMAX Bread Machine, 2LB Loaf Capacity for Family, 15-in-1 Bread Maker for Gluten Free Bread'
            price={113.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/61HzHeoNzGL._AC_SX679_.jpg"
        />
        </div>
        <div className='home-row'>
        <Product
        id='234748'
         title="Hanes Men's Pullover EcoSmart Hooded Sweatshirt"
          price={38.27}
          image='https://m.media-amazon.com/images/I/61n+vIfzOKL._AC_UX522_.jpg'
          rating={5}
     />
        <Product
        id='2367'
        title='2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Gray'
          price={2400.54}
          image='https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SX466_.jpg'
          rating={5}
           />
        </div>
        <div className='home-row'>
        <Product 
        id='23498'
          title='Regalo 192-Inch Super Wide Adjustable Baby Gate and Play Yard, 4-In-1, Bonus Kit, Includes 4 Pack of Wall Mounts'
          price={161.49}
        rating={5}
        image="https://m.media-amazon.com/images/I/71sCcP2ZIAL._SX425_.jpg"
        />
        </div>
        </div>
    </div>
    </Layout>
  )
}

export default Home