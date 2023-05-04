import React from 'react';
import "./NewsCard.css"

const NewsCard =(props)=> {
    
  return (
    <div className='news_Card' key={props.key}>
        <h1>{props.title}</h1>
        <p>{props.content}...</p>
        <span>{props.time}</span>   
    </div>
  )
}

export default NewsCard