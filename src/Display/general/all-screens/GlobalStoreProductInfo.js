import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../comp-files/app-style/_globalStoreProductInfo.scss";
import "../../../comp-files/app-style/_sellersCanvas.scss";
import {
  IoIosArrowDropdown,
  IoIosClose,
  IoIosInformationCircleOutline,
  IoIosShareAlt,
} from "react-icons/io";

import {
  getGlobalStoreProductInfoBySlug,
} from "../../../redux/actions";
import { generatePublicUrl } from "../../../utilities-config/urlConfig";
import { ContentLoading, DataLoading } from "../../../comp-files/hoc/Loading";
import { globalSellersIcons } from "../../../comp-files/Icons";

const GlobalStoreProductInfo = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.selectedGlobalItem);
  const {productInfo, sellers} = data;

  useEffect(()=>{
    const {slug} = props.match.params;
    dispatch(getGlobalStoreProductInfoBySlug(slug))
  },[props, dispatch]);


  return (
    <div className="content">
    <div className="product__info__canvas open" > 
      <div className="heading">
        <IoIosClose
          className="seller__body__heading__icons__cancel"
          // onClick={close}
          size={40}
        />
      </div>
      <div className="body">
        {/* globalImage  */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slider">
              {productInfo.globalProductImage &&
                productInfo.globalProductImage.length > 0 &&
                productInfo.globalProductImage.map((item, index) => (
                  <img
                    src={generatePublicUrl(item.img)}
                    key={index}
                    alt={productInfo.productName}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="product__details__layout">
          {/* Here is the global product information */}
          {productInfo && (
            <div className="product__info">
              <h2 className="product__name">{productInfo.productName}</h2>
              <div className="product__rating">
                <span className="global">Global:</span>
                <span className="global__number">4.7*</span>
                <span className="global__likes">700 likes</span>
                <span className="global__reviews">300 comments</span>
              </div>
              <div className="global__offer">
                <h4>Available offers</h4>
                <span>
                  {productInfo.globalOffer &&
                  productInfo.globalOffer.length > 0 ? (
                    productInfo.globalOffer.map((item, index) => (
                      <div className="global__offer__items" key={index}>
                        {item.offer} {item.terms}
                      </div>
                    ))
                  ) : (
                    <div className="global__offer__items"> No items yet </div>
                  )}
                </span>
              </div>
            </div>
          )}
          {data && <>{data.loading ? DataLoading() : <div> Get items </div>}</>}
        </div>
      </div>
    </div>
    
    
    {/* Here is the global sellers container */}
    
    <div className="sellers__canvas open">
      <div className="contain">
        {sellers.loading ? (
          DataLoading("sellers")
        ) : (
          <>
            <div className="contain__heading">
              <div className="heading__bar">
                <IoIosClose
                  className="icons icons__cancel"
                  size={40}
                />
              </div>
              <div className="contain__heading__location">
                <input type="search" defaultValue="Ikeja" />
              </div>
              <h4>
                <span>
                  {sellers.length === 1 ? (
                    <p>{sellers.length} Seller in your location</p>
                  ) : sellers.length > 1 ? (
                    <p>{sellers.length} Sellers in your location</p>
                  ) : (
                    <p>No seller is selling this product</p>
                  )}{" "}
                </span>
              </h4>
            </div>

            {sellers.map((item, index) => (
              <div className="contain__content" key={index}>
                <div className="contain__content__profile">
                  <img
                    src={
                      item.sellerId.image.length > 0
                        ? generatePublicUrl(item.sellerId.image[0].img)
                        : "/logo.png"
                    }
                    alt={item.sellerId.username}
                  />
                  <span>{item.sellerId.username}</span>
                  <span className="contain__content__profile__information">
                    <IoIosInformationCircleOutline
                      className="icons icons__information"
                      size={20}
                    />
                  </span>
                </div>
                <div className="contain__content__product">
                  <div className="image__contain">
                    <img
                      src={
                        item.sellerId.image.length > 0
                          ? generatePublicUrl(item.sellerId.image[0].img)
                          : "/logo.png"
                      }
                      alt=""
                    />
                  </div>
                  <span>{item.productName}</span>
                  <div className="product__price">
                    <div>
                      <span className="currency">$</span>
                      <span className="figure">{item.sellingPrice}</span>
                      <span className="icons">
                        <IoIosArrowDropdown />
                      </span>
                    </div>
                  </div>
                  <div className="contain__content__product__icons">
                    {globalSellersIcons.map((item, index) => (
                      <div key={index} className="icons" size={item.size}>
                        <item.icon />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  
    </div>
  );
};

export default GlobalStoreProductInfo;
