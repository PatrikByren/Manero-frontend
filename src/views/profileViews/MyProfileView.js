import React, { useEffect } from "react";
import Field from "../../components/individuals/Field";
import Header from "../../components/sections/Header";
import ProfileIntro from "../../components/individuals/ProfileIntro";
import MenuBar from "../../components/sections/MenuBar";
import { useUserContext } from "../../context/profilecontext/UserContext";
import { redirect } from "react-router-dom";

const MyProfileView = () => {
  const { profile, getProfile, IsSignedIn } = useUserContext();
  useEffect(() => {
    IsSignedIn()
    getProfile()
  }, [])



  return (
    <div className="myprofile">
      <div>
        <Header icon={"fa-sharp fa-light fa-bars"} title={"My profile"} />
        <div className="media-border mx-auto d-flex justify-content-center">
          <ProfileIntro firstname={profile.given_name} lastname={profile.family_name}  email={profile.email}  path="/editprofile" />
          <div className="fieldcontainer">
            <Field linkTo="/orderhistory" icon={<i className="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i className="fa-solid fa-chevron-right"></i>} />
            <Field linkTo="/payments" icon={<i className="fa-regular fa-credit-card"></i>} text="Payment method" submitbutton={<i className="fa-solid fa-chevron-right"></i>} />
            <Field linkTo="/myaddress" icon={<i className="fa-light fa-location-dot"></i>} text="My address" submitbutton={<i className="fa-solid fa-chevron-right"></i>} />
            <Field linkTo="/mypromocodes" icon={<i className="fa-light fa-gift"></i>} text="My promocodes" submitbutton={<i className="fa-solid fa-chevron-right"></i>} />
            <button type="button" className="signoutfield" data-bs-toggle="modal" data-bs-target="#signoutmodal">
              <Field icon={<i className="fa-regular fa-arrow-right-from-bracket"></i>} text="Sign out" />
            </button>
            <div className="modal fade" id="signoutmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <div className="lineup30"></div>
                    <p>Are you sure you want <br /> to sign out?</p>
                    <button type="button" className="basebtn">Sure</button>
                    <div className="signutbtncontainer">
                      <button type="button" className="basebtn btnsec" data-bs-dismiss="modal">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuBar />
    </div >
  );
};

export default MyProfileView;
