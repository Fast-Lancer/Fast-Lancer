import { useState } from 'react'
import Title from '../Title/Title.jsx'
import Button from '../Button/Button.jsx'
import styles from './AuthForm.module.css'

const demoEmail = 'demo@account.com'
const demoPassword = 'password'

export default function AuthForm({
  isSigningUp,
  handleSubmit,
  toggleIsSigningUp,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const authText = isSigningUp ? 'Sign Up' : 'Log In'
  const antiAuthText = isSigningUp ? 'Log In' : 'Sign Up'

  return (
    <div className={styles.authContent}>
      <Title pageTitle='auth' pageHeader={authText}/>
      <main>
        <fieldset>
          <label>
            Email:
            <input value={email} onChange={({ target }) => setEmail(target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
          </label>
          <Button handleClick={() => handleSubmit(email, password)} buttonText={authText} />
          { !isSigningUp && <Button handleClick={() => handleSubmit(demoEmail, demoPassword)} buttonText='Log In With Demo Account' />} 
          <div className={styles.linkButton} onClick={toggleIsSigningUp}>
            {isSigningUp ? 'Log In Instead' : 'Sign Up Instead'}
          </div>
        </fieldset>
      </main>
    </div>
  )
}
