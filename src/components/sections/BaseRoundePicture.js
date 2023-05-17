import React from "react";
import BackArrowMiddleHead from "../individuals/BackArrowMiddleHead";
import InputSingel from "../individuals/InputSingel";

const BaseRoundePicture = ({
  headline,
  Image,
  content,
  btntext,
  submitname,
  value,
  setvalue,
}) => {
  return (
    <div className="baseroundpicture">
      <BackArrowMiddleHead content={headline} />
      <div className="content">
        <img src={Image} alt="Promo pictyre Error" />
        <div className="lineup30"></div>
        <div className="title-2 text-center">{content}</div>
        <div className="inputcontainer">
          <InputSingel name={submitname} value={value} setValue={setvalue} />
        </div>
        <button className="basebtn"> {btntext} </button>
      </div>
    </div>
  );
};

export default BaseRoundePicture;
