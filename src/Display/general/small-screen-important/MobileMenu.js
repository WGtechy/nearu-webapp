import React, {useState} from "react";
import "../../../comp-files/app-style/_mobileMenu.scss";
import {
  IoIosPhotos,
  IoIosPersonAdd,
  IoIosHourglass,
  IoIosColorPalette,
  IoIosLogOut,
  IoIosTrendingUp,
  IoIosClose,
  IoIosSettings,
} from "react-icons/io";

import {
  BsBriefcaseFill,
  BsBuilding,
  BsListUl,
  BsServer,
} from "react-icons/bs";
import MobileMenuContent from "./MobileMenuContent";
const MobileMenu = ({ toggleMobileMenu,  handleToggleMobileMenu,  toggleMobileMenuContent,  handleToggleMobileMenuContent }) => {

  const [mobileMenuDisplayData, setMobileMenuDisplayData] = useState([]);
  const menuIcons = {
      menus: 
      [
       {
         icon: BsListUl,
         name: "Categories",
         className: "mobileMenu__icons__categories",
         size: 30,
         children: [{catName: "cat1"}, {catName: "cat2"}, {catName: "cat3"}],
       },
       {
         icon: IoIosTrendingUp,
         name: "Trending",
         className: "sidebar__icons__categories",
         size: 30,
         children: [],
       },
       {
         icon: IoIosPhotos,
         name: "Bundle",
         className: "mobileMenu__icons__bundle",
         size: 30,
         children: [{catName: "cat1"}, {catName: "cat2"}, {catName: "cat3"}],
       },
       {
         icon: IoIosPersonAdd,
         name: "Follow",
         className: "mobileMenu__icons__follow",
         size: 30,
         children: [],
       },
       {
         icon: BsBuilding,
         name: "Sellers",
         className: "mobileMenu__icons__sellers",
         size: 30,
         children: [],
       },
       {
         icon: BsBriefcaseFill,
         name: "Brands",
         className: "mobileMenu__icons__types",
         size: 30,
         children: [],
       },
       {
         icon: IoIosHourglass,
         name: "Promo",
         className: "mobileMenu__icons__promo",
         size: 30,
         children: [],
       } 
       
     ],
     account: [
           {
        icon: BsServer,
        name: "Accounts",
        className: "mobileMenu__icons__addAccount",
        size: 30,
        children: [],
      },
      {
          icon: IoIosSettings,
          name: "Settings",
          className: "mobileMenu__icons__settings",
          size: 30,
          children: [],
      },
      {
        icon: IoIosColorPalette,
        name: "Theme",
        className: "mobileMenu__icons__theme",
        size: 30,
        children: [],
      },

      {
        icon: IoIosLogOut,
        name: "Log out",
        className: "mobileMenu__icons__logout",
        size: 30,
        children: [],
      },
     ]
  };

  const handleMenuItem = (content) => {
   if(content && content.length > 0 )handleToggleMobileMenuContent(true);
    setMobileMenuDisplayData(content);
  };


  return (
    <>
      <MobileMenuContent mobileMenuDisplayData={mobileMenuDisplayData} toggleMobileMenu={toggleMobileMenu} handleToggleMobileMenu ={handleToggleMobileMenu} toggleMobileMenuContent={toggleMobileMenuContent} handleToggleMobileMenuContent={handleToggleMobileMenuContent} />
      <div className={toggleMobileMenu ? "left__side__nav open mobileView" : "left__side__nav mobileview"}>
        <div className = "menu__top__bar">
            <IoIosClose className = "mobileMenu__icons__cancel" onClick= { () => handleToggleMobileMenu(false)} size= {35}  />
        </div>
        <div className="left__side__nav__body">
          <nav className="left__side__nav__menus">
              {
                menuIcons.menus.map((item, i) => (
                <li key={i}  onClick= {() =>handleMenuItem(item.children)}>
                  {<item.icon className={item.className} size={item.size} />}
                  <span>
                    {item.name}
                  </span>
                
                </li>
              ))
              }
          </nav>

          {/* <hr />   */}
          <div className="mobile__footer">
              {
                menuIcons.account.map((item, i) =>(
                <li key={i}  onClick= {() =>handleMenuItem(item.children)} >
                    {<item.icon className={item.className} size={item.size} />}
                    <span>
                        {item.name}
                    </span>
                </li>
              ))
              }
          </div>
        </div>
        
    </div>
    </>
  )
  
};


export default MobileMenu;
