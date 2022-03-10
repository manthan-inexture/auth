import React from 'react'

const Dashboard = () => {

  const username = JSON.parse(atob(localStorage.getItem("user")));

  return (
    <div><h1 className='text-center'>Welcome  {username.username} </h1></div>
  )
}

export default Dashboard