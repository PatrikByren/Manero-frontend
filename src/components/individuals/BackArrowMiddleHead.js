import React from "react";

const BackArrowMiddleHead = ({ content }) => {
  function goBack() {
    window.history.back();
  }

  return (
    <div className="arrowicon">
      <div className="arrow">
        <i onClick={goBack} className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default BackArrowMiddleHead;
