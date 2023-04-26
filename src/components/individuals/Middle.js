import React from 'react'
import image from '../../asset/images/headerlogo.png'

const Middle = ({title}) => {
  let isManero;
  if(title === "MANERO"){
    isManero = true;
  }
  return (
    <div className={isManero ? "title-container" : ""}>
      <h3 className={isManero ? "title" : ""}>{title}</h3></div>
  )
}

export default Middle