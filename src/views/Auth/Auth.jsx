import React, { useEffect, useState } from 'react'
import { signInUser, signUpUser } from '../../services/users.js'
import { useUser } from '../../context/UserContext.jsx'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import AuthForm from '../../components/AuthForm/AuthForm.jsx'

export default function Auth() {
  const history = useHistory()
  const location = useLocation()
  const [errorMessage, setErrorMessage] = useState('')
  const [isSigningUp, setIsSigningUp] = useState(location.pathname === '/signup')
  const { setUser } = useUser()
  const wasRedirected = location.search === '?redirect=true'

  useEffect(() => {
    setIsSigningUp(location.pathname === '/signup')
  }, [location])

  async function handleSubmit(email, password) {
    setErrorMessage('')
    if(isSigningUp) {
      try {
        const user = await signUpUser(email, password)
        setUser(user)
        if(wasRedirected) {
          history.goBack()
        } else {
          // TODO: change this if we don't end up using /projects
          history.push('/projects')
        }
      } catch(e) {
        setErrorMessage(e.message)
      }
    } else {
      try {
        const user = await signInUser(email, password)
        setUser(user)
        if(wasRedirected) {
          history.goBack()
        } else {
          // TODO: change this if we don't end up using /projects
          history.push('/projects')
        }
      } catch(e) {
        setErrorMessage(e.message)
      }
    }
  }

  function toggleIsSigningUp() {
    setErrorMessage('')
    setIsSigningUp(prev => !prev)
  }

  // TODO: pick ideal wording for text
  return (
    <div className='test'>
      {!!wasRedirected ? <div>Please {isSigningUp ? 'Signup' : 'Login'} to Continue</div> : <></>}
      {!!errorMessage ? <div>{errorMessage}</div> : <></>}
      <AuthForm {...{ isSigningUp, handleSubmit, toggleIsSigningUp }} />
    </div>
  )
}
