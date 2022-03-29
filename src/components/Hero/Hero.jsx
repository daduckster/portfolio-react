import React, {useState, useEffect} from 'react'
import HeroCubes from "./HeroCubes";
import {changeRandomCubes} from "./heroHelper";

function Hero() {

  useEffect(() => {
    const interval = changeRandomCubes();
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <HeroCubes />
    </div>
  )
}

export default Hero