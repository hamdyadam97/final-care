 import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import logo from '../image/logo.jpg';
import { Link } from 'react-router-dom';
import axios from "axios";


function FormUser() {

    let access_token = localStorage.getItem('access_token')
    const validate = values => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Required';
        
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 0) {
            errors.password = 'Must be 8 characters ';
        }

        return errors;
    };
    const [isShown, setIsSHown] = useState(false);
    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };

    const [errors, setErrors] = useState({
        validateErr: null,
      
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            axios
        .post(" https://care-ap.herokuapp.com/signin/", {
            username: values.username,
            password: values.password,
        })
        .then((res) => {
            console.log(res)
            localStorage.setItem('doc',res.data.doc)
            
            console.log(res.data.doc)
            localStorage.setItem('user', values.username)
            let asd = localStorage.getItem('user')
            
            console.log(asd)
            let name = localStorage.getItem('user')
            console.log(name)
            window.location.href =`/AllDoctors`

            
        })
        .catch((err) => {
          
                setErrors({
                    ...errors,
                    validateErr:
                    err.response.data.errors

                })
               
                    
                
           
        });
       
        console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
        },
    });
    return (
 <>

 <section  style={{backgroundColor: "#01446E" }}>
 <div className="container py-5 h-100">
     <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
         <div className="card" style={{ borderRadius: "1rem" }}>
         <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src={logo}
                       alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", width: "502p", height: '753px' }} />
                 </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
        <div className="card-body p-4 p-lg-5 text-black">

            <form onSubmit={formik.handleSubmit}>


                <h1 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px;" , color:'#01446E'}}>LogIn Your Account</h1>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example17">User Name</label>
                    <input type="text" id="form2Example17" className="form-control form-control-lg" 
                    placeholder="Please enter your Name"
                     name="username"
                     onChange={formik.handleChange}
                     value={formik.values.username}
                    />
                </div>

                {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                    <input type={isShown ? "text" : "password"}
                     id="form2Example27" className="form-control form-control-lg"
                     placeholder="Please enter your Password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />

                </div>
                {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                
                <div className="form-outline mb-4">
                <label htmlFor="form-check-label" className="form-label">Show Password</label>
                    <input
                        id="form-check-label"
                        type="checkbox"
                        className="form-check-input"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                    <p className="text-danger"> {errors.validateErr} </p>

                  </div>

                <div className="pt-1 mb-4">
                <button type="submit" className="btn btn-info"
                    disabled={formik.errors.email || formik.errors.password}>Login</button>
                </div>

                <a  href="#!" style={{ color: "#393f81;" }}>Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{ color: " #393f81" }}>Don't have an account? <Link to="/signup"
                    style={{ color: "#393f81;" }}>Register here</Link></p>
                
            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </section>
           
        </>
    );
}

export default FormUser;