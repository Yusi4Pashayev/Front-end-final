import React from 'react';
import "./Buttontypegray.css"

const Buttontype = (props) => {
  return (
    <span className='gray_button'>{props.inner_text}</span>
  )
}

export default Buttontype