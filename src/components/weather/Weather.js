import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherDaily from './weatherDaily'
import ReactAnimatedWeather from 'react-animated-weather'
import moment from 'moment'
import weatherData from '../../utils/weatherFake'
import { ICON_NAME, iconDefault } from  '../../utils/utils'
import config from '../../config/config'
import './Weather.css'

let weatherAPI = config.weatherAPI

export default class Weather extends Component {
  _isMounted = false  

  constructor() {
    super()
    const today = {
      icon: '',
      color: 'white',
      size: 128,
      summary: '',
      temperature: ''
    }

    const daily = weatherData.daily
    const data = {today, daily}
    this.state = { noWheatherData: true, data }
  }

  updateWeather = () => {
    fetch(weatherAPI)
      .then(res => res.json() )
      .then(weatherData => {

        console.log(weatherData.currently)
        const { icon, summary, temperature } = weatherData.currently
        const newToday = {
        icon: ICON_NAME[icon],
        color: iconDefault.color,
        size: 128,
        summary: summary,
        temperature: temperature
      }

      const daily = weatherData.daily

        if(this._isMounted) this.setState({ noWheatherData: false, data: {today: newToday, daily} })
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
    console.log(noWheatherData);


    return (noWheatherData) ? '' : <div className='TodaysWeather'>
        <CurrentWeather today = {today} /> 
        <WeatherDaily daily = {daily} />
      </div>;
  }
}
