import styles from './Header.module.css'

const { header } = styles

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className={header}>
      <img src={logoImg} alt="logotipo" />
    </header>
  )
}