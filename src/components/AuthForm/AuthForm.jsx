import { useState } from 'react'
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

  return (
    <div>
      <h1>{AuthText}</h1>
      <label>
        Email:
        <input value={email} onChange={({ target }) => setEmail(target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      </label>
      <Button handleClick={() => handleSubmit(email, password)} buttonText={AuthText} />
      <div className={styles.linkButton} onClick={toggleIsSigningUp}>
        {isSigningUp ? 'Log In Instead' : 'Sign Up Instead'}
      </div>
    </div>
  )
}
