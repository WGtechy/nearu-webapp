import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';


function Header() {
   // const [{basket}, dispatch] = useStateValue()
  
  return (
    <div className='header'>
      <Link to="/">
        <img 
        className='header-logo'
        src='https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png'
        alt="" />
        </Link>
        <div className='header-search'>
            <input 
               className='header-seaching' type="text"
            />
            <SearchIcon className='header-searchIcon'/>
        </div>
        <div className='header-nav'>
            <div className='header-option'>
               <span
               className='header-optionOne'>
                   Hello guys
               </span>
               <Link to='/LoginPage'>
               <span
               className='header-optionTwo'>
                  Sign in
               </span>
               </Link>
            </div>
            <div className='header-option'>
            <span
               className='header-optionOne'>
                 Return
               </span>
               <span
               className='header-optionTwo'>&
                Order
               </span>
            </div>
            <div className='header-option'>
            <span
               className='header-optionOne'>
                  Your
               </span>
                <span
               className='header-optionTwo'>
                  Price
               </span>
            </div>
            <Link to='/checkout'>
            <div className='header-optionBasket'>
                <ShoppingBasket />
                <span className='header-optionTwo header-basketCount'
                >
                {/* {basket.length} */}
                </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header