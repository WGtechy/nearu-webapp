import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import {
  IoIosBookmark,
  IoIosChatbubbles,
  IoIosFlag,
  IoIosFlame,
  IoIosShareAlt,
  IoIosHeartDislike,
  IoIosHeart,
  IoIosTimer,
} from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { VideoComponent } from "../../../comp-files";

import "../../../comp-files/app-style/_playerPage.scss";

import "../../../comp-files/app-style/_video.scss";
import { displayAvailableSellers, globalProductStoreInfo, getAmbasadorPromotions } from "../../../redux/actions";
import { sellers } from "../../../demoApi";
 
const PlayerPage = (props) => {
  const [bookmark, setBookmark] = useState(false);
  const [thumbUp, setThumbUp] = useState(false);
  const [thumbDown, setThumbDown] = useState(false);
  const [hotPay, setHotPay] = useState(false);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const videoDetails = useSelector((state) => state.video.videos);

  const getData = () => {
    // dispatch(getAmbasadorPromotions())
    // dispatch(globalProductStoreInfo({}, {}, true))
    // dispatch(displayAvailableSellers(sellers, true));
  };

  const handleToggleBookmark = () => setBookmark((value) => !value);
  const handleToggleThumbUp = () => {
    if (thumbDown) setThumbDown(false);
    if (thumbUp) {
      setThumbUp(true);
    } else setThumbUp((value) => !value);
  };
  const handleToggleThumbDown = () => {
    if (thumbUp) setThumbUp(false);
    if (thumbDown) {
      setThumbDown(true);
    } else setThumbDown((value) => !value);
  };
  const handleToggleHotPay = () => setHotPay((value) => !value);
  const handleToggleFlag = () => setFlag((value) => !value);

  return (
    <div className="video__canvas open">
      <div className="video__canvas__left__content ">
        <div className="video__canvas__left__content__body">
          <div className="video__canvas__left__content__body__profile">
            <img
              src={videoDetails.profilePicture}
              alt={videoDetails.profileName}
            />
            <span>{videoDetails.profileName}</span>
          </div>
          <VideoComponent
            classNameContainer="video__canvas__left__content__video__container"
            classNameVideoTop="video__canvas__left__content__video__container__video"
            videoSource={videoDetails.content}
            alt={videoDetails.contentTitle}
          >
            <div className="video__canvas__left__content__video__icons">
              <div className="video__canvas__left__content__video__icons__left">
                <div>
                  <IoIosHeart
                    className={thumbUp ? "clicked cursor" : "cursor"}
                    size={25}
                    onClick={() => handleToggleThumbUp()}
                  />
                  <span>Like</span>
                </div>
                <div>
                  {" "}
                  <IoIosHeartDislike
                    className={thumbDown ? "clicked cursor" : "cursor"}
                    size={25}
                    onClick={() => handleToggleThumbDown()}
                  />
                  <span>Dislike</span>
                </div>
                <div>
                  <IoIosChatbubbles className=" cursor" size={25} />
                  <span>Comment</span>
                </div>
                <div>
                  <IoIosShareAlt className=" cursor" size={25} />
                  <span>Share</span>
                </div>
              </div>

              <div
                className="cusor video__canvas__left__content__video__icons__center"
                onClick={() => getData()} // I should be able to display the product and sellers
              >
                <div>
                  <BsBuilding size={25} />
                  <span>Buy Now!</span>
                </div>
              </div>

              <div className="video__canvas__left__content__video__icons__right">
                <div>
                  <IoIosFlame
                    className={hotPay && "clicked cursor"}
                    size={25}
                    onClick={() => handleToggleHotPay()}
                  />
                  <span>Quick pay</span>
                </div>
                <div>
                  <IoIosFlag
                    className={flag && "clicked cursor"}
                    size={25}
                    onClick={() => handleToggleFlag()}
                  />
                  <span>Report</span>
                </div>
                <div>
                  <IoIosBookmark
                    className={bookmark && "clicked cursor"}
                    size={25}
                    onClick={() => handleToggleBookmark()}
                  />
                  <span>Save</span>
                </div>
              </div>
            </div>

            <div className="video__title">{videoDetails.contentTitle}</div>
            <div className="video__details">
              <span>
                <AiFillEye /> {videoDetails.views}{" "}
              </span>
              <span>{videoDetails.uploadTime}</span>
            </div>
          </VideoComponent>
          <div className="mobileView">
            <VideoComponent
              classNameContainer="video"
              classNameVideoTop="video__top"
              videoSource="/code-snap.png"
              alt="video"
              videoTime={"45:3"}
            >
              <div className="mobile__suggestion">
                <div className="mobile__suggestion__description">
                  This is a dummy video description created by Williams Godwin
                </div>
                <div className="mobile__suggestion__details">
                  <div className="views__comments">
                    <span>
                      <AiFillEye /> 48,303
                    </span>
                    <span>
                      <IoIosChatbubbles /> 300
                    </span>
                  </div>

                  <div className="time__follow">
                    <span>
                      <IoIosTimer /> today
                    </span>
                    <span className="follow__button">Follow</span>
                  </div>
                </div>
              </div>
            </VideoComponent>
          </div>
        </div>
      </div>
      <div className="video__canvas__right__content">
        <VideoComponent
          classNameContainer="video"
          classNameVideoTop="video__top"
          videoSource="/code-snap.png"
          alt="video"
          videoTime={"45:3"}
        >
          <div className="video__right__sidebar">
            <div className="video__right__sidebar__title">
              This is a dummy video description created by Williams Godwin
            </div>
            <div className="video__right__sidebar__details">
              <div className="views__comments">
                <span>
                  <AiFillEye /> 48,303
                </span>
                <span>
                  <IoIosChatbubbles /> 300
                </span>
              </div>

              <div className="time__follow">
                <span>
                  <IoIosTimer /> today
                </span>
                <span className="follow__button">Follow</span>
              </div>
            </div>
          </div>
        </VideoComponent>
      </div>
    </div>
  );
};

export default PlayerPage;
