import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field  } from 'formik';
import * as Yup from 'yup';
const Signup = () => {

  let navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().required('Required*').email("it should be email"),
    username: Yup.string().required('Requiredasdasdas*'),
    phone: Yup.string().required("phone number is required").min(10, "mimun 10 sigit"),
    password: Yup.string().required('Password is required').min(8,"minumum 8 character" ),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    state: Yup.string().required("Sate is required"),
    city: Yup.string().required("city is required"),
  });
  return (
    <div>
      <h1 className='text-center'>Signup</h1>
      <div className="row justify-content-md-center mt-5">
        <div className="col-md-6">
          <Formik
            initialValues={{
              email: '',
              username: '',
              password: '',
              cpassword: '',
              phone: '',
              city: '',
              state:'',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log(values);
              localStorage.setItem("user", btoa(JSON.stringify(values)));
              navigate("/signin")
            }}
          >
            {({ errors }) => (
              <Form>
                <div className="mb-3">
                  <Field name="email" placeholder="Email" className="form-control" />
                  <div id="emailHelp" className="form-text text-danger">{errors.email}</div>
                </div>
                <div className="mb-3">
                  <Field name="username" placeholder="Username" className="form-control" />
                  <div id="emailHelp" className="form-text text-danger">{errors.username}</div>
                </div>
                <div className="mb-3">
                  <Field name="password" placeholder="Password" className="form-control"  />
                  <div id="emailHelp" className="form-text text-danger">{errors.password}</div>
                </div>
                <div className="mb-3">
                  <Field name="cpassword" placeholder="Confirm password" className="form-control"  />
                  <div id="emailHelp" className="form-text text-danger">{errors.cpassword}</div>
                </div>
                <div className="mb-3">
                  <Field name="phone" placeholder="Phone" className="form-control"  />
                  <div id="emailHelp" className="form-text text-danger">{errors.phone}</div>
                </div>
                <div className="mb-3">
                  <Field name="city" placeholder="City" className="form-control"  />
                  <div id="emailHelp" className="form-text text-danger">{errors.city}</div>
                </div>
                <div className="mb-3">
                  <Field name="state" placeholder="State" className="form-control"  />
                  <div id="emailHelp" className="form-text text-danger">{errors.state}</div>
                </div>
                <button className='btn btn-success' type="submit">Submit</button>
              </Form>
            )}
          </Formik>
          <div className='text-primary text-end'><Link to="/signin" >Already Sign-up Login here ...</Link></div>
        </div>
      </div>

    </div>
  )
}
export default Signup