import './App.css';
import React,{useState,useEffect} from 'react';
import {
  Routes, Route, Link, useNavigate, Navigate,
  useLocation
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Header from './component/Header';
import SignIn from './component/SignIn';
import Signup from './component/Signup'
import PrivateRoute from './component/PrivateRoute';
import Dashboard from './component/Dashboard';
import Mail from './component/Mail';
function App() {
  const [islogin, setislogin] = useState(false)
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/")
  // }, [])

  return (
    <>
      <Header islogin={islogin} setislogin={setislogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn setislogin={setislogin}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/p' element={<PrivateRoute islogin={islogin} />} >
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes> 
    </>
  );
}

export default App;