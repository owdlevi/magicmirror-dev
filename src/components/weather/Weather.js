import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import weatherData from '../../utils/weatherFake'
import { ICON_NAME, iconDefault } from  '../../utils/utils'
import './Weather.css'

export default class Weather extends Component {
  _isMounted = false

  constructor() {
    super()
    const today = {
      icon: 'PARTLY_CLOUDY_NIGHT',
      color: 'white',
      size: 128,
      summary: weatherData.currently.summary,
      temperature: weatherData.currently.temperature
    }

    const daily = weatherData.daily

    const data = {today, daily}

    this.state = { data }
  }

  componentDidMount() {
   this._isMounted = true
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const { today, daily } = this.state.data

    const dailyVal = daily.data.map( dayData => {
      return <div>
      <ReactAnimatedWeather
        icon={ICON_NAME[dayData.icon]}
        color={iconDefault.color}
        size={iconDefault.size}
        animate={false}
      /></div>
    })

    return <div className='TodaysWeather'>
      <div className='currentWeather'>
        <h3>{today.summary}</h3>
        <span className='todayTemperature'>{today.temperature}<sup>&deg;</sup></span>
        <ReactAnimatedWeather
          icon={today.icon}
          color={today.color}
          size={today.size}
        />
        <div className='maxmin'>
         <span>3<sup>&deg;</sup></span>
         <span>16<sup>&deg;</sup></span>
        </div>
      </div>

      <div className='weeklyWeather'>
        <p>{daily.summary}</p>
        {dailyVal}
      </div>

      </div>;
  }
}
