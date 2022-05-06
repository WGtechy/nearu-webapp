import React from 'react';
import {Link} from "react-router-dom"
import "../../../comp-files/app-style/_mobileFooterMenu.scss"

import { MdNotifications, MdApps } from "react-icons/md";
import { IoIosBasket, IoIosHome, IoMdGift, IoMdSearch } from "react-icons/io";

const MobileFooterMenu = () => {
    const menuIcons = [
      {
        icon: IoIosHome,
        toolTip: "Home",
        className: "footer__icons__home",
        size: 24,
        link: "/"
      },
      {
        icon: IoMdSearch,
        toolTip: "Search",
        className: "footer__icons__search",
        size: 24,
        link: "/search"
      },
      {
        icon: IoIosBasket,
        toolTip: "Cart",
        className: "footer__icons__basket",
        size: 42,
        link: "cart"
      },
      {
        icon: IoMdGift,
        toolTip: "More",
        className: "footer__icons__gift",
        size: 24,
        link: "gift"
      },
    ];
  
    const footerMenuIcons = menuIcons.map((item, i) =><Link to={item.link} key={i}> <item.icon className={item.className} size={item.size} /></Link>
    );
    return (
        <div className="footer__icons footer">
        { footerMenuIcons }
          <Link to="profile"><img
            className="footer__icons__img profile__img"
            src="/profile.jpg"
            alt="avatar"
          /></Link>    
        </div>
    )
};

export default MobileFooterMenu;
