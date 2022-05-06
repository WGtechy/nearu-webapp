import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "../../../comp-files/app-style/_sideMenuContent.scss"
import Categories from '../../../comp-files/Categories';

const SideMenuContent = (props) => {
   

    const selector = useSelector(state => {
        return {
           toggle: state.sideMenuContent.display,
           topMenuData: state.topMenuData.data
        }
    });

    return (
        
        <div className={selector.toggle ? "sidemenu__content open__sidemenu" : "sidemenu__content"}>
            <div className="menu__header">
            <Categories  />
            </div>
        </div>
        
    )
}

export default SideMenuContent;

