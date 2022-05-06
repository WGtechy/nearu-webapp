import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../redux/actions";
import { sideMenuContentAction, sidebarAction } from "../redux/actions/canvas";

const Categories = () => {
  

  const selector = useSelector((state) => {
    return { 
      sidebar: state.sidebar, 
      sideMenuContent: state.sideMenuContent,
      topMenuData: state.topMenuData.data
     };
  });

  const dispatch = useDispatch();

  const switching = (item) => {
    if (selector.sidebar.display) dispatch(sidebarAction(false));
    if (selector.sideMenuContent) dispatch(sideMenuContentAction(false));
  };

  const renderCategories = (cat) => {
    //This is data strucure. It will map all the items inside the categories parameter value. This same techniques was used in the backend to get the categories
    let allCategories = [];
    for (let category of cat) {
      //this also work like the map function category.map(category => {categories.name}) but this is useful for recursive aproach
      allCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <Link to= {category.name} onClick={()=>switching(category.name)}>
              {category.name}
            </Link>
          ) : (
            <span>{category.name}</span>
          )}

          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return allCategories;
  }; 

  return (
    <ul>
      {selector.topMenuData.length > 0
        ? renderCategories(selector.topMenuData)
        : null}
    </ul>
  );
};

export default Categories;
