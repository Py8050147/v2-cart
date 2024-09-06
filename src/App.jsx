import Praviteroutes from "./utils/Praviteroutes";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import {Products} from './components/Products.jsx'

import { Provider } from 'react-redux'
import store from './store/store'
import About from "./components/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import { Provider } from "react-redux";
import { AuthProvider } from './utils/AuthContext'
// const router = createBrowserRouter([
//   {
//     // path: '/praviteroute',
//     element: <Praviteroutes />,
//     children: [
//       {
//         path: "/",
//         element: <Header />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ]);

function App() {
  return (
    // // <Provider store={store}>
    //     <AuthProvider>
    //     <RouterProvider router={router} />
    //     </AuthProvider>

    //     // </Provider>
   <Provider store={store}>
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Praviteroutes />}>
            <Route path="/about" element={<About />} />
          </Route>
          </Routes>
          </AuthProvider>
    </Router>
    </Provider>
  );
}

export default App;
