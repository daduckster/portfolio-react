import styles from './ProjectsCards.module.scss'

export function showMoreText(e) {
  const moreBtn = e.target
  const p = moreBtn.parentElement
  const span = p.querySelector('.moreSpan')
  const lessBtn = p.querySelector('.lessBtn')

  moreBtn.classList.add(styles.hidden)
  span.classList.remove(styles.hidden)
  lessBtn.classList.remove(styles.hidden)
}

export function showLessText(e) {
  const lessBtn = e.target
  const p = lessBtn.parentElement
  const span = p.querySelector('.moreSpan')
  const moreBtn = p.querySelector('.moreBtn')

  lessBtn.classList.add(styles.hidden)
  span.classList.add(styles.hidden)
  moreBtn.classList.remove(styles.hidden)
}