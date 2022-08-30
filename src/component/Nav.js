import React from "react";
import '../styling/Care.css'
import logo2 from '../image/logo2.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styling/notification.css';
import axios from "axios";
import { useEffect } from "react";
import { Button } from "react-bootstrap";




function Nav (){
  const [counter,setcounter]= useState(0)

  let namedata = localStorage.getItem('user')

  useEffect(() => {
    setInterval( () => {

      axios.get(`https://care-ap.herokuapp.com/appointment/send_notification/${namedata}`)

       .then((res) =>setcounter(res.data.cnt))
       .catch((err) => console.log(err))
     
     },3000)
  },[])

  console.log(counter)
       


    // const access_token = localStorage.getItem('access_token')
    const handleChange = (e) => {
          if(localStorage.getItem('doc') === 'doctor'){
            console.log('llllllllllllllllll')
            console.log(localStorage.getItem('doc'))
            window.location.href = `/doctorprofile/${namedata}`
          }
          else if (localStorage.getItem('doc') === 'patient')
          {
            console.log(localStorage.getItem('doc'))
            window.location.href = `/patientprofile/${namedata}`
          }
  }
        return(
        <>
      
 <div class="nav" style={{height:'60px'}}>
<ul >
<Link to="/" class="logo"> <img src={logo2} alt="" className="logo1" style={{height:'55px',width:'55px'}}/></Link>
  <li style={{marginTop:'3px' }}>

    <a href="/#Top_Doctors">Doctors</a></li>

  <li style={{marginTop:'3px' }}>
     <Link to="/Covied19">Covied19</Link></li>
    
  
  {/* { localStorage.getItem('doc') ? 
  <li style={{marginTop:'3px' }}>
  
  <Button onClick={handleChange} >Profile</Button> 
  </li> : null

   } */}

   { namedata ?
   <li style={{marginTop:'3px' }}>
 <Link to="/logout">Logout</Link></li>:
  <li style={{marginTop:'3px' }}
  ><Link to="/login">Login</Link></li>
}

  {/* <li  style={{marginTop:'4px' }}><Link to="/login">Login</Link></li> */}
  {namedata ?
  null:
  <li  style={{marginTop:'4px' }}><Link to="/Signup">SignUp</Link></li> 
}
{ namedata? 
 <Link to= '/notification' > <button className="btn btn-primary" style={{borderRadius:'17px',right:'10px',marginTop:'13px'}}>
 <FontAwesomeIcon icon={faBell} style={{margin: '0 7px 0 0'}}/>{counter}</button>
 </Link> : null
}
{ localStorage.getItem('doc') ? 
 <Link  > <Button className="btn btn-primary" style={{borderRadius:'17px',right:'10px',marginTop:'13px',marginLeft:'15px'}} onClick= {handleChange}>
 <FontAwesomeIcon icon={faUser} style={{margin: '0 7px 0 0'}}/>Profile</Button>
 </Link> : null
}
</ul>
</div>

        </>)
    }


export default Nav;