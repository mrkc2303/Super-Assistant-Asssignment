function SubmitArea() {
    return (
        <div className="submitMain">
            <button className="submitBtn">
                Submit
            </button>
            <div className="progressBox">
                <div className="formProgress"></div>
                <span>Page 1 of 1</span>
            </div>
            <span className="formClear">Clear form</span>
        </div>
    );
  }
  
  export default SubmitArea;
  