import React from 'react'

function Header() {
  return (
    <div className='container max-w-4xl md:max-w-full px-20 py-10'>
      <div className=' flex align-middle justify-between '>
        <div>logo</div>
        <div>
          <ul className='flex align-middle justify-between space-x-8 cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Sign-in</li>
            <li>Sign-up</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Header
