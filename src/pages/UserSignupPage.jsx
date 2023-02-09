import React from 'react'
import { Link } from 'react-router-dom'

function UserSignupPage() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>First Name</label>
        <input type='text' required></input>
        <label>Last Name</label>
        <input type='text' required></input>
        <label>Email</label>
        <input type='email' required></input>
        <label>Password</label>
        <input type='password' required></input>
        <button type='submit'>Login</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  )
}

export default UserSignupPage