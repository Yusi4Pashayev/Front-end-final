import React from 'react';
import "./Statisticbar.css"
import Buttontype from '../Buttontype';


const Statisticbar = (props) => {
  return (
    <div className='statistic_bar' key={props.id}>
        <h1>{props.title}</h1>
        <div className='statistic_bar-value'>{props.value}</div>
        <div className='statistic_bar-value-text'>{props.value_text}</div>
        <Buttontype inner_text ={props.button}/>
    </div>
  )
}

export default Statisticbar