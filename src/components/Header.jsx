import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Header() {
  const navigate = useNavigate()
  const {user, logoutUser} = useAuth()
  const logoutClick = () => {
    navigate('/login')
  }
  return (
    <div className='container max-w-4xl md:max-w-full px-20 py-10'>
      <div className=' flex align-middle justify-between '>
        <div>logo</div>
        {
          user ? (<div>
          <ul className='flex align-middle justify-between space-x-8 cursor-pointer'>
            <li><Link to='/'>
            Home
            </Link></li>
            <li>About</li>
            <button type="button" onClick={logoutClick}>logout</button>
          </ul>
        </div>):(
          <Link to='/login'>login</Link>
        )
        }
        
      </div>
      
    </div>
  )
}

export default Header
