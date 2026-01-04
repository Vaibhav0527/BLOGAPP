import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Index from './pages/Index'
import { RouteIndex, RouteProfile, RouteSignIn, RouteSignUp } from './helpers/RouteName'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
          <Route path={RouteProfile} element={<Profile />} />
        </Route> 
        <Route path={RouteSignIn} element={<SignIn />} /> 
         <Route path={RouteSignUp} element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
