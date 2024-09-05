import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function About() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    ;(async() => {
     try {
      setLoading(true)
      const response = await axios('https://fakestoreapi.com/products')
      console.log(response.data)
     setProducts(response.data)
     setLoading(false)
     } catch (error) {
      setError(error)
      setLoading(false)
     }
    })()
  }, [])
  // 
  return loading ? (loading && <p>loading....</p>) : (
    <div className=' conatiner max-w-4xl md:max-w-full px-20 py-10 bg-slate-700/30'>
      <div className=' grid lg:grid-cols-3 gap-10'>
      {error && <h1>Somthing went wrong!!</h1>}
      
        {
         
          products.map((product) => (
            <div key={product.id} className='max-w-sm p-5 ring-1 ring-white shadow-lg shadow-gray-500 bg-gray-700'>
              <img src={product.image} alt={''} className='w-full h-72 object-center
              rounded-t-md' />
              <h1 className='text-lg font-bold'>{product.title}</h1>
              <p className='text-sm'>{product.description}</p>
              <h5>${product.price}</h5>
            </div>
          ))
        }
        
      </div>
      
    </div>
  )
}

export default About
