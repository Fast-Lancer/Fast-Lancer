import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FastLancerLogo from '../../assets/FastLancerLogo.svg'
import { useUser } from '../../context/UserContext.jsx'
import styles from './Header.module.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { user, setUser } = useUser()
  const location = useLocation()
  const currentPage = location.pathname
  const barClassName = isNavOpen ? `${styles.bar} ${styles.active}` : styles.bar

  function handleHamburgerClick() {
    setIsNavOpen(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Link to='/'><img src={FastLancerLogo} alt="fast lancer logo" /></Link>
      </div>
      <nav className={isNavOpen ? styles.active : ''}>
        {currentPage === '/login' ||
          currentPage === '/signup' ||
          currentPage === '/' ? (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/clients">Clients</Link>
            <Link to="/projects">Projects</Link>
          </>
        )}
        {user.id && (
          <Link onClick={() => setUser({})} to="/login">
            Log Out
          </Link>
        )}
      </nav>
      <button className={styles.hamburger} onClick={handleHamburgerClick}>
        <span className={barClassName}></span>
        <span className={barClassName}></span>
        <span className={barClassName}></span>
      </button>
    </header>
  )
}
