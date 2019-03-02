import React, { Component } from 'react'
import './Clock.css'

export default class Clock extends Component {
  _isMounted = false

  constructor() {
    super()
    const newTime = new Date()
    this.state = {
      thetime: {
        hour: this.withLeadingZeros(newTime.getHours()),
        minute: this.withLeadingZeros(newTime.getMinutes()),
        second: this.withLeadingZeros(newTime.getSeconds())
    }
  }
    setInterval(this.tick, 1000)
  }

  tick = () => {
    const newTime = new Date()
    if (this._isMounted) this.setState({
      thetime: {
        hour: this.withLeadingZeros(newTime.getHours()),
        minute: this.withLeadingZeros(newTime.getMinutes()),
        second: this.withLeadingZeros(newTime.getSeconds())
      }
    })
  }

 withLeadingZeros = (num) =>
  {
    return (num < 10 ? '0' : '') + num
  }
  componentDidMount() {
   this._isMounted = true
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const { thetime } = this.state;
    return <div className='Clock'>
      <span className='hour-minute'>
      {thetime.hour} : {thetime.minute}
      <sup className='seconds'>{thetime.second}</sup>
      </span>
      </div>;
  }
}
