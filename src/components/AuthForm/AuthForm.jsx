import { useState } from 'react'
import Title from '../Title/Title.jsx'
import Button from '../Button/Button.jsx'
import styles from './AuthForm.module.css'

export default function AuthForm({
  isSigningUp,
  handleSubmit,
  toggleIsSigningUp,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const AuthText = isSigningUp ? 'Sign Up' : 'Log In'
  const AntiAuthText = isSigningUp ? 'Log In' : 'Sign Up'

  return (
    <div className={styles.authContent}>
      <Title pageTitle='auth' pageHeader={AuthText} />
      <main>
        <fieldset>
          <label>
            Email:
            <input value={email} onChange={({ target }) => setEmail(target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          </label>
          <Button handleClick={() => handleSubmit(email, password)} buttonText={AuthText} />
          <div className={styles.linkButton} onClick={toggleIsSigningUp}>
            {isSigningUp ? 'Log In Instead' : 'Sign Up Instead'}
          </div>
        </fieldset>
      </main>
    </div>
  )
}
