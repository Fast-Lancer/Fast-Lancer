import Button from '../Button/Button.jsx'
import styles from './AuthForm.module.css'

export default function AuthForm({
  isSigningUp,
  handleSubmit,
  toggleIsSigningUp,
}) {
  const AuthText = isSigningUp ? 'Sign Up' : 'Log In'

  return (
    <div>
      <h1>{AuthText}</h1>
      <label htmlFor="username">User Name</label>
      <input id="username" type="text" name="username" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" />
      <Button handleClick={handleSubmit} buttonText={AuthText} />
      <div className={styles.linkButton} onClick={toggleIsSigningUp}>
        {isSigningUp ? 'LogIn Instead' : 'SignUp Instead'}
      </div>
    </div>
  )
}
