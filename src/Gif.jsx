import React from 'react'
import './Gif.scss';

function Gif(props) {

  return (
    <div id='gif-container'>
      <div id="gif-wrapper">
        <img src={props.url} alt="gif"/>
      </div>
    </div>
  )
}

export default Gif
