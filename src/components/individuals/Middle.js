import React from "react";

const Middle = ({ title }) => {
  let isManero;
  let isSearch;
  if (title === "MANERO") {
    isManero = true;
  } else if (title === "search") {
    isSearch = true;
  }
  return (
    <>
      <div className={isManero ? "title-container" : "hide"}>
        <h3 className={isManero ? "title" : ""}>{title}</h3>
      </div>
      <div className={isSearch ? "search" : "hide"}>
        <i className="fa-light fa-magnifying-glass 2xs"></i>
        <input type="text" placeholder="Search"></input>
      </div>
    </>
  );
};

export default Middle;
