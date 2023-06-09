import React from "react";

const Middle = ({ title }) => {
  let isManero;
  let isSearch;
  let isCollection;
  let isElse;
  if (title === "MANERO") {
    isManero = true;
  } else if (title === "search") {
    isSearch = true;
  }
  else if(title === "Best Sellers" || title === "Featured products"){
   isCollection = true;
  }
  else{
    isElse = true;
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
      <div className={isCollection ? "collection" : "hide"}><p>{title}</p></div>
      <div className={isElse ? "content" : "hide"}><p>{title}</p></div>
    </>
  );
};

export default Middle;
