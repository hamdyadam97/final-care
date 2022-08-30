// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styling/History.css'
function HistoryOfDoctors() {
    const [pan_history, setpan_history] = useState([])
    let namedata = localStorage.getItem('user')

    useEffect(() => {
        axios.get(`https://care-ap.herokuapp.com/appointment/history/${namedata}`)

            .then((res) => setpan_history(res.data))
            .catch((err) => console.log(err))


    }, [])
    function Cancelapp(ID)  {

        axios.get(`https://care-ap.herokuapp.com/appointment/delete/${ID}`)

            .then((res) =>console.log(res.data.msg))
            .catch((err) => console.log(err))
        console.log('cancel')
    }
   


    console.log(pan_history)

    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    pan_history.map((patient) => {


                        return (
                            <div className="col" style={{ width: '600px' }}>
                                <div className="card" >
                                    <div className="card-body">
                                        <h3 className="card-title" style={{ color: '#17579b' }}>{patient.doctor}</h3>
                                        <p className='card-text' style={{ fontSize: '20px' }}>{patient.hour}pm</p>
                                        <p className='card-text' style={{ fontSize: '20px' }}>{patient.day}</p>
                                        <p className="card-text" >
                                            <p className="card-text" style={{ fontSize: '20px' }}> {patient.date_appointment}</p>

                                            {patient.done == true ?
                                                <h6 className='text-success' style={{ fontSize: '20px' }}>Done</h6> :
                                                patient.done

                                            }


                                            {patient.cancel === true ?
                                                <h6 className='text-danger' style={{ fontSize: '20px' }}>cancel</h6> :
                                                null
                                            }

                                            <button className='btn btn-danger' onClick={() =>Cancelapp(patient.id)} disabled=
                                            {patient.done==true||
                                                patient.cancel==true

                                            }>Cancel</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }








            </div>



        </div >
    )
}
export default HistoryOfDoctors