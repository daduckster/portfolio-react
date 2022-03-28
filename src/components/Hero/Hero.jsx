import React, {useState, useEffect} from 'react'
import HeroCubes from "./HeroCubes";
import useWindowSize from "../../hooks/useWindowSize";
//import styles from './Hero.module.scss';

function Hero() {
  const [deviceType, setDeviceType] = useState('')

  let screenWidth  = useWindowSize().width;
  let screenHeight  = useWindowSize().height;

  return (
    <div>
      <HeroCubes />
    </div>
  )
}

export default Hero