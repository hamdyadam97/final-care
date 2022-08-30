import axios from 'axios';
import email from '../image/email.png'
import { useState ,useEffect} from "react";
function ConfirmEmail() {
    let namedata = localStorage.getItem('user')
    const [gender, setGender] = useState();

    const [userData, setUserData] = useState({

        num: "",

    })

    const [errors, setErrors] = useState({
        numberErr: null
    })

    const changeData = (e) => {
        if (e.target.name === "number") {
            setUserData({
                ...userData,
                num: e.target.value
            })

            setErrors({
                ...errors,
                numberErr:
                    e.target.value.length === 0 ?
                        "this field is Required" :
                        e.target.value.match(/^\s*$/) || [].length > 0 ?
                            "empty " :
                            null

            })
        }


    }
    const handleChange1 = (e) => {
        
        e.preventDefault();
        axios
            .get(`https://care-ap.herokuapp.com/sendnumbertoverify/${namedata}`, 
            // {
            //     number: userData.number,
              
            // }
            )
            .then((res) => {
                alert('Check Your Email')

                console.log(res.data)
                console.log(namedata)

            })
            .catch((err) => {
                console.log(err.response.data)
               

            });
    }

    const handleChange2 = (e) => {

        setGender(e.target.value)

        e.preventDefault();
        axios
            .put(`https://care-ap.herokuapp.com/numbertoverify/${namedata}`, {
                num: userData.num,
              
            })

            .then((res) => {

                console.log(res.data)
                console.log(namedata)

                if (localStorage.getItem('val') === "doctor") {

                    window.location.href =`/doctorform/${namedata}`
                }
                else {
                    window.location.href = '/patientform'
        
                }
                setUserData({
                    num: "",
                  
                });


            })
            .catch((err) => {
                console.log(err.response.data)
               

            });
    }
    return (
        <form>
        <div style={{ backgroundColor: '#b5cbe1', height: '93vh' }}>
            <div className="container" >

                <img style={{ width: '600px', marginTop: '20px' , }}
                    src={email} />
                <h1 style={{ color: '#0a5896' }}>Confirm Email</h1>

                <p style={{ fontSize: '20px' }}>To Confirm Your Email Enter The Button </p>

                <div className="pt-1 mb-4" >
                    <button type="submit" className="btn btn-primary" value="doctor"
                        onClick={handleChange1}
                        disabled={errors.numberErr}>
                        To verify Email
                    </button>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example17" style={{ fontSize: '20px' }}>The Number</label>
                    <input type="text"
                        style={{ width: '400px' }}
                        className=
                        {`form-control ${errors.numberErr ? "border-danger" : "border-success"}`}
                        placeholder="Please enter the number"
                        value={userData.number}
                        onChange={(e) => changeData(e)}
                        name="number"
                    />
                    <p className="text-danger"> {errors.numberErr} </p>
                </div>

                

                <div className="pt-1 mb-4" >
                    <button type="submit" className="btn btn-primary" 
                        onClick={handleChange2}
                        disabled={errors.numberErr}>
                        Done
                    </button>
                </div>
                </div>
            </div>
            </form>
            )
} export default ConfirmEmail;