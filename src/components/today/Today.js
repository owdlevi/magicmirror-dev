import React, { Component } from 'react'
import moment from 'moment'
import './Today.css'

export default class Today extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = {
      day: moment().format('dddd'),
      today: moment().format('D MMMM')
    }

    setInterval(this.checkDate, 1000 * 60 * 5)
  }

  checkDate = () => {
    if (this._isMounted) this.setState({
      day: moment().format('dddd'),
      today: moment().format('D MMMM')
    })
  }

  componentDidMount() {
   this._isMounted = true
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const { day,today } = this.state;
    return <div className='Today'>
        {day}, {today}
      </div>;
  }
}
