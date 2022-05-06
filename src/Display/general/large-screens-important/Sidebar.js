import React, { useEffect, useState } from "react";
import "../../../comp-files/app-style/_sideBar.scss";
import { Link } from "react-router-dom";
import {
  IoIosLogOut,
  IoIosArrowForward,
} from "react-icons/io";

import SideMenuContent from "./SideMenuContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../redux/actions";
import {
  sideMenuContentAction,
  sidebarAction,
  topMenuData,
} from "../../../redux/actions/canvas";
import {publicNav} from "../../../comp-files/Navigation/_nav"

export const Sidebar = (props) => {
  const [activeElement, setActiveElement] = useState("");
  // const [menuDisplayContent, setMenuDisplayContent] = useState([]);
  // const category = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  // const sidebar = useSelector(state => state.sidebar);
  // const sideMenuContent = useSelector(strat)
  

  const selector = useSelector((state) => {
    return {
      category: state.category.categories,
      sidebar: state.sidebar,
      sideMenuContent: state.sideMenuContent,
      topMenuData: state.topMenuData.data
    };
  });

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleNavItem = (active, content) => {
    if (selector.sidebar.display) dispatch(sidebarAction(false));
    if (content && content.length > 0) dispatch(sideMenuContentAction(true));
    if (selector.sideMenuContent) setActiveElement("");
    setActiveElement(active);
    if (content) dispatch(topMenuData(content));
    else dispatch(sideMenuContentAction(false));
  };

 

  return (
    <>
      <SideMenuContent />
      <nav
        className={
          selector.sidebar.display ? "sidebar" : "sidebar close__sidebar"
        }
      >
        {publicNav.map(
          (item, i) =>
            item.name === "Categories" && (
              <li
                key={i}
                className={
                  activeElement === item.name
                    ? `${item.className} active`
                    : item.className
                }
                onClick={() => handleNavItem(item.name, selector.category)}
                
              >
                <div className="li__list">
                  {<item.icon className={item.className} size={item.size} />}
                  {/* <span>{item.name}</span> */}
                  {item.children && <IoIosArrowForward size={15} />}
                </div>
                <small>{item.name}</small>
              </li>
            )
        )}
        {publicNav.map(
          (item, i) =>
            item.route && (
              <Link to={item.route} key={i}>
                <li
                  className={
                    activeElement === item.name
                      ? `${item.className} active`
                      : item.className
                  }
                  onClick={() => handleNavItem(item.name)}
                >
                  <div className="li__list">
                    {<item.icon className={item.className} size={item.size} />}
                    {/* <span>{item.name}</span> */}
                    {item.children && <IoIosArrowForward size={15} />}
                  </div>
                  <small>{item.name}</small>
                </li>
              </Link>
            )
        )}
        <hr />
        <li>
          <IoIosLogOut className="sidebar__icons__logout" size={20} />
          <small>Log Out</small>
        </li>
      </nav>
    </>
  );
};
