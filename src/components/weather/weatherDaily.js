import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import moment from 'moment'
import { ICON_NAME, iconDefault } from  '../../utils/utils'

const WeatherDaily = (props) => {
    const { daily } = props
    const dailyVal =  daily.data.slice(0,3).map( dayData => {
        let day = moment.unix(dayData.time)
        return <div className='dayWeather' key={dayData.time}>
          <span className='dayName'>{day.format('dddd')}</span>
          <div className='dayIcon'>
            <ReactAnimatedWeather
              icon={ICON_NAME[dayData.icon]}
              color={iconDefault.color}
              size={iconDefault.size}
              animate={false}
            />
          </div>
          <div className='dayTemperature'>
          <span>{Math.round(dayData.temperatureLow)}<sup>&deg;</sup></span>
          <span>{Math.round(dayData.temperatureHigh)}<sup>&deg;</sup></span>
          </div>
        </div>
      })
    return (
        <div className='weeklyWeather'>
        <p>{daily.summary}</p>
        <div className='dailyList'>
          {dailyVal}
        </div>
      </div>
    )
}

export default WeatherDaily