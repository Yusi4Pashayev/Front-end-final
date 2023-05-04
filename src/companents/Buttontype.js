import React from 'react';
import "./Buttontype.css"

const Buttontype = (props) => {
  return (
    <button type="button" className='orange_button' onClick={props.addToChart}>{props.inner_text}</button>
  )
}

export default Buttontype