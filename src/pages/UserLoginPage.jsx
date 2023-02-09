import React from 'react'
import { Link } from 'react-router-dom'
import UserSignupPage from './UserSignupPage'

function UserLoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type='email' required></input>
        <label>Password</label>
        <input type='password' required></input>
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
      </form>
    </div>
  )
}

export default UserLoginPage