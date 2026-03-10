import React from 'react'
import {router} from './app.routes.jsx'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/auth.context.jsx'

const App = () => {
  return (
    // <div>App</div>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App