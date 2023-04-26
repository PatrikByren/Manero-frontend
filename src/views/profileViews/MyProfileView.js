import React from "react";
import Field from "../../components/individuals/Field";
import Header from "../../components/sections/Header";
import ProfileIntro from "../../components/individuals/ProfileIntro";

const MyProfileView = () => {
  return (
    <div className="myprofile">
      <Header icon={"fa-sharp fa-light fa-bars"} title={"My profile"} />
      <ProfileIntro />
      <Field
        icon={<i class="fa-light fa-calendar"></i>}
        text="Order history"
        submitbutton={<i class="fa-solid fa-chevron-right"></i>}
      />
      <Field
        icon={<i class="fa-light fa-calendar"></i>}
        text="Order history"
        submitbutton={<i class="fa-solid fa-chevron-right"></i>}
      />
      <Field
        icon={<i class="fa-light fa-calendar"></i>}
        text="Order history"
        submitbutton={<i class="fa-solid fa-chevron-right"></i>}
      />
      <Field
        icon={<i class="fa-light fa-calendar"></i>}
        text="Order history"
        submitbutton={<i class="fa-solid fa-chevron-right"></i>}
      />
      <Field
        icon={<i class="fa-light fa-calendar"></i>}
        text="Order history"
        submitbutton={<i class="fa-solid fa-chevron-right"></i>}
      />
    </div>
  );
};

export default MyProfileView;
