import React, { Component } from 'react'
import Clock from './components/clock/Clock'
import Today from './components/today/Today'
import Bus from './components/bus/Bus'
import Message from './components/message/Message'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='TopLeft'>
          <Today />
          <Clock />
        </div>
        <div className='TopRight'>
          <Bus />
        </div>
        <div className='Message'>
            <Message />
        </div>
      </div>
    );
  }
}

export default App
