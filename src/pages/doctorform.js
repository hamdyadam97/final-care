
import Card from 'react-bootstrap/Card';
import '../styling/History.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import '../styling/Form.css'
import docImg from '../image/Capture.PNG'
function DoctorForm() {
    let namedata = localStorage.getItem('user')
    const [userData, setUserData] = useState({
        user: "",
        bio: "",
        address: "",
        address_detail: "",
        birth_date: "",
        gender: "",
        doctor: "",
        specialist_doctor: "",
        price: "",
        from_of_work: "",
        to_of_work: "",

        day1_of_work: "",
        day2_of_work: "",
        day3_of_work: "",
        mobile: "",
        facebook: "",
        google: "",
        twitter: "",

    })
    const [image, setimage] = useState()
    const [errors, setErrors] = useState({
        userErr: null,
        bioErr: null,
        addressErr: null,
        address_detailErr: null,
        birth_dateErr: null,
        genderErr: null,
        doctorErr: null,
        specialist_doctorErr: null,
        priceErr: null,
        from_of_workErr: null,
        to_of_workErr: null,

        day1_of_workErr: null,
        day2_of_workErr: null,
        day3_of_workErr: null,
        mobileErr: null,
        facebookErr: null,
        googleErr: null,
        twitterErr: null,
        validation:null


    })

    const changeData = (e) => {
        if (e.target.name === 'user') {
            setUserData({
                ...userData,
                user: e.target.value
            })

            setErrors({
                ...errors,
                userErr: e.target.value.length === 0 ?
                    'this filed is empty' :
                    null
            })
        }
        if (e.target.name === 'bio') {
            setUserData({
                ...userData,
                bio: e.target.value
            })

            setErrors({
                ...errors,
                bioErr: e.target.value.length < 50 ?
                    "your bio must have 50 charachter or more" :
                    null
            })
        }
        if (e.target.name === 'price') {
            setUserData({
                ...userData,
                price: e.target.value
            })

            setErrors({
                ...errors,
                priceErr: e.target.value.length === 0 ?
                    "you should enter price" : e.target.value >500 ?
                    'Price Must Not Greater Than 500 ': null
            })
        }
        if (e.target.name === 'from_of_work') {
            setUserData({
                ...userData,
                from_of_work: e.target.value
            })

            setErrors({
                ...errors,
                from_of_workErr: e.target.value.length === 0 ?
                    "This Field Required" : e.target.value > 0 || e.target.value < 23 ?
                     null: 'you should enter hours between 0 am to 24am'
            })
        }
        if (e.target.name === 'to_of_work') {
            setUserData({
                ...userData,
                to_of_work: e.target.value
            })

            setErrors({
                ...errors,
                from_of_workErr: e.target.value.length === 0 ?
                    "This Field Required" : e.target.value > 0 || e.target.value < 23 ?
                     null: 'you should enter hours between 0 am to 24am'
            })
        }
        if (e.target.name === 'address') {
            setUserData({
                ...userData,
                address: e.target.value
            })

            setErrors({
                ...errors,
                addressErr: e.target.value.length === 0 ?
                    "This field is empty" :
                    null
            })
        }
        if (e.target.name === 'address_detail') {
            setUserData({
                ...userData,
                address_detail: e.target.value
            })

            setErrors({
                ...errors,
                address_detailErr: e.target.value.length === 0 ?
                    "This field is empty" :  e.target.value.length < 50  ?
                    'This Field Must Be 50 char': null
            })
        }

        if (e.target.name === 'birth_date') {
            setUserData({
                ...userData,
                birth_date: e.target.value
            })

            setErrors({
                ...errors,
                birth_dateErr: e.target.value.length === 0 ?
                    "This field is empty" :
                    null
            })
        }
        if (e.target.name === 'gender') {
            setUserData({
                ...userData,
                gender: e.target.value,
            })

            setErrors({
                ...errors,
                genderErr: e.target.value.length === 0 ?
                    "This field is empty" :
                    null
            })
        }
        if (e.target.name === 'doctor') {
            setUserData({
                ...userData,
                doctor: e.target.value
            })

            setErrors({
                ...errors,
                doctorErr: e.target.value === 0 ?
                    "This field is empty" :
                    null
            })
        }
        if (e.target.name === 'specialist_doctor') {
            setUserData({
                ...userData,
                specialist_doctor: e.target.value
            })

            setErrors({
                ...errors,
                specialist_doctorErr: e.target.value.length === 0 ?
                    "this field is empty" :
                    null
            })
        }
        if (e.target.name === 'day1_of_work') {
            setUserData({
                ...userData,
                day1_of_work: e.target.value
            })

            setErrors({
                ...errors,
                day1_of_workErr: e.target.value.length === 0 ?
                    "this field is empty" :
                    null
            })
        }
        if (e.target.name === 'day2_of_work') {
            setUserData({
                ...userData,
                day2_of_work: e.target.value
            })

            setErrors({
                ...errors,
                day2_of_workErr: e.target.value.length === 0 ?
                    "this field is empty" :
                    null
            })
        }
        if (e.target.name === 'day3_of_work') {
            setUserData({
                ...userData,
                day3_of_work: e.target.value
            })

            setErrors({
                ...errors,
                day3_of_workErr: e.target.value.length === 0 ?
                    "this field is empty" :
                    null
            })
        }
        if (e.target.name === 'mobile') {
            setUserData({
                ...userData,
                mobile: e.target.value
            })

            setErrors({
                ...errors,
                mobileErr:  e.target.value.length < 11 || e.target.value.length >11 ?
                    "This shoud have 11 numbers" :
                    null
            })
        }
        if (e.target.name === 'facebook') {
            setUserData({
                ...userData,
                facebook: e.target.value
            })

            setErrors({
                ...errors,
                facebookErr: e.target.value.length === 0 ?
                    "This field is empty" :
                    null
            })
        }
        if (e.target.name === 'google') {
            setUserData({
                ...userData,
                google: e.target.value
            })
            setErrors({
                ...errors,
                googleErr: e.target.value.length === 0 ?
                    "This field is empty" :
                    null
            })
        }
        if (e.target.name === 'twitter') {
            setUserData({
                ...userData,
                twitter: e.target.value
            })
            setErrors({
                ...errors,
                twitterErr: e.target.value.length === 0 ?
                    "This field is empty" :
                    null
            })
        }

    }

    const submitData = async  (e) => {
        const uploadData = new FormData()
        console.log('aaaaaaaaaaaaaaaaa')
        uploadData.append('user', namedata);
        uploadData.append('bio', userData.bio)
        uploadData.append('address', userData.address)
        uploadData.append('address_detail', userData.address_detail)
        uploadData.append('birth_date', userData.birth_date)
        uploadData.append('doctor', userData.doctor)
        uploadData.append('specialist_doctor', userData.specialist_doctor)
        uploadData.append('price', userData.price)
        uploadData.append('from_of_work', userData.from_of_work)
        uploadData.append('to_of_work', userData.to_of_work)

        uploadData.append('day1_of_work', userData.day1_of_work)
        uploadData.append('day2_of_work', userData.day2_of_work)
        uploadData.append('day3_of_work', userData.day3_of_work)
        uploadData.append('mobile', userData.mobile)
        uploadData.append('facebook', userData.facebook)
        uploadData.append('google', userData.google)
        uploadData.append('twitter', userData.twitter)


        uploadData.append('gender', userData.gender)
        uploadData.append('image', image)
        console.log(uploadData)
        e.preventDefault();
        axios( {
            method: 'POST',
            url:'https://care-ap.herokuapp.com/createprofiledoctor/',
            data: uploadData
        })
            .then((res) => {
                console.log(res)
                window.location.href = `/doctorprofile/${namedata}`

                setUserData({
                    user: "",
                    bio: "",
                    address: "",
                    address_detail: "",
                    birth_date: "",
                    gender: "",
                    doctor: "",
                    specialist_doctor: "",
                    price: "",
                    from_of_work: "",
                    to_of_work: "",

                    day1_of_work: "",
                    day2_of_work: "",
                    day3_of_work: "",
                    mobile: "",
                    facebook: "",
                    google: "",
                    twitter: "",

                });


            })

            .catch((err) => {
                setErrors({
                    ...errors,
                    validation: err.response.data.errors
                })
                

            });
    }

    return (
        <>
            <div className="page-content page-container" id="page-content" style={{ backgroundColor: '#01446E' }}>
                <div className="padding">
                    <div className="row container d-flex justify-content-center" >
                        <div className="col-xl-6 col-md-12" style={{ width: '100%' }}>


                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile" style={{ backgroundImage: `url(${docImg})`,backgroundRepeat: 'no-repeat',backgroundSize: '430px 1184px'}}>

                                    </div>
                                    <div className="col-sm-8" >
                                        <Form className='formcard' onSubmit={(e) => submitData(e)}>
                                        <h4 className="m-b-20 p-b-5 b-b-default f-w-600" style={{ color: '#3B9AE1' }}>Personal Data
                                                </h4>
                                            <div className="row justify-content-between text-left">
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="dirth">birth_date:</Form.Label>

                                                    <Form.Control type="date" id="dirth" name="birth_date"

                                                        max="1999-12-31"
                                                        value={userData.birth_date}
                                                        onChange={(e) => changeData(e)} />
                                                    <div className="text-danger">{errors.birth_dateErr}</div>

                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">

                                                    <Form.Label htmlFor="address">Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Address" name="address"
                                                        value={userData.address}
                                                        onChange={(e) => changeData(e)} />
                                                    <p className="text-danger">{errors.addressErr}</p>

                                                </div>
                                                <div>
                                                    <Form.Label htmlFor="bio">Bio</Form.Label>
                                                    <Form.Control type="text" id="bio" placeholder="Enter bio" name="bio"
                                                        value={userData.bio}
                                                        onChange={(e) => changeData(e)} />
                                                    <p className="text-danger">{errors.bioErr}</p>


                                                </div>

                                                

                                                <div >
                                                    <Form.Label htmlfor="username">address_detail</Form.Label>
                                                    <Form.Control type="text" name='address_detail' id="username" placeholder="Enter Name"
                                                        value={userData.address_detail}
                                                        onChange={(e) => changeData(e)} />
                                                    <p className="text-danger">{errors.address_detailErr}</p>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="tele">Mobile</Form.Label>
                                                    <Form.Control type="text" id="tele" placeholder="Enter mobile Number" name="mobile"
                                                        value={userData.mobile}
                                                        onChange={(e) => changeData(e)} />
                                                    <p className="text-danger">{errors.mobileErr}</p>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="price">Gender</Form.Label>
                                                        <Form.Select name='gender'
                                                            value={userData.gender}
                                                            onChange={(e) => changeData(e)}>
                                                            
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>

                                                        </Form.Select>
                                                        <p className="text-danger">{errors.genderErr}</p>
                                                    </div>

                                                <div >
                                                <Form.Label htmlFor="price">upload Image</Form.Label>
                                                    <Form.Control type="file" placeholder="upload Image" name="image"
                                                        // value={userData.image}
                                                        onChange={(evt) => setimage(evt.target.files[0])}
                                                    /> <br/>
                                                </div>
                                               
                                                <h4 className="m-b-20 p-b-5 b-b-default f-w-600" style={{ color: '#3B9AE1' }}>Working Data
                                                </h4><br/>

                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="Day3">Specialist</Form.Label>

                                                    <Form.Select name='specialist_doctor'
                                                        value={userData.specialist_doctor}
                                                        onChange={(e) => changeData(e)}>

                                                        <option value="Dermatology">Dermatology</option>
                                                        <option value="dentist">dentist</option>
                                                        <option value="Gynecologist">Gynecologist</option>
                                                        <option value="Ophthalmologist">Ophthalmologist</option>
                                                        <option value="cardiologist">cardiologist</option>

                                                    </Form.Select>
                                                    <p className="text-danger">{errors.specialist_doctorErr}</p>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="Day3">Doctor In</Form.Label>

                                                    <Form.Select name='doctor'
                                                        value={userData.doctor}
                                                        onChange={(e) => changeData(e)}>

                                                        <option value="leather">leather</option>
                                                        <option value="teeth">teeth</option>
                                                        <option value="newborn children">newborn children</option>
                                                        <option value="brain and nerves">brain and nerves</option>
                                                        <option value="bones">bones</option>
                                                        <option value="Obstetrician and gynecologist">Obstetrician and gynecologist</option>
                                                        <option value="ear, nose and throat">ear, nose and throat</option>
                                                        <option value="Heart and blood vessels">Heart and blood vessels</option>
                                                        <option value="blood diseases">blood diseases</option>
                                                        <option value="oncologist">oncologist</option>
                                                        <option value="inner">inner</option>
                                                        <option value="Slimming and Nutrition">Slimming and Nutrition</option>
                                                        <option value="pediatric surgery">pediatric surgery</option>
                                                        <option value="Oncology">Oncology</option>
                                                        <option value="plastic surgery">plastic surgery</option>

                                                    </Form.Select>
                                                    <p className="text-danger">{errors.doctorErr}</p>

                                                </div>


                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="hours">from hours</Form.Label>
                                                    <Form.Control type="number" id="hours" placeholder="Enter hours" max='12' min='1'
                                                        name='from_of_work'
                                                        value={userData.from_of_work}
                                                        onChange={(e) => changeData(e)} />

                                                    <p className="text-danger">{errors.from_of_workErr}</p>
                                                </div>

                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="hours">to hours</Form.Label>
                                                    <Form.Control type="number" id="hours" placeholder="Enter hours" max='12' min='1'
                                                        name='to_of_work'
                                                        value={userData.to_of_work}
                                                        onChange={(e) => changeData(e)} />

                                                    <p className="text-danger">{errors.to_of_workErr}</p>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="Day3">Day1</Form.Label>

                                                    <Form.Select name='day1_of_work'
                                                        value={userData.day1_of_work}
                                                        onChange={(e) => changeData(e)}>

                                                        <option value="Sunday">sunday</option>
                                                        <option value="Monday">MonDay</option>
                                                        <option value="Tuesday">Tuesday</option>
                                                        <option value="Wednesday">Wednesday</option>
                                                        <option value="Thursday">Thursday</option>
                                                        <option value="Friday">Friday</option>
                                                        <option value="Saturday">Saturday</option>

                                                    </Form.Select>
                                                    <p className="text-danger">{errors.day1_of_workErr}</p>

                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="Day3">Day2</Form.Label>
                                                    <Form.Select name='day2_of_work'
                                                        value={userData.day2_of_work}
                                                        onChange={(e) => changeData(e)}>

                                                        <option value="Sunday">sunday</option>
                                                        <option value="Monday">MonDay</option>
                                                        <option value="Tuesday">Tuesday</option>
                                                        <option value="Wednesday">Wednesday</option>
                                                        <option value="Thursday">Thursday</option>
                                                        <option value="Friday">Friday</option>
                                                        <option value="Saturday">Saturday</option>

                                                    </Form.Select>
                                                    <p className="text-danger">{errors.day2_of_workErr}</p>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="Day3">Day3</Form.Label>
                                                    <Form.Select name='day3_of_work'
                                                        value={userData.day3_of_work}
                                                        onChange={(e) => changeData(e)}>

                                                        <option value="Sunday">sunday</option>
                                                        <option value="Monday">MonDay</option>
                                                        <option value="Tuesday">Tuesday</option>
                                                        <option value="Wednesday">Wednesday</option>
                                                        <option value="Thursday">Thursday</option>
                                                        <option value="Friday">Friday</option>
                                                        <option value="Saturday">Saturday</option>
                                                    </Form.Select>
                                                    <p className="text-danger">{errors.day3_of_workErr}</p>

                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="gmail">Gmail</Form.Label>
                                                    <Form.Control type="email" name='google' id="gmail" placeholder="Enter Gmail"
                                                        value={userData.google}
                                                        onChange={(e) => changeData(e)} />
                                                    <p className="text-danger">{errors.googleErr}</p>
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="facebook">facebook</Form.Label>
                                                    <Form.Control type="text" name='facebook' id="facebook" placeholder="Enter facebook"
                                                        value={userData.facebook}
                                                        onChange={(e) => changeData(e)} />
                                                    <p className="text-danger">{errors.facebookErr}</p>

                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <Form.Label htmlFor="twitter">twitter</Form.Label>
                                                    <Form.Control type="text" id="twitter" name='twitter' placeholder="Enter twitter"
                                                        value={userData.twitter}
                                                        onChange={(e) => changeData(e)} />

                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">

                                                    <div>
                                                        <Form.Label htmlFor="price">price</Form.Label>
                                                        <Form.Control type="number" id="price" placeholder="Enter price"
                                                            name='price'
                                                            value={userData.price}
                                                            onChange={(e) => changeData(e)} />
                                                        <p className="text-danger">{errors.priceErr}</p>

                                                    </div>
   
                                                </div>
                                               

                                            </div>
                                            
                                            <p className="text-danger">{errors.validation}</p>
                                            <br /><br />
                                            <Button variant="primary" type="submit"
                                                disabled={
                                                    // errors.userErr
                                                    errors.bioErr
                                                    || errors.addressErr
                                                    || errors.address_detailErr
                                                    || errors.birth_dateErr
                                                    || errors.genderErr
                                                    || errors.doctorErr
                                                    || errors.specialist_doctorErr
                                                    || errors.priceErr
                                                    || errors.from_of_workErr
                                                    || errors.to_of_workErr
                                                    || errors.day1_of_workErr
                                                    || errors.day2_of_workErr
                                                    || errors.day3_of_workErr
                                                    || errors.mobileErr
                                                    || errors.facebookErr
                                                }
                                            >
                                                Submit
                                            </Button>

                                        </Form>
                                        <br />
                                    </div>




                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>







    )

}
export default DoctorForm;