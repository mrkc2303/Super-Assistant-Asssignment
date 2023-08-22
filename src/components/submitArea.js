import React from "react"; 

function SubmitArea() {
  return (
    <div className="submitMain">
      {/* Submit button */}
      <button className="submitBtn">
        Submit
      </button>
      {/* Progress box */}
      <div className="progressBox">
        {/* Form progress indicator */}
        <div className="formProgress"></div>
        {/* Page information */}
        <span>Page 1 of 1</span>
      </div>
      {/* Clear form link */}
      <span className="formClear">Clear form</span>
    </div>
  );
}

export default SubmitArea;