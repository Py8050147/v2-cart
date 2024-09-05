import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className=' container min-h-full flex justify-center mx-auto'>
        
       <div className=' border border-black mt-56 p-10'>
       <h3 className='items-center w-full text-xl flex  justify-center font-extrabold'>Login</h3>
      <form className=' flex flex-col space-y-2' >
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
        <p>Create an Account <Link to='/signup' className=' border border-b-red-800 text-red-800 capitalize font-semibold'>Signup</Link></p>


      </form>

       </div>
    </div>
  )
}

export default Login
