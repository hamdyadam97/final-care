
import '../styling/History.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../styling/appointment.css'

function Appointment() {
    let namedata = localStorage.getItem('user')

    const [appointment, setappointment] = useState([]);
    const [check, setCheck] = useState({
        msg: ''

    });
    const [doc_data, setdoc_data] = useState([]);
    useEffect(() => {
        axios.get(`https://care-ap.herokuapp.com/appointment/historyofdoctor/${namedata}`)

            .then((res) => setappointment(res.data))
            .catch((err) => console.log(err))


        axios.get(`https://care-ap.herokuapp.com/doctordata/${namedata}`)

            .then((res) => setdoc_data(res.data))
            .catch((err) => console.log(err))

    }, [])




    const Cancel = (ID) => {

        axios.get(`https://care-ap.herokuapp.com/appointment/cancel_appointment/${ID}`)

            .then((res) => {
                setCheck({
                    msg: res.data.msg,


                });
                // setappointment(res.data.msg)
                // console.log(res.data.msg)

            })
            .catch((err) => console.log(err))
        // console.log(app.cancel)
        // console.log('cancel')


    }
    const Done = (ID) => {

        axios.get(`https://care-ap.herokuapp.com/appointment/done_appointment/${ID}`)

            .then((res) => {
                console.log("sssd")
                setCheck({
                    msg: res.data.msg,


                });
            }
                // setappointment(res.data)
            )
            .catch((err) => console.log(err))
        // console.log(app.done)



    }

    const imagepath = `https://care-ap.herokuapp.com${doc_data.image}`

    return (
        <>
            <div className="page-content page-container" id="page-content" style={{ backgroundColor: ' #01446E' }}>
                <div className="padding">
                    <div  >
                        <div className="col-xl-6 col-md-12" style={{ width: '100%' }}>
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile" style={{ backgroundColor: 'white' }}>
                                        <div className="card-block text-center text-white">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="doctor-card one">
                                                        <div class="top">
                                                            <div class="wrapper">
                                                                <div class="mynav">
                                                                    <img src={imagepath} style={{ height: '600px', width: '100%' }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="bottom" style={{ backgroundColor: '#01446E' }}>
                                                            <div class="wrapper">
                                                                <ul class="forecast" >
                                                                    <li style={{ display: 'block' }}>
                                                                        <h3 >DR.{namedata}</h3>
                                                                        <p style={{ fontSize: '20px' }}>{doc_data.from_of_work}pm, {doc_data.to_of_work}pm</p>
                                                                        <h4 style={{ fontSize: '20px' }}>Days:</h4>
                                                                        <p style={{ fontSize: '20px', textAlign: 'left' }}>Day1:{doc_data.day1_of_work}</p>
                                                                        <p style={{ fontSize: '20px', textAlign: 'left' }}>Day2:{doc_data.day2_of_work}</p>
                                                                        <p style={{ fontSize: '20px', textAlign: 'left' }}>Day3:{doc_data.day3_of_work}</p>

                                                                    </li>

                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-sm-8">
                                        <div className='container'>
                                    <p className="text-green" style={{ fontSize: '30px', color: 'red',marginLeft:'52px' }}> {check.msg} </p>
                                    </div>
                                        {
                                            appointment.map((app) => {
                                                return (
                                                    <>
                                                        <div className='container'>

                                                            <div className="row row-cols-1 row-cols-md-1 g-4">
                                                                <div className="col">
                                                                    <div className="card" style={{ marginLeft: '50px' }}>
                                                                        <div className="card-body">
                                                                            <h3 className="card-title" style={{ color: '#17579b' }}>{app.patient}</h3>
                                                                            <p className="card-text">
                                                                                <p className="card-text" style={{ fontSize: '20px' }}>{app.hour} pm</p>
                                                                                <p className="card-text" style={{ fontSize: '20px' }}>{app.day} </p>
                                                                            </p>
                                                                            <div className="d-flex justify-content-between text-center mt-5 mb-2" >

                                                                                <button className='btn btn-success' onClick={() => Done(app.id)}>Done</button>

                                                                                <button className='btn btn-danger' onClick={() => Cancel(app.id)}>Cancel</button>
                                                                            </div>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </>

                                                )
                                            })
                                        }
                                    </div>

                                </div></div>
                        </div></div></div></div>





        </>
    )
}
export default Appointment