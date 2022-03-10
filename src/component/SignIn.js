import React, { useState } from 'react'
import {
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";

const SignIn = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  let navigate = useNavigate();
  const data = JSON.parse(atob(localStorage.getItem("user")))
  // console.log(data);
  const handlesubmit = () => {
    if (data.username == name && data.password == password) {
      props.setislogin(true)  
      setError(null)
      navigate('/p/dashboard');
    } else {
      setError("Invalid username and password")
      props.setislogin(false)
    }
  }

  return (
    <div>
      <h1 className='text-center'>SignIn</h1>
      <div className="row justify-content-md-center mt-5">
        <div className="col-md-6">
          <form>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
              <div className='text-danger'>{ error}</div>
            </div>
          </div>    
      <button  className='btn btn-success' onClick={handlesubmit}>Signin</button>
            <div className='text-primary text-end'><Link to="/signup" >New user signup here ...</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn