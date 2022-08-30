import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import chat from '../image/toppng.com-live-chat-png-1024x1024.png';
import '../styling/DoctorProfile.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import '../styling/doctor_D.css'


function Profile() {


    let user = localStorage.getItem('user')
    const patientName = localStorage.getItem('user')

    const [doctorinfo, setdoctorinfo] = useState(false);
    const [workAddress, setworkAddress] = useState(false);
    const [rate_doc, setrate_doc] = useState(false);

    const params = useParams();
    var doc_name = params.name
    const [doc_data, setdoc_data] = useState([]);

    const [Rate, setRate] = useState({
        rate: "",
        notes: "",
        msg:''
    }
    );

    const [Paypal, setPaypal] = useState({
      
        msg:'',
        date:'',
        hour:''
    }
    );
    const [errors, setErrors] = useState({
        rateErr: null,
        notesErr: null,
        validationErr:null
    })
    const changeData = (e) => {
        if (e.target.name === 'rate') {
            setRate({
                ...Rate,
                rate: e.target.value
            })
            setErrors({
                ...errors,
                rateErr: e.target.value > 5 ?
                    'please enter number from 1 to 5' :
                    null
            })
        }
        if (e.target.name === 'comment') {
            setRate({
                ...Rate,
                notes: e.target.value

            })

        }

    }
    
    const submitData = async (e) => {
        const uploadData = new FormData()
        uploadData.append('rate', Rate.rate);
        uploadData.append('notes', Rate.notes);
        uploadData.append('patient', patientName)
        e.preventDefault();
      await  axios({
            method: 'post',
            url:`https://care-ap.herokuapp.com/appointment/rate/${doc_name}`,
            data: uploadData

        }).then((res) => {
                console.log(res)
                console.log("kkkkkkkkkkk")
                setRate({
                    rate: "",
                    notes: "",
                    msg : res.data.msg
                });
            }).catch((err) => {
                setErrors({
                    ...errors,
                    validationErr:err.response.data.msg
                })
                // console.log(err)
                // console.log(err.response.data.msg)
                console.log("ssssssssssssssssssssssssssssssssssssssssssssss")

            });

    }
    useEffect(() => async () => {
        await axios.get(`https://care-ap.herokuapp.com/doctordata/${doc_name}`)

            .then((res) => setdoc_data(res.data))
            .catch((err) => console.log(err))
    }, [])
    console.log(doc_data.price)

    useEffect(() => {
        
    
        if (doc_data.price) {
            
            if(localStorage.getItem('doc') === 'patient')
            {
                window.paypal.Buttons({
                    
                    createOrder: (data, actions) => {

                        return actions.order.create({

                            purchase_units: [{
                                amount: {
                                    value: doc_data.price
                                } 
                            }]
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then(details => {
                            axios
                                .post("https://care-ap.herokuapp.com/appointment/appointment/", {
                                    doctor: doc_name,
                                    patient: user
                                })
                                .then((res) => {
                                    setPaypal({
                                        msg : res.data.msg,
                                       date:res.data.date,
                                       hour:res.data.hour,

                                    });
                                    // (res.data)


                                })
                                .catch((err) => {
                                    console.log(err.response.data.msg)
                                });

                            // alert ('Thanks For Paying ');
                        });
                    }
                
            }).render('#paypal-button-container')
        }
        else
    {
     alert('You Must Sign Up as Patient To register')   
    }

    }
    
}, [doc_data.price])


    const imagepath = `https://care-ap.herokuapp.com${doc_data.image}`

    return (

        <>
            <section style={{ backgroundColor: "#01446E" }}>
                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-7">

                            <div className="card p-3 py-4">

                                <div className="text-center">
                                    <img src={imagepath} width="100" className="rounded-circle" />
                                    <div className="text-center mt-3">
                                        <h2 className="mt-2 mb-0">Dr.{doc_name}</h2>
                                        <span style={{ fontSize: '30px' }}>{doc_data.specialist_doctor}</span>

                                        <div className="buttons">

                                            <div id="paypal-button-container" className="btn btn-primary btn-rounded btn-lg" >

                                            </div>

                                        </div>
                                        <p className="text-green" style={{fontSize:'30px' ,color:'red'}}> {Paypal.msg} {Paypal.date} {Paypal.hour}</p>

                                        <div className="d-flex justify-content-between text-center mt-5 mb-2" >
                                            <div>
                                                <h5 style={{ color: '#01446E' }}>Person Information</h5>
                                                <button onClick={() => setdoctorinfo(!doctorinfo)} className='Arrow' >
                                                    <FontAwesomeIcon icon={faArrowDown} />
                                                </button>

                                                {
                                                    doctorinfo ? <div className='doctorinfo'>
                                                        {doc_data.bio}
                                                    </div>

                                                        : null
                                                }
                                            </div>
                                            <div >
                                                <h5 className='prsone' style={{ color: '#01446E' }}>Working Address</h5>
                                                <button onClick={() => setworkAddress(!workAddress)} className='Arrow' >
                                                    <FontAwesomeIcon icon={faArrowDown} />
                                                </button>
                                                {
                                                    workAddress ? <div className='doctorinfo' >
                                                        Assuit,Elhelaly Street </div>

                                                        : null
                                                }
                                            </div>

                                        </div>

                                        <button className='Arrow' style={{ borderRadius: '5px', fontSize: '25px' }} onClick={() => setrate_doc(!rate_doc)}  >
                                            <FontAwesomeIcon icon={faArrowDown} />
                                            Rate
                                        </button>

                                        {
                                            rate_doc ?

                                                <Form onSubmit={(e) => submitData(e)}>
                                                    <br />
                                                    <Form.Label htmlFor="rate1">Giv Rate</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        id="rate1"
                                                        min='1' max='5'
                                                        placeholder='give rate from 1 to 5'
                                                        name='rate'
                                                        value={Rate.rate}
                                                        onChange={(e) => changeData(e)}
                                                    />


                                                    <Form.Label htmlFor="rate">Comment</Form.Label>
                                                    <Form.Control
                                                        type="textarea"
                                                        id="rate"
                                                        placeholder='write your comment'
                                                        name='comment'
                                                        value={Rate.notes}
                                                        onChange={(e) => changeData(e)}
                                                    />
                                                    <br />
                                                    <p className="text-green" style={{fontSize:'30px' ,color:'green'}}> {Rate.msg} </p>
                                                    <p className="text-danger" style={{fontSize:'30px'}}> {errors.validationErr} </p>


                                                    <div class="buttons">

                                                        <button class="btn btn-outline-primary px-4" type='submit'>
                                                            Rate Now
                                                        </button>
                                                        {/* <Button className="btn btn-outline-primary px-4  " type="submit" >
                                                Rate Now
                                            </Button> */}
                                                    </div>

                                                </Form>



                                                : null
                                        }

                                        <br />




                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </>
            )

} export default Profile;