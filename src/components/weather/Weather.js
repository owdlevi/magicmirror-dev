import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import moment from 'moment'
import weatherData from '../../utils/weatherFake'
import { ICON_NAME, iconDefault } from  '../../utils/utils'
import config from '../../config/config'
import './Weather.css'

let weatherAPI = config.weatherAPI || './weatherFake,js'

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

  updateWeather = () => {
    fetch(weatherAPI)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        // if(this._isMounted) this.setState({ buses: buses })
      })
      .catch()
  }

  componentDidMount() {
   this._isMounted = true
  //  this.updateWeather()
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const { today, daily } = this.state.data

    const dailyVal = daily.data.slice(0,3).map( dayData => {
      let day = moment.unix(dayData.time)
      return <div className='dayWeather'>
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

    return <div className='TodaysWeather'>
      <div className='currentWeather'>
        <h3>{today.summary}</h3>
        <span className='todayTemperature'>{Math.round(today.temperature)}<sup>&deg;</sup></span>
        <ReactAnimatedWeather
          icon  = {today.icon}
          color = {today.color}
          size  = {today.size}
        />
      </div>

      <div className='weeklyWeather'>
        <p>{daily.summary}</p>
        <div className='dailyList'>
          {dailyVal}
        </div>
      </div>

      </div>;
  }
}
