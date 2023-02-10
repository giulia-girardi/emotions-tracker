import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {UserAuthContext} from '../contexts/user.auth.context'

function UserLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { storeToken, setIsLoggedIn, authenticateUser} = useContext(UserAuthContext)
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try { 
      const loginResponse = await fetch('http://localhost:5005/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      })

      const parsedLogin = await loginResponse.json();
      storeToken(parsedLogin.authToken)

      if (loginResponse.status === 200) {
        setIsLoggedIn(true)
        authenticateUser()
        navigate('/dashboard')
      } else {
        setErrorMessage(parsedLogin.message)
      }

    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input 
          type='email' 
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input 
          type='password' 
          required
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>Login</button>
        <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default UserLoginPage