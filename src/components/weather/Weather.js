import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherDaily from './weatherDaily'
import { ICON_NAME, iconDefault } from  '../../utils/utils'
import config from '../../config/config'
import './Weather.css'

let weatherAPI = config.weatherAPI

export default class Weather extends Component {
  _isMounted = false  

  constructor() {
    super()
    this.state = { noWheatherData: true, data:{} }
    setInterval(this.updateWeather, 1000 * 60 * 30 )
  }

  updateWeather = () => {
    fetch(weatherAPI)
      .then(res => res.json() )
      .then(weatherData => {
        const { icon, summary, temperature } = weatherData.currently
        const today = {
          icon: ICON_NAME[icon],
          color: iconDefault.color,
          size: 128,
          summary: summary,
          temperature: temperature
        }

        if(this._isMounted ) this.setState({ noWheatherData: false, data: {today, daily: weatherData.daily} })
      })
      .catch()
  }

  componentDidMount() {
    this._isMounted = true
    this.updateWeather()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { today, daily } = this.state.data

    const { noWheatherData } = this.state

    return (noWheatherData) ? <div>No weather Data</div> : <div className='TodaysWeather'>
        <CurrentWeather today = {today} /> 
        <WeatherDaily daily = {daily} />
      </div>;
  }
}
