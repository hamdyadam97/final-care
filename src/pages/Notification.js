import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styling/History.css'
function Notification() {

    const [notification, setnotification] = useState([])
    let namedata = localStorage.getItem('user')

    useEffect(() =>{

         axios.get(`https://care-ap.herokuapp.com/appointment/display_notification/${namedata}`)

            .then((res) => setnotification(res.data))
            .catch((err) => console.log(err))

    }, [])
    console.log(notification)
    console.log("sssssssssssssssssssssssssssssssssssssssssssssssssss")
    console.log(namedata)

    return (
        <>
            <div className='container' style={{ marginTop: '20px', color: '#17579b' }}>
                <h1> Your Notification</h1>
            </div>
            <div className='container' style={{ marginTop: '50px' }}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {

                        notification.map((noti) => {
                            return (
                                <>
                                  
                                        <div className={`card form-control ${noti.read ? "opacity-50" : "opacity-100"}`} style={{ width: '800px', margin: '10px' }}>
                                            <div className="card-body">
                                                <h3 className="card-title" style={{ color: '#17579b' }} >
                                                    Doctor {noti.owner}
                                                </h3>
                                                <p className='card-text' style={{ fontSize: '20px' }}>{noti.msg}</p>
                                        </div>
                                    </div>
                                    
                                </>

                            )

                        })
                    }
                </div>



            </div >
            {/* <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        pan_history.map((patient) => {
                            return (
                                <div className="col" style={{ width: '600px' }}>

                                    <div className="card" >
                                        <div className="card-body">
                                            <h3 className="card-title" style={{ color: '#17579b' }}> From DR.Sara Ali</h3>
                                            <p className='card-text' style={{ fontSize: '20px' }}>we are very sorry  ayatkhaled appointment with doctor nadinehazem cancelled</p>
                                        </div>
                                    </div>
                                </div>
                                )
                        }
                    }
                </div>
            </div> */}


        </>

    )
}
export default Notification