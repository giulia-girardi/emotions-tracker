import React from 'react'
import { Link } from 'react-router-dom'
import {UserAuthContext} from '../contexts/user.auth.context'
import {useContext} from 'react'

function Navbar() {
  const { logoutUser, user } = useContext(UserAuthContext);

  return (
    <div>
        <Link to="/">Home</Link>
        {user ? 
          <button onClick={logoutUser}>
            Logout
          </button>
        : 
        <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>}
    </div>
  )
}

export default Navbar