import React from "react";
import Field from "../../components/individuals/Field";
import Header from "../../components/sections/Header";
import ProfileIntro from "../../components/individuals/ProfileIntro";
import MenuBar from "../../components/sections/MenuBar";

const MyProfileView = () => {
  return (
    <div className="myprofile">
      <Header icon={"fa-sharp fa-light fa-bars"} title={"My profile"} />
      <div className="media-border mx-auto d-flex justify-content-center">
        <ProfileIntro />
        <div className="fieldcontainer">
          <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
          <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
          <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
          <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
          <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
        </div>
      </div>
      <MenuBar />
    </div >
  );
};

export default MyProfileView;
