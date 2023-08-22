import React from "react";

function QuestWrapper({ quesTitle, children, required }) {
  return (
    <div className="quesArea">
      {/* Question title and required indicator */}
      <div className="quesHead">
        {quesTitle}
        {required === true && (<span className="required"> *</span>)}
      </div>
      {/* Content of the question */}
      <div className="quesContent">
        {children}
      </div>
    </div>
  );
}

export default QuestWrapper;
