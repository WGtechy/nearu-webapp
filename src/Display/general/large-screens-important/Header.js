import React, { useState } from "react";
import "../../../comp-files/app-style/_header.scss";
import { useSelector, useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { IoIosBasket, IoIosHome, IoIosMore, IoIosClose } from "react-icons/io";
import { AiFillEnvironment, AiOutlineMessage } from "react-icons/ai";

// import SearchBar from "../../../comp-files/SearchBar";
import { SearchBar } from "../../../comp-files";
import { sidebarAction, sideMenuContentAction } from "../../../redux/actions/canvas";

export const Header = ({handleToggleMobileMenu}) => {
  const sidebar = useSelector((state) => state.sidebar);
  const topMenuDisplay = useSelector(state=>state.sideMenuContent.display)
  const dispatch = useDispatch();
  const toggleMenu = () => {
    if ( sidebar.display  ) return    dispatch(sidebarAction(false));
    else { dispatch(sidebarAction(true));}
  };

  const menuIcons = [
    {
      icon: IoIosHome,
      toolTip: "Home",
      className: "header__icons__home",
      size: 24,
      action: null,
    },
    {
      icon: MdNotifications,
      toolTip: "Notification",
      className: "header__icons__notification",
      size: 24,
      action: null,
    },
    {
      icon: IoIosBasket,
      toolTip: "Cart",
      className: "header__icons__basket",
      size: 32,
      action: null,
    },
    {
      icon: IoIosMore,
      toolTip: "More",
      className: "header__icons__more",
      size: 24,
      action: handleToggleMobileMenu,
    },
  ];

  const leftMenuIcons = menuIcons.map((item, i) => (
    <item.icon
      className={item.className}
      size={item.size}
      key={i}
      onClick={item.action ? () => item.action() : null}
    />
  ));
  const closeSubMenu = () => {
    dispatch(sidebarAction(false));
    dispatch(sideMenuContentAction(false));
  };
  return (
    <>
      <div className="header">
        <div className="header__left">
        {topMenuDisplay ? <IoIosClose
            className="header__left__menu"
            size={26}
            onClick={closeSubMenu}
          />
          : <FaBars
            className="header__left__menu"
            size={26}
            onClick={() => toggleMenu()}
          />}
          

          <img className="header__left__logo" src="/logo.png" alt="Site logo" />
          <AiFillEnvironment className="header__icons__environment" size={24} />
        </div>

         <SearchBar className="header__search__bar" />
        <div className="header__icons">
          {leftMenuIcons}

          <img
            className="header__icons__img profile__img"
            src="/profile.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </>
  );
};
