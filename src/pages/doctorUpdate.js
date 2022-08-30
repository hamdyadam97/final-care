import Card from 'react-bootstrap/Card';
import '../styling/History.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import '../styling/Form.css'
import docImg from '../image/Capture.PNG'
function DoctorUpdate() {

    let namedata = localStorage.getItem('user')

    const [userData, setUserData] = useState({
        user: "",
        bio: "",
        address: "",
        address_detail: "",
        price: "",
        mobile: "",
       

    })
    const [image, setimage] = useState()
    const [errors, setErrors] = useState({
        userErr: null,
        bioErr: null,
        addressErr: null,
        address_detailErr: null,
        priceErr: null, 
        mobileErr: null,
        validation: null,

    


    })

    const changeData = (e) => {
        if (e.target.name === 'user') {
            setUserData({
                ...userData,
                user: e.target.value
            })

            setErrors({
                ...errors,
                userErr: e.target.value.length == 0 ?
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
                bioErr: e.target.value.length < 20 ?
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
                priceErr:e.target.value.length === 0 ?
                "you should enter price" : e.target.value > 500 ?
                'Price Must Not Greater Than 500 ': null
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
        
       

    }
    const submitData = async (e) => {
        const uploadData = new FormData()
        console.log('aaaaaaaaaaaaaaaaa')
        uploadData.append('user', namedata)
        uploadData.append('bio', userData.bio)
        uploadData.append('address', userData.address)
        uploadData.append('address_detail', userData.address_detail)
        uploadData.append('price', userData.price)
        uploadData.append('mobile', userData.mobile)
        uploadData.append('image', image)
        console.log(uploadData)
        e.preventDefault()

        axios({
            method:'PUT',
            url:'https://care-ap.herokuapp.com/updateprofile/',
            data: uploadData
        })
            .then((res) => {
                console.log(res)
                

                setUserData({
                    user: "",
                    bio: "",
                    address: "",
                    address_detail: "",
                    price: "",
                    mobile: "",
                   
                });
                window.location.href = `/doctorprofile/${namedata}`
                console.log(namedata)

            })

            .catch((err) => {
                setErrors({
                    ...errors,
                    validation: err.response.data.msg
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
                                        <h4 className="m-b-20 p-b-5 b-b-default f-w-600" style={{ color: '#3B9AE1' }}> Update Personal Data
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
                                                    <Form.Label htmlFor="username">address_detail</Form.Label>
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
                                             

                                                <div >
                                                <Form.Label htmlFor="price">upload Image</Form.Label>
                                                    <Form.Control type="file" placeholder="upload Image" name="image"
                                                        // value={userData.image}
                                                        onChange={(evt) => setimage(evt.target.files[0])}
                                                    /> <br/>
                                                </div>
                                               
                                                <h4 className="m-b-20 p-b-5 b-b-default f-w-600" style={{ color: '#3B9AE1' }}> Update Working Data
                                                </h4><br/>

                                                <div className="form-group col-sm-6 flex-column d-flex">

                                                    <div>
                                                        <Form.Label htmlFor="price">price</Form.Label>
                                                        <Form.Control type="number" id="price" placeholder="Enter price"
                                                            name='price'
                                                            value={userData.price}
                                                            onChange={(e) => changeData(e)} />
                                                        <p className="text-danger">{errors.priceErr}</p>

                                                    </div>

                                                    <p className="text-danger" style={{fontSize:'20px'}}>{errors.validation}</p>

                                                   
                                                    
                                                </div>
                                               

                                            </div>

                                            <br /><br />
                                            <Button variant="primary" type="submit"
                                                disabled={
                                                    // errors.userErr
                                                    errors.bioErr
                                                    || errors.addressErr
                                                    || errors.address_detailErr
                                                    || errors.birth_dateErr
                                                    || errors.priceErr
                                                    || errors.mobileErr
                                                  
                                                }
                                            >
                                                Update
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
export default DoctorUpdate;