import React, { useState } from "react";
import { Home, Header, Sidebar, MobileFooterMenu } from "./index";
import "../../_app.scss";
import MobileMenu from "./small-screen-important/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { topMenuData } from "../../redux/actions";
import { sidebarAction } from "../../redux/actions";
import PrivateRouting from "./PrivateRouting";

const MainLayout = (props) => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const [activeElement, setActiveElement] = useState("");
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [toggleMobileMenuContent, setToggleMobileMenuContent] = useState(false);


  const handleToggleMobileMenu = () => setToggleMobileMenu((value) => !value);
  const handleToggleMobileMenuContent = () => setToggleMobileMenuContent((value) => !value);
  const handleNavItem = (active, content) => {
    if (sidebar.display) {
      dispatch(sidebarAction(false));
    } else {
      dispatch(sidebarAction(true));
    }
    if (content && content.length > 0) dispatch(sidebarAction(true));
    if (sidebar.sideMenuContent) setActiveElement("");
    setActiveElement(active);
    dispatch(topMenuData(content))
  };

  
  return (
    <>
      <MobileMenu
        className="mobileMenu"
        toggleMobileMenu={toggleMobileMenu}
        handleToggleMobileMenu={handleToggleMobileMenu}
        toggleMobileMenuContent={toggleMobileMenuContent}
        handleToggleMobileMenuContent={handleToggleMobileMenuContent}
      />
      <Header
        handleToggleMobileMenu={handleToggleMobileMenu}
      />
      <Sidebar activeElement={activeElement} handleNavItem={handleNavItem} />
      <div className="layoutOne__container">
        {props.children}
      </div>
      <MobileFooterMenu className="mobileView" />
    </>
  );
};

export default MainLayout;
