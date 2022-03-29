import styles from "./Hero.module.scss";

export function createRandomShapeClass() {
  let theRandomNumber = Math.floor(Math.random() * 50) + 1;
  return `shape${theRandomNumber}`
}

function pickRandomNumberInInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function changingClassFactory(cube) {
  cube.classList.forEach((classItem) => {
    if (classItem.includes('shape')) {
      cube.classList.remove(classItem);
      cube.classList.add(styles[createRandomShapeClass()]);
    }
  })
}

function changeRandomMobileClass() {
  const randomCubeMobile = document.querySelector(`.cube${pickRandomNumberInInterval(1, 14)}`)
  changingClassFactory(randomCubeMobile)
}

function changeRandomTabletClass() {
  const randomCubeTablet = document.querySelector(`.cube${pickRandomNumberInInterval(15, 26)}`)
  changingClassFactory(randomCubeTablet)
}

function changeRandomDesktopClass() {
  const randomCubeDesktop = document.querySelector(`.cube${pickRandomNumberInInterval(27, 32)}`)
  changingClassFactory(randomCubeDesktop)
}


export function changeRandomCubes() {
  setInterval(() => {
    changeRandomMobileClass()
    changeRandomTabletClass()
    changeRandomDesktopClass()
  }, 3000)
}

// pick one random cube every few seconds and change it
// there are 31 cubes
// when in mobile it is only 12
// tablet it is 21 (i think)
// i need it to understand how many cubes there are on the screen
// pick a random one from these
// "How does it know how many are on the screen?"
// Maybe use screen size function?


// CLASSES:
// Mobile -> mobile
// Table -> mobile + tablet
// Desktop -> mobile + tablet + desktop

// cubes that are not shown have display none






