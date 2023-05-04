import React from 'react'
import "./HorizantalList.css"

const HorizantalList = (props) => {
  return (
    <div className='footer__menu_list'>
        <h1>{props.title}</h1>
        <ul>
            {props.list.map((item)=>{
                return <li key={item}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default HorizantalList