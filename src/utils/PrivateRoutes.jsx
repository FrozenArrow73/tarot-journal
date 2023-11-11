import React, {useContext} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../store/AuthContext'

function PrivateRoutes() {
    const authContext = useContext(AuthContext)

  return (
    authContext.authenticate() ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes
