import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './index.css'

const Card = () => (
  <div className="user-container">
    <div className="avatar-container">
      <div className="avatar"></div>
    </div>
    <div className="user-info">
      Tankerxyz
      <div className="user-address">{
        `
        tankerxyz1@gmail.com
        @tankerxyz
        #tankerxyz
        `
      }
      </div>
    </div>
  </div>
);

export default function CardFlipper() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div className="card-container" onClick={() => set(state => !state)}>
      <animated.div
        class="card back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <Card />
      </animated.div>
      <animated.div class="card front" style={{ opacity: opacity.interpolate(o => o <= 0.5 ? 0 : o), transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <Card />
      </animated.div>
    </div>
  )
}
