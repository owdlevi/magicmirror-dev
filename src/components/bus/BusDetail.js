import React from 'react'
import moment from 'moment'

const BusDetail = ({bus}) => {

  return <div className='Bus'>
    <span className='BusLine'>{bus.lineName}</span>
    <span className='BusTime'>{moment(bus.expectedArrival).fromNow()}</span>
  </div>
}

export default BusDetail
