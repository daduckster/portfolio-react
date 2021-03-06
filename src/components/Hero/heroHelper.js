import styles from "./Hero.module.scss";

function pickRandomNumberInInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function changingClassFactory(cube) {
  cube.classList.forEach((classItem) => {
    if (classItem.includes('shape')) {
      cube.classList.add(styles.animOut)
      setTimeout(() => {
        cube.classList.remove(classItem)
        cube.classList.remove(styles.animOut)
        cube.classList.add(styles[createRandomShapeClass()]);
        cube.classList.add(styles.animIn)
        setTimeout(() => {
          cube.classList.remove(styles.animIn)
        }, 600)
      }, 300)

    }
  })
}

function changeRandomClass() {
  const randomCubeMobile = document.querySelector(`.cube${pickRandomNumberInInterval(1, 14)}`)
  const randomCubeTablet = document.querySelector(`.cube${pickRandomNumberInInterval(15, 26)}`)
  const randomCubeDesktop = document.querySelector(`.cube${pickRandomNumberInInterval(27, 33)}`)

  changingClassFactory(randomCubeMobile)
  changingClassFactory(randomCubeTablet)
  changingClassFactory(randomCubeDesktop)
}


export function changeRandomCubes() {
  return setInterval(() => {
    changeRandomClass()
  }, 1800)
}

export function handleClick(e) {
  const classes = e.target.classList;
  classes.forEach((classItem) => {
    if (classItem.includes('shape')) {
      e.target.classList.add(styles.animOut)
      setTimeout(() => {
        e.target.classList.remove(classItem);
        e.target.classList.remove(styles.animOut)
        e.target.classList.add(styles[createRandomShapeClass()]);
        e.target.classList.add(styles.animIn)
        setTimeout(() => {
          e.target.classList.remove(styles.animIn)
        }, 600)
      }, 300)
    }
  })
}

export function createRandomShapeClass() {
  let theRandomNumber = Math.floor(Math.random() * 48) + 1;
  return `shape${theRandomNumber}`
}



