import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Praviteroutes from './utils/Praviteroutes'
//  import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// import Header from './components/Header'

// import About from './components/About'
// import Login  from './pages/Login'
// import Signup from './pages/Signup'
// import { AuthProvider } from './utils/AuthContext'

// const router = createBrowserRouter([
//   {
//     // path: '/praviteroute',
//     element: (
//       <Praviteroutes />
//     ),
//     children:[
//       {
//         path: '/',
//         element: (
//           <Header />
//         )
//       },
//       {
//         path: '/about',
//         element:(
//           <About />
//         )
//       },
//     ]
//   },
//   {
//     path: '/login',
//     element:(
//       <Login />
//     )
//   },
//   {
//     path: '/signup',
//     element:(
//       <Signup />
//     )
//   }
  
//  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
