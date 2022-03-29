import React, {useState, useEffect} from 'react'
import HeroCubes from "./HeroCubes";
import {changeRandomCubes} from "./heroHelper";
import styles from './Hero.module.scss';

//import styles from './Hero.module.scss';

function Hero() {
  // const [deviceType, setDeviceType] = useState('')
  //
  // let screenWidth  = useWindowSize().width;
  // let screenHeight  = useWindowSize().height;
  setTimeout(() => {
    changeRandomCubes()
  }, 100)

  return (
    <div>
      <HeroCubes />
    </div>
  )
}

export default Hero