import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Signup() {
  const registerForm = useRef(null)
  const {registerUser} = useAuth()

  const handlesubmit = (e) => {
    e.preventDefault()
    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password = registerForm.current.password.value

    const userInfo = {name, email, password}

    registerUser(userInfo)
}
  return (
        <div className=' container min-h-full flex justify-center mx-auto'>
        <div className=' border border-black mt-32 p-10 rounded-md'>
        <h3 className='items-center w-full text-xl flex  justify-center font-extrabold'>Signup</h3>
       <form className=' flex flex-col space-y-2' onSubmit={handlesubmit}  ref={registerForm} >
       <label >Name</label>
         <input
          type="text"
          placeholder="Enter your Name"
          required
          className=' w-[250px] border border-gray-500 px-4 py-2 outline-none'
           />
 
           <label >Email</label>
         <input
          type="text"
          placeholder="Enter your Email"
          required
          className=' w-[250px] border border-gray-500 px-4 py-2 outline-none'
           />
 
       <label>Password</label>
         <input
          type="text"
          placeholder="Enter your Password"
          required
          className=' w-[250px] border border-gray-500 px-4 py-2 outline-none'
           />
 
         <div className=' flex align-middle justify-center'>
             <button type="button" className='mt-5 w-full border border-black px-3 py-2 font-bold bg-blue-800 text-white'>Submit</button>
         </div>
         <p>Already create Account <Link to='/login' className=' border border-b-red-800 text-red-800 capitalize font-semibold'>Login</Link></p>
       </form>
 
        </div>
     </div>
  )
}

export default Signup
