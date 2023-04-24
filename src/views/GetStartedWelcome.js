import React from "react";

const GetStartedWelcome = () => {
  return (
    <div className="get-started-root">
      <div className="container">
        <div className="get-started-welcome">
          <div className="inner-circle"></div>
          <div className="outer-circle"></div>
          <div>
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <i class="fa-regular fa-rectangle-wide"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-period"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-period"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedWelcome;
