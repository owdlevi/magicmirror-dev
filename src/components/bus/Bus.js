import React, { Component } from 'react'
import BusDetail from './BusDetail'
import config from '../../config/config'
import './Bus.css'

const tflAPI = `/bus`

export default class Bus extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = { buses: [] }
    setInterval(this.updateBus, 1000*30)
  }

  updateBus = () => {
    fetch(tflAPI)
      .then(res => res.json())
      .then(json => {
        let buses = json.filter(bus => bus.lineName !== config.removeBus)

        buses.sort((a, b) => {
          if (a.expectedArrival < b.expectedArrival) return -1
          if (a.expectedArrival > b.expectedArrival) return 1
          return 0
        })

       if(this._isMounted) this.setState({ buses: buses })
      })
      .catch()
  }

  componentDidMount() {
    this._isMounted = true
    this.updateBus()
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const { buses } = this.state
    const busList = buses.map(bus => <BusDetail key={bus.id} bus={bus} />)

    return <div className='BusList'>
        {busList}
    </div>
  }
}
