import React, { useState } from "react";
import "./readmore.css";
import img1 from "../../assets/ORLANDO2303 1.png";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container container123">
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div style={{padding:"1rem"}}>
            <img
              style={{ width: "88px", height: "88px" }}
              src={img1}
              alt="img"
            />
          </div>
          <div>
            <h2>
              <ReadMore href="#" style={{ width: "183px", height: "73px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ReadMore>
            </h2>
          </div>
        </div> 
        {/* <br/> */}
        <div className="col-md-6 grid-margin stretch-card">
          <div style={{padding:"1rem"}}>
            <img
              style={{ width: "88px", height: "88px" }}
              src={img1}
              alt="img"
            />
          </div>
          <div>
            <h2>
              <ReadMore href="#" style={{ width: "183px", height: "73px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ReadMore>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div style={{padding:"1rem"}}>
            <img
              style={{ width: "88px", height: "88px" }}
              src={img1}
              alt="img"
            />
          </div>
          <div>
            <h2>
              <ReadMore href="#" style={{ width: "183px", height: "73px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ReadMore>
            </h2>
          </div>
        </div> 
        {/* <br/> */}
        <div className="col-md-6 grid-margin stretch-card">
          <div style={{padding:"1rem"}}>
            <img
              style={{ width: "88px", height: "88px" }}
              src={img1}
              alt="img"
            />
          </div>
          <div>
            <h2>
              <ReadMore href="#" style={{ width: "183px", height: "73px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ReadMore>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
