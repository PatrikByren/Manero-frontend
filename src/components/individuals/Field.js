import React from "react";

const Field = ({ icon, text, subText, submitbutton }) => {
  return (
    <div className="field">
      <div className="fieldicon">
        {icon}
        <div className="field-content">
          <p className="head-text">{text}</p>
          <p className="sub-text">{subText}</p>
        </div>
      </div>
      {submitbutton}
    </div>
  );
};

export default Field;
