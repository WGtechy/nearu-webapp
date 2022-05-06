// import React, { useEffect, useState } from 'react';
// import "./app-style/_video.scss";

// import { AiFillEye } from "react-icons/ai"
// import { useDispatch } from 'react-redux';
// import { initialVideo } from '../redux/actions/video.actions/video.action';

// const Video = (props) => {

//    const {content, time, views, contentTitle, uploadTime, profileName, profilePicture, handleToggleVideoCanvasPlayer} = props;
//     const [videoDetails, setVideoDetail] = useState("")
//     const dispatch = useDispatch;

   

//     const currentVideo = () => {
//         // setVideoDetail({
//         //     content, time,views, contentTitle, uploadTime, profileName, profilePicture
//         // })
//         handleToggleVideoCanvasPlayer()
//     }
    
//     // console.log(videoDetails)

//     // useEffect(() => {
//     //     dispatch( initialVideo())
//     // },
//     // [dispatch])

//     return (
//         <div className = "video" >
//              <div className= "video__top"  onClick = {currentVideo}>
//                  <img src={ content } alt="code snap" />
//                  <span>{ time }</span>
//              </div>
//              <div className="video__title">{ contentTitle }</div>
//              <div className="video__details">
//               <span><AiFillEye /> { views } </span>
//               <span>{ uploadTime }</span>
//              </div>
//              <div className="video__channel">
//                  <img src={ profilePicture } alt={profileName} />
//                  <p>{ profileName }</p>
//              </div>
//     </div>
//     )
// }

// export default Video
