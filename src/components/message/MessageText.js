import React from 'react'
import { useSpring,useTransition, animated } from 'react-spring'

const MessageText = (props) => {
  const quote = props.quote
  let propsS = useSpring({ color: 'red', opacity: 1, from: { opacity: 0, color: 'green' } })
  console.log(propsS)
  // return <animated.div style={propsS}>{quote}</animated.div>
  const transitions = useTransition(quote, null, {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
})
return transitions.map(({ item, key, props }) => (
  <animated.div style={props}>{item}</animated.div>
))
}

export default MessageText
