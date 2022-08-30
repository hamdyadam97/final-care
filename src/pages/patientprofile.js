import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styling/patientprofile.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function PatientProfile() {

    let namedata = localStorage.getItem('user')


    const params = useParams();
    var k = params.name
    const doc_name = k


    const [doc_data, setdoc_data] = useState([]);



    console.log(doc_data)

    useEffect(() => {
        axios.get(`https://care-ap.herokuapp.com/patient/patientdata/${namedata}`)


            .then((res) => setdoc_data(res.data))
            .catch((err) => console.log(err))
    }, [])
    const imagepath = `https://care-ap.herokuapp.com${doc_data.image}`

    return (

        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#01446E", height: "200px" }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px;" }}>
                                    <img src={imagepath}
                                        alt="..." className="img-fluid img-thumbnail mt-4 mb-2"
                                        style={{ width: "150px", zIndex: 1 }} />
                                    {/* <button type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark"
                                        style={{zIndex: 1 }}>
                                        Edit profile
                                    </button> */}
                                </div>
                                <div className="ms-3" style={{ marginTop: "130px" }}>
                                    <h5 >{doc_name}</h5>

                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                <div className="d-flex justify-content-end text-center py-1">

                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    <h1 style={{ color: '#01446E' }}>Profile</h1>
                                    <Button className='btn btn-primary' >
                                            <Link to={`/patientupdate/${namedata}`} style={{color:'white',textDecoration: 'none'}}>Edit Profile</Link>
                                            </Button>

                                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h4 className="font-italic mb-1" style={{ color: '#01446E' }}>Age : {doc_data.age}</h4><br></br>
                                        <h4 className="font-italic mb-1" style={{ color: '#01446E' }}>History : {doc_data.history}</h4><br></br>
                                        <h4 className="font-italic mb-0" style={{ color: '#01446E' }}>Gender : {doc_data.gender}</h4><br></br>
                                        <h4 className="font-italic mb-0" style={{ color: '#01446E' }}>Mobile Phone : {doc_data.mobile}</h4><br></br>
                                    </div>
                                    <div className="pt-1 mb-4" >
                                        <Button type="submit" className="btn btn-primary" value="doctor" style={{ marginLeft: '20px', marginTop: '10px' }}>
                                            <Link to={`/history/${namedata}`} style={{ color: 'white', textDecoration: 'none' }}
                                            >Go To History</Link>

                                        </Button>
                                        
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
} export default PatientProfile;

