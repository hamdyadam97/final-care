import React from 'react';
import { useState } from 'react';
import logo2 from '../image/signup.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../style.css"
import axios from "axios";
function FormUser() {

    const [userData, setUserData] = useState({

        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        doctorcheck: ""

    })


    const [errors, setErrors] = useState({
        first_nameErr: null,
        last_nameErr: null,
        usernameErr: null,
        emailErr: null,
        passwordErr: null,
        password2Err: null,
        doctorcheckErr: null
    })

    const changeData = (e) => {
        if (e.target.name === "first_name") {
            setUserData({
                ...userData,
                first_name: e.target.value
            })

            setErrors({
                ...errors,
                first_nameErr:
                    e.target.value.length === 0 ?
                        "this field is Required" :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "empty " :
                            null

            })
        }

        if (e.target.name === "last_name") {
            setUserData({
                ...userData,
                last_name: e.target.value
            })

            setErrors({
                ...errors,
                last_nameErr:
                    e.target.value.length === 0 ?
                        "this field is Required" :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "empty " :
                            null

            })
        }

        if (e.target.name === "email") {

            setUserData({
                ...userData,
                email: e.target.value
            })

            setErrors({
                ...errors,
                emailErr:
                    e.target.value.length === 0 ?
                        "This Field Required" :
                        !(/\S+@\S+\.\S+/.test(e.target.value)) ?
                            "You have entered an invalid email address!" : null

            })
        }
        if (e.target.name === "username") {
            setUserData({
                ...userData,
                username: e.target.value
            })

            setErrors({
                ...errors,
                usernameErr:
                    e.target.value.length === 0 ?
                        "This Field Required" :
                        e.target.value.indexOf(' ') >= 0 ?
                            "Must No space" : null

            })

        }
        if (e.target.name === "password") {
            var regpassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

            setUserData({
                ...userData,
                password: e.target.value
            })


            setErrors({
                passwordErr:
                    e.target.value.length === 0 ?
                        "Field Required" :
                        !(regpassword.test(e.target.value)) ?
                            "Must 8 char and contain capital and small and special char" : null
            })
        }



        if (e.target.name === "confirm_password") {
            setUserData({
                ...userData,
                password2: e.target.value
            })


            setErrors({
                password2Err:
                    e.target.value.length === 0 ?
                        "field required" :
                        e.target.value !== userData.password ?
                            "Dont match " : null
            })
        }


    }

    const [gender, setGender] = useState();

    const handleChange = (e) => {
        setGender(e.target.value)
        
        e.preventDefault();
        axios
            .post(" https://care-ap.herokuapp.com/signup/", {
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userData.email,
                username: userData.username,
                password: userData.password,
                password2: userData.password2,
                doctorcheck: userData.doctorcheck

            })
            .then((res) => {
                console.log(res)

                localStorage.setItem('user', userData.username)  
                let name = localStorage.getItem('user')
                console.log(name)

                if (e.target.value === "doctor") {
                    localStorage.setItem('val',e.target.value)
                    window.location.href =`/confirmemail`

                }
                else {
                    localStorage.setItem('val',e.target.value)
                    window.location.href = '/confirmemail'
        
                }
                setUserData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    username: "",
                    password: "",
                    password2: "",
                    doctorcheck: ''

                });

               
               
            })
            .catch((err) => {
                console.log(err.response.data)
                if (err.response.data.email) {

                    setErrors({
                        ...errors,
                        emailErr:
                            "email alreay exist"
                    })
                    console.log(errors)
                }
                if (err.response.data.username) {

                    setErrors({
                        ...errors,
                        usernameErr:
                            "username alreay exist"

                    })
                    console.log(errors.usernameErr)
                }

            });
    }
    return (
        <>

            <section style={{ backgroundColor: "#01446E" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={logo2}
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", width: "502p", height: '753px' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form >

                                                <h1 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px;", color: '#01446E' }}>SignUp Your Account</h1>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example17">First Name</label>
                                                    <input type="text"
                                                        className=
                                                        {`form-control ${errors.first_nameErr ? "border-danger" : "border-success"}`}
                                                        placeholder="Please enter your First Name"
                                                        value={userData.first_name}
                                                        onChange={(e) => changeData(e)}
                                                        name="first_name"
                                                    />
                                                    <p className="text-danger"> {errors.first_nameErr} </p>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example17">Last Name</label>
                                                    <input type="text"
                                                        className=
                                                        {`form-control ${errors.last_nameErr ? "border-danger" : "border-success"}`}
                                                        placeholder="Please enter your Last Name"
                                                        value={userData.last_name}
                                                        onChange={(e) => changeData(e)}
                                                        name="last_name"
                                                    />
                                                    <p className="text-danger"> {errors.last_nameErr} </p>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example17">User Name</label>
                                                    <input type="text"
                                                        className=
                                                        {`form-control ${errors.usernameErr ? "border-danger" : "border-success"}`}
                                                        placeholder="Please enter your User Name"
                                                        value={userData.username}
                                                        onChange={(e) => changeData(e)}
                                                        name="username"
                                                    />
                                                    <p className="text-danger"> {errors.usernameErr} </p>
                                                </div>


                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Email</label>
                                                    <input type="text"
                                                        className={`form-control  
                        ${errors.emailErr ? "border-danger" : "border-success"}`}
                                                        placeholder="Please enter your Email"
                                                        value={userData.email}
                                                        onChange={(e) => changeData(e)}
                                                        name="email"
                                                    />
                                                    <p className="text-danger"> {errors.emailErr} </p>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    <input type="password"
                                                        className={`form-control  
                        ${errors.passwordErr ? "border-danger" : "border-success"}`}
                                                        placeholder="Please enter your Password"
                                                        value={userData.password}
                                                        onChange={(e) => changeData(e)}
                                                        name="password"
                                                    />
                                                    <p className="text-danger"> {errors.passwordErr} </p>
                                                </div>


                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        className={`form-control  
                        ${errors.password2Err ? "border-danger" : "border-success"}`}
                                                        placeholder="Please Confirm your password"
                                                        value={userData.password2}
                                                        onChange={(e) => changeData(e)}
                                                        name="confirm_password"
                                                    />
                                                    <p className="text-danger"> {errors.password2Err} </p>
                                                </div>
                                                {/* <div className="d-flex">
                                                    <div className="form-check form-check-inline">
                                                        <input 
                                                        className="form-check-input" 
                                                        type="radio" name="doctor"
                                                         value="doctor"
                                                        checked={gender === 'doctor'}
                                                        onChange={ handleChange}  />
                                                        <label className="form-check-label" htmlFor="inlineRadio1" style={{ fontSize: '20px' }}>Doctor</label>
                                                    </div> */}
                                                {/* <div className="form-check form-check-inline">
                                                        <input 
                                                        className="form-check-input" 
                                                        type="radio" 
                                                        id="filter-1"
                                                        name="patient" 
                                                        value="patient"
                                                        checked={gender === 'patient'}
                                                        onChange={handleChange} />
                                                        <label className="form-check-label text-nowrap" htmlFor="inlineRadio2" style={{ fontSize: '20px' }}>Patient</label>
                                                    </div>

                                                </div> */}
                                                <br></br>
                                             
                                                    <div className="pt-1 mb-4" >
                                                        <button type="submit" className="btn btn-primary" value="doctor"
                                                            onClick={handleChange}
                                                            disabled={errors.nameErr || errors.usernameErr || errors.emailErr || errors.passwordErr || errors.password2Err}>
                                                            Doctor

                                                        </button> 
                                                        <button type="submit" className="btn btn-primary" value="patient" style={{marginLeft:'30px'}}
                                                            onClick={handleChange}
                                                            disabled={errors.nameErr || errors.usernameErr || errors.emailErr || errors.passwordErr || errors.password2Err}>
                                                            Patient

                                                        </button>
                                                    </div>

                                                    <div className="pt-1 mb-4" >
                                                        
                                                    </div>
                                               

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