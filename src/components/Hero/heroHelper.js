// export the array of classes(dont actually need to export i guess)
// export random class output function


// random number with range of how many shapes
// return 'shape' + number
export function createRandomShapeClass() {
  let theRandomNumber = Math.floor(Math.random() * 70) + 1;
  return `shape${theRandomNumber}`

}

