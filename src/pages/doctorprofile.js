import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '../styling/History.css'
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import '../styling/doc_P.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import { faGoogle } from "@fortawesome/free-brands-svg-icons"

function DoctorProfile() {
    let namedata = localStorage.getItem('user')
    const params = useParams();
    var k = params.name
    const doc_name = k
    const [doc_data, setdoc_data] = useState([]);



    // }

    useEffect(() => {
        axios.get(`https://care-ap.herokuapp.com/doctordata/${namedata}`)

            .then((res) => setdoc_data(res.data))
            .catch((err) => console.log(err))
    }, [])




    const imagepath = `https://care-ap.herokuapp.com${doc_data.image}`

    return (
        <>
            <div className="page-content page-container" id="page-content" >
                <div className="padding">
                    <div className="row container d-flex justify-content-center" >
                        <div className="col-xl-6 col-md-12" style={{ width: '80%' }}>


                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src={imagepath} className="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h3 className="f-w-600">Dr.{doc_name}</h3>
                                            <p>{doc_data.specialist_doctor}</p>
                                            <Button className='btn btn-primary' >
                                            <Link to={`/doctorupdate/${namedata}`} style={{color:'white',textDecoration: 'none'}}>Edit Profile</Link>
                                            </Button>
                                            <div>
                                                <br />
                                                <h4 className="m-b-20 p-b-5 b-b-default f-w-600">More Information</h4>

                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">gender</p>
                                                    <h6 className="text-muted f-w-400"style={{ color: '#3B9AE1' }}>{doc_data.gender}</h6>
                                                </div>


                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Specialist</p>
                                                    <h6 className="text-muted f-w-400"style={{ color: 'black' }}>{doc_data.specialist_doctor}</h6>
                                                </div>

                                                
                            
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h4 className="m-b-20 p-b-5 b-b-default f-w-600" style={{ color: '#3B9AE1' }}>Personal Information</h4>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">FullName</p>
                                                    <h6 className="text-muted f-w-400">{doc_name}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Address</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.address}</h6>
                                                </div>

                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">address_detail</p>
                                                    <h6 className="text-muted f-w-400"> {doc_data.address_detail}</h6>
                                                </div>



                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Mobile</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.mobile}</h6>
                                                </div>

                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600"> bio</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.bio}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600"> BirthDate</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.birth_date}</h6>
                                                </div>
                                            </div>



                                            <h4 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600" style={{ color: '#3B9AE1' }}>Booking Details </h4>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Price</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.price}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Hour OF Work</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.from_of_work}pm, {doc_data.to_of_work}pm</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Day1</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.day1_of_work}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Day2</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.day2_of_work}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Day3</p>
                                                    <h6 className="text-muted f-w-400">{doc_data.day3_of_work}</h6>
                                                </div>
                                                
                                            </div>
                                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href={doc_data.google} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true">
                                            <FontAwesomeIcon icon={faGoogle}/> </a> </li>
                                            <li><a href={doc_data.twitter} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true">
                                            <FontAwesomeIcon icon={faTwitter}/></a></li>
                                            <li><a href={doc_data.facebook} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true">
                                            <FontAwesomeIcon icon={faFacebook} /></a></li>                                            
                                        </ul>

                                            <Button className='btn btn-primary' >
                                            <Link to='/appointment' style={{color:'white',textDecoration: 'none'}}>Go To Appointment</Link>
                                            </Button>

                                            
                                            

                                        </div>
                                    </div>




                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>







    )
} export default DoctorProfile;