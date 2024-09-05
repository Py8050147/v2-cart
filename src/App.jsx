

 import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Header from './components/Header'
// import {Products} from './components/Products.jsx'

import { Provider } from 'react-redux'
import store from './store/store'
import About from './components/About'
import Login  from './pages/Login'
import Signup from './pages/Signup'
 const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Header />
    )
  },
  {
    path: '/about',
    element:(
      <About />
    )
  },
  {
    path: '/login',
    element:(
      <Login />
    )
  },
  {
    path: '/signup',
    element:(
      <Signup />
    )
  }
  
 ])

function App() {


  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </>
  )
}

export default App
