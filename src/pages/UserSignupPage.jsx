import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserSignupPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName, lastName, email, password})
      })

      const parsed = await response.json();
      
      const loginResponse = await fetch('http://localhost:5005/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      })

      const parsedLogin = await loginResponse.json();
      //storeToken(parsedLogin.authToken)

    } catch (error) {
      setErrorMessage(error.message)
    }

  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input 
          type='text' 
          required
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <label>Last Name</label>
        <input 
          type='text' 
          required
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
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
        <button type='submit'>Login</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default UserSignupPage