import React from 'react';
import "./AddButton.css"



const AddButton = (props) => {
  return (
    <button type="button" className='orange_button' onClick={props.addToChart}>{props.inner_text}</button>
  )
}

export default AddButton