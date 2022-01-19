import { Link, useLocation } from 'react-router-dom'
import FastLancerLogo from '../../assets/FastLancerLogo.svg'
import { useUser } from '../../context/UserContext.jsx'
import styles from './Header.module.css'

export default function Header() {
  const { user, setUser } = useUser()
  const location = useLocation()
  const currentPage = location.pathname

  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <img src={FastLancerLogo} alt="fast lancer logo" />
      </div>
      <nav>
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
      <div className={styles.hamburger}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  )
}
