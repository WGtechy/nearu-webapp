import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../comp-files/app-style/_home.scss";
import "../../../comp-files/app-style/_video.scss";
import SubHeader from "../large-screens-important/SubHeader";
import { VideoComponent } from "../../../comp-files";
import { AiFillEye } from "react-icons/ai";
import { videos } from "../../../utilities";
import { useDispatch } from "react-redux";
import { clickedVideos } from "../../../redux/actions/video.actions";
import MainLayout from "../MainLayout";


const Home = () => {
  const dispatch = useDispatch();

  const toggle = (values) => {
    dispatch(clickedVideos(values));
  };

  return (
    <MainLayout>
      <SubHeader />
      <Container
      //  className={
        //   toggleSidebar || toggleVideoCanvasPlayer
        //     ? // || toggleMobileMenu
        //       "content__area close"
        //     : "content__area"
        // }
        className ="content__area"
       
      >
        <Row>
          {videos.map((values, i) => (
            <Col lg={3} md={4} sm={2} xs={1} key={i}>
              <div className="video__channel">
                <img src={values.profilePicture} alt={values.profileName} />
                <p>{values.profileName}</p>
              </div>
              <VideoComponent
                onClick={() => toggle(values)}
                classNameContainer="video"
                classNameVideoTop="video__top"
                videoSource={values.content}
                alt={values.contentTitle}
                videoTime={values.time}
              >
                <div className="video__title">{values.contentTitle}</div>
                <div className="video__details">
                  <span>
                    <AiFillEye /> {values.views}{" "}
                  </span>
                  <span>{values.uploadTime}</span>
                </div>
              </VideoComponent>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;
