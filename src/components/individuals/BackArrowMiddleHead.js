import React from 'react'

const BackArrowMiddleHead = ({ content }) => {
  return (
    <div className='arrowicon'>
      <div className="arrow">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div className='content'>{content}</div>
    </div>
  )
}

export default BackArrowMiddleHead