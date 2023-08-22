function HeadWrapper() {
    return (
      <div className="headArea">
        <div className="headColor"></div>
        <div className="innerHead">
            <span className="headHeading">Assignment Task</span>
        </div>
        <hr />
        <div className="innerHead headDesc">
            <span className="headEmail">kanishkchhabra23@gmail.com  </span>
            <a href="#">Switch Account</a>
            <div>
                The name and photo associated with your Google account will 
                be recorded when you upload files and submit this form. 
                Your email is not part of your response.
            </div>
        </div>
        <hr />
        <div className="innerHead headInfo">
            * Indicates required question
        </div>
      </div>
    );
  }
  
  export default HeadWrapper;
  