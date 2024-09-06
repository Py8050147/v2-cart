import {useEffect, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Login() {
  const navigate = useNavigate()
  const {user, loginUser} = useAuth()

  const loginform = useRef(null)

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [navigate, user])

  const handlesubmit = (e) => {
    e.preventDefault()
    const email = loginform.current.email.value
    const password = loginform.current.password.value
    
    const userInfo  = {email, password}

    loginUser(userInfo)
  }

  return (
    <div className=' container min-h-full flex justify-center mx-auto'>
        
       <div className=' border border-black mt-56 p-10'>
       <h3 className='items-center w-full text-xl flex  justify-center font-extrabold'>Login</h3>
      <form className=' flex flex-col space-y-2' onSubmit={handlesubmit} ref={loginform}>
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
