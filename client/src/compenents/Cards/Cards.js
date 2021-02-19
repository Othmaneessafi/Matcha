import React from 'react'
import { useSpring, animated } from "react-spring";
import "./Cards.css";

const calc = (x, y) => [0, 0, 1.1];
const trans = (x, y, s) => ` scale(${s})`;

export default function Cards({image}) {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 150, friction: 50 },
      }));
    return (
        <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
          backgroundImage: `url(${image})`,
          margin: 10
        }}
      >
        <h1 className="cardUsername" >Username, Age</h1>
        <p className="CardDescrtion">Description</p>
      </animated.div>
  );
}
