
import '../styling/patientform.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';



function PatientUpdate() {
    let namedata = localStorage.getItem('user')

    const [userimage,setUserImage] = useState()
    const [userData, setUserData] = useState({
        user: "",
        age: "",
        history: "",
        mobile: "",
       

        // slug: "",
    })
    const [errors, setErrors] = useState({
        userErr: null,
        ageErr: null,
        historyErr: null,
        mobileErr: null,
        validation:null
        


    })

    const changeData = (e) => {
       
        if (e.target.name === 'age') {
            console.log('dddddddddddddddddddddd')
            setUserData({
                ...userData,
                age: e.target.value
            })

            setErrors({
                ...errors,
                ageErr: e.target.value.length === 0 ?
                "This Field Is Requied" :  e.target.value > 90 ?
                'Invalid Number' :null
            })
        }


        if (e.target.name === 'history') {
            setUserData({
                ...userData,
                history: e.target.value
            })

            setErrors({
                ...errors,
                historyErr: e.target.value.length === 0 ?
                "This Field Is Requied" : e.target.value.length < 50 ?
                'You must enter 50 char' : null
            })
        }

        if (e.target.name === 'mobile') {
            setUserData({
                ...userData,
                mobile: e.target.value
            })

            setErrors({
                ...errors,
                mobileErr: e.target.value.length < 11 || e.target.value.length >11 ?
                "This shoud have 11 numbers" :
                null
            })
        }
       


    }
    
    
    const submitData = async (e) => {
    const uploadData = new FormData()
    console.log('jjjjjjjjjjjjj')
    uploadData.append('user', namedata);
    uploadData.append('age', userData.age);
    uploadData.append('mobile', userData.mobile)
    uploadData.append('history', userData.history)
    uploadData.append('image', userimage )
    console.log(uploadData)

        
        e.preventDefault();

        axios({
        method: 'PUT',
        url:'https://care-ap.herokuapp.com/patient/updateprofile/',
        data: uploadData
    })


        .then((res) => {
            window.location.href = `/patientprofile/${namedata}`
            console.log(res)
            setUserData({
                age: '',
                history: '',
                mobile: '',
                image: ''
             

            });
            console.log(namedata)
            // window.location.href ='/login'

        })
            
            .catch((err) => {
                setErrors({
                    ...errors,
                    validation: err.response.data.msg
                })

            });
    }



    return (
        <section style={{ backgroundColor: "#BCD2E9" }}>
            <div className="container py-5 h-100">
                <div className="container rounded bg-white mt-5 mb-5" >
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5" width="150px"
                                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt='NO img' />
                                <span className="font-weight-bold">Ahmed Hassan</span>
                                <span className="text-black-50">Ahmed@mail.com.my</span><span> </span></div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Update</h4>
                                </div>

                                <form onSubmit={(e)=> submitData(e)}>
                                    <div className="col-md-12">
                                        <label className="labels">Age</label>
                                        <input type="text"
                                            className=
                                            {`form-control ${errors.ageErr ? "border-danger" : "border-success"}`}
                                            placeholder="Please enter your Age"
                                            value={userData.age}
                                            onChange={(e) => changeData(e)}
                                            name="age" />
                                        <p className="text-danger"> {errors.ageErr} </p>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">History</label>
                                        <input type="text"
                                            className=
                                            {`form-control ${errors.historyErr ? "border-danger" : "border-success"}`}
                                            placeholder="Please enter your Medical History"
                                            value={userData.history}
                                            onChange={(e) => changeData(e)}
                                            name="history" />
                                        <p className="text-danger"> {errors.historyErr} </p>
                                    </div>


                                    <div className="col-md-12">
                                        <label className="labels">Mobile Phone</label>
                                        <input type="text"
                                            className=
                                            {`form-control ${errors.mobileErr ? "border-danger" : "border-success"}`}
                                            placeholder="Please enter your Mobile Phone"
                                            value={userData.mobile}
                                            onChange={(e) => changeData(e)}
                                            name="mobile" />
                                        <p className="text-danger"> {errors.mobileErr} </p>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">Upload Your Image</label>
                                        <Form.Control type="file" placeholder="upload Image" name="image"
                                            // value={userData.image}
                                            onChange={(evt) => setUserImage(evt.target.files[0])}
                                            />
                                        <br />
                                    </div>

                                    <p className="text-danger" style={{fontSize:'20px'}}> {errors.validation} </p>

                                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button"
                                        type="submit"

                                        disabled={errors.ageErr || errors.mobileErr || errors.historyErr}
                                    >Update Profile</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default PatientUpdate