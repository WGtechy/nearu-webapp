import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

import "../../../comp-files/app-style/_mobileMenuContent.scss";
const MobileMenuContent = ({
    mobileMenuDisplayData, 
    toggleMobileMenu, 
    handleToggleMobileMenu, 
    toggleMobileMenuContent, 
    handleToggleMobileMenuContent}) => {

        const close = () => {
            handleToggleMobileMenuContent(false);
        }


    return (
        <div className="mobile__menu__inner">
        <div className={toggleMobileMenuContent ? "mobile__menu__content open__mobile__menu__content" : "mobile__menu__content"}>
           
            <IoIosArrowRoundBack onClick={()=>close()} />
                {
                    mobileMenuDisplayData.map((item, i) => <div key={i}>{item.catName}</div>)
                }
            </div>
        </div>
    )
}

export default MobileMenuContent
