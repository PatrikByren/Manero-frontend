import React from "react";

const GetStartedWelcome = () => {
  return (
    <div className="get-started-root">
      <div className="container">
        <div className="get-started-welcome">
          <div className="inner-circle"></div>
          <div className="outer-circle"></div>
          <div>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}> <div className="title-1 text-center">Welcome To <br /> Manero!</div><div className="content text-center">Labore sunt culpa excepteur culpa ipsum.
                Labore occaecat ex nisi mollit.</div> <div className="d-flex justify-content-center"> <button className="basebtn">GET STARTED</button></div> </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}> <div className="title-1 text-center">Easy Track <br /> Order!</div><div className="content text-center">Labore sunt culpa excepteur culpa ipsum.
                Labore occaecat ex nisi mollit.</div> <div className="d-flex justify-content-center"> <button className="basebtn">GET STARTED</button></div> </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}> <div className="title-1 text-center">Door To Door <br /> Delivery!</div><div className="content text-center">Labore sunt culpa excepteur culpa ipsum.
                Labore occaecat ex nisi mollit.</div> <div className="d-flex justify-content-center"> <button className="basebtn">GET STARTED</button></div></div>
            </div>

            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"></button>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <div className="pills-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedWelcome;
