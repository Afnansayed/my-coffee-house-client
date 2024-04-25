import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://my-coffe-house-server.vercel.app/coffee')
  }, {
    path: '/addCoffee',
    element: <AddCoffee />
  }, {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://my-coffe-house-server.vercel.app/coffee/${params.id}`)
  }
  , {
    path: '/signIn',
    element: <SignIn />
  }
  , {
    path: '/signUp',
    element: <SignUp />
  },{
    path:'/users',
    element: <Users/>,
    loader:()=> fetch('https://my-coffe-house-server.vercel.app/users'),
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
