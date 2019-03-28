import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

const CurrentWeather = (props) => (
    <div className='currentWeather'>
        <h3>{props.today.summary}</h3>
        <span className='todayTemperature'>{Math.round(props.today.temperature)}<sup>&deg;</sup></span>
        <ReactAnimatedWeather
          icon  = {props.today.icon}
          color = {props.today.color}
          size  = {props.today.size}
        />
      </div>    
)

export default CurrentWeather