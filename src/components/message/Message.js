import React, { Component } from 'react'
import config from '../../config/config'
import './Message.css'

export default class Message extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = { quote: {message: ''} }
    setInterval(this.updateQuote, 1000 * 15)
  }

  updateQuote = () => {
    fetch(config.messageAPI)
      .then(res => res.json())
      .then(res => {
        const quotes = res.data
        const newQuote = quotes[Math.floor(Math.random()*quotes.length)]
        if(this._isMounted) this.setState({ quote: newQuote })
      })
      .catch()
  }

  componentDidMount() {
    this._isMounted = true
    this.updateQuote()
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const quote  = this.state.quote.message || ''

    return <div className='Quote'>
        {quote}
    </div>
  }
}
