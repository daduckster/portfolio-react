import styles from "./NavbarMobile.module.scss";

export function handleClick() {
  const hamburgerIcon = document.querySelector('.hamburgerIcon')
  const mobileMenu = document.querySelector('.mobileMenu')

  hamburgerIcon.classList.toggle(styles.active)
  mobileMenu.classList.toggle(styles.hidden)
}

export function handleCloseMenu() {
  const hamburgerIcon = document.querySelector('.hamburgerIcon')
  const mobileMenu = document.querySelector('.mobileMenu')

  hamburgerIcon.classList.remove(styles.active)
  mobileMenu.classList.add(styles.hidden)
}

export function smoothScroll(e, target = null) {
  e.preventDefault()

  let element;

  if (target !== null) {
    element = document.querySelector(target)
  } else {
    const section = e.target.getAttribute('href')
    element = document.querySelector(section)
  }

  element.scrollIntoView({
    behavior: 'smooth',
  })
}