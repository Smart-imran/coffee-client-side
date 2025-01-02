import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
//import AuthProvider, { AuthContext } from './providers/AuthProvider.jsx';
import Registration from './components/Registration/Registration.jsx';
import AuthProvider from './providers2/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },

  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },

  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },


  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },

  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },



]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> */}

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>


  </StrictMode>,
)
