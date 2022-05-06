import React from "react";

const VideoComponent = (props) => {
    const { classNameContainer, classNameVideoTop, videoSource, alt, videoTime, onClick, children } = props;
    return (
        <div className= {classNameContainer} onClick={onClick}>
              <div className= {classNameVideoTop}>
                <img src= {videoSource} alt= {alt} />
                <span> {videoTime} </span>
                {/* <span>{videoIcons}</span> */}
              </div>
              {children}
               {/* <div className="video__title">{values.contentTitle}</div>
              <div className="video__details">
                <span>
                  <AiFillEye /> {values.views}{" "}
                </span>
                <span>{values.uploadTime}</span>
              </div> 
              <div className="video__channel">
                <img src={values.profilePicture} alt={values.profileName} />
                <p>{values.profileName}</p>
              </div> */}
            </div> 
    )
}

export default VideoComponent;