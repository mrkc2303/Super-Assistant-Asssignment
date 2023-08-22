import React from "react";

function HeadWrapper() {
  return (
    <div className="headArea">
      {/* Colored bar */}
      <div className="headColor"></div>
      {/* Inner header section */}
      <div className="innerHead">
        {/* Assignment heading */}
        <span className="headHeading">Assignment Task</span>
      </div>
      {/* Horizontal line */}
      <hr />
      {/* Inner header section with description */}
      <div className="innerHead headDesc">
        {/* User email */}
        <span className="headEmail">kanishkchhabra23@gmail.com  </span>
        {/* Switch Account link */}
        <a href="#">Switch Account</a>
        <div>
          {/* Description */}
          The name and photo associated with your Google account will 
          be recorded when you upload files and submit this form. 
          Your email is not part of your response.
        </div>
      </div>
      {/* Horizontal line */}
      <hr />
      {/* Inner header section with information */}
      <div className="innerHead headInfo">
        {/* Required question indicator */}
        * Indicates required question
      </div>
    </div>
  );
}

export default HeadWrapper;