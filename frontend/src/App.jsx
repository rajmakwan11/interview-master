import React from 'react'
import {router} from './app.routes.jsx'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './features/auth/auth.context.jsx'
import { InterviewProvider } from './features/interview/Interview.context.jsx'

const App = () => {
  return (
    // <div>App</div>
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router}></RouterProvider>
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App