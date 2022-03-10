import React, { useState } from 'react'
import { Outlet, useNavigate,Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
  
  return (
    <>
      {
        props.islogin ?
          <Outlet /> : <Navigate to="/signin" />
      }
    </>
  )
}

export default PrivateRoute