import React, { useState } from 'react'
import { signInWithEmailAndPassword, sendSignInLinkToEmail ,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../config/firebase_config';
import {
  useNavigate,
  useLocation,
  Link,
  Navigate
} from "react-router-dom";

const SignIn = (props) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();
  
  // if (!localStorage.getItem("user")) {
  //   alert('you need to signup first');
  //   return <Navigate  to ="/signup"/>
  // }
  // const data = JSON.parse(atob(localStorage.getItem("user")))
  // console.log(data);
  const handlesubmit = () => {
    signInWithEmailAndPassword(auth, name, password)
      .then((userCredential) => {
        alert('signin succeful');
        props.setislogin(true)
       setError(null)
       navigate('/p/dashboard');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  const handlegoogle = () => {
    const googleAuthProvider = new  GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
      // alert('signin succeful');
      props.setislogin(true)
      setError(null)
      navigate('/p/dashboard');
      const user = userCredential.user;
      localStorage.setItem("user",JSON.stringify(user))
      console.log(user);
    }).catch((error) => 
    {
      alert("you are blocked by admin");
      }
    )
  }
  return (
    <div>
      <h1 className='text-center'>SignIn</h1>
      <div className="row justify-content-md-center mt-5">
        <div className="col-md-6">

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

          <button className='btn btn-success' onClick={handlesubmit}>Signin</button>
          <hr></hr>
          <button className='btn btn-primary' onClick={handlegoogle}>Sign in with google <i className="bi bi-google"></i></button>
          <div className='text-primary text-end'><Link to="/signup" >New user signup here ...</Link></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn