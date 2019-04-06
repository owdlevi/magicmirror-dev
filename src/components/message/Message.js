import React, { Component } from 'react'
// import MessageText from './MessageText'

import quotes from '../../utils/data.js'
import './Message.css'

export default class Message extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = { quote: {text: ''} }
    setInterval(this.updateQuote, 1000 * 30)
  }

  updateQuote = () => {
    const newQuote = quotes[Math.floor(Math.random()*quotes.length)]
    if(this._isMounted) this.setState({ quote: newQuote })
  }

  componentDidMount() {
    this._isMounted = true
    this.updateQuote()
  }

  componentWillUnmount() {
   this._isMounted = false
  }

  render() {
    const quote  = this.state.quote.text || ''

    return <div className='Quote'>
        {quote}
    </div>
  }
}
