import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/DoctorProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell } from '@fortawesome/free-solid-svg-icons'
import profile from '../pages/profile';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Link to='/profile'><img className='accountimage' src='https://w7.pngwing.com/pngs/518/320/png-transparent-computer-icons-mobile-app-development-android-my-account-icon-blue-text-logo-thumbnail.png'/>
          </Link>
          
            <Link to="/" style={{textDecoration:'none',color:'#1363DF'}}>
                <img className='logoimage' src='https://cdn.pixabay.com/photo/2017/10/08/19/55/cruz-2831364_960_720.png'/>
                <span className='appname'>Doc</span>
            </Link>
            <Link to="/doctorprofile"style={{textDecoration:'none',color:'#1363DF'}}>
                <span className='appname' >doctor</span>
            </Link>
            <Nav.Link href="#features"><FontAwesomeIcon icon={faBell} /></Nav.Link>
            
         
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;