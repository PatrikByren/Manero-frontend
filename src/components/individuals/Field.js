import React from 'react'

const Field = ({icon, text, submitbutton}) => {
  return (
    <div className='field'>
       <div className='fieldicon'> 
        {icon}
        <p>{text}</p>
        </div> 
        {submitbutton}
    </div>
  )
}

export default Field