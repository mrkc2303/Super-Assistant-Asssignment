function QuestWrapper({ quesTitle, children, required }) {
    return (
      <div className="quesArea">
        <div className="quesHead">{quesTitle}
            {required === true && (<span className="required"> *</span>)}
        </div>
        <div className="quesContent">
            {children}
        </div>
      </div>
    );
  }
  
  export default QuestWrapper;
  