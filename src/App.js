import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import DoctorProfile from './pages/doctorprofile'
import Profile from './pages/profile';
import NoteFound from './pages/NoteFound';
import HistoryOfDoctors from './pages/History1';
import DoctorForm from './pages/doctorform';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PatientForm from './pages/patientform';
// import Footer from './component/Footer';
import Covied19 from './pages/Covied19';
import PatientProfile from './pages/patientprofile'
import Appointment from './pages/appointment'
import Nav from './component/Nav'
import AllDoctors from './pages/AllDoctors';
import Notification from './pages/Notification';
import DoctorUpdate from './pages/doctorUpdate';
import PatientUpdate from'./pages/patientupdate';
import ConfirmEmail from './pages/confirmEmail';
import Logout from './pages/Logout'

function App() {
  return (
    <>
         

     <BrowserRouter>
     <Nav/>
     {/* <NavBar/> */}
     <Switch>

      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/covied19"} component={Covied19}/>
      <Route exact path={"/appointment"} component={Appointment}/>
      <Route exact path={"/doctorform/:name"} component={DoctorForm}/>
      <Route exact path={"/doctorprofile/:name"} component={DoctorProfile}/>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/AllDoctors"} component={AllDoctors}/>
      <Route exact path={"/patientform"} component={PatientForm}/>
      <Route exact path={"/patientprofile/:name"} component={PatientProfile} />
      <Route exact path={"/doctordetail/:name"} component={Profile}/>
      <Route exact path={"/history/:name"} component={HistoryOfDoctors} />
      <Route exact path={"/notification"} component={Notification}/>
      <Route exact path={"/doctorupdate/:name"} component={DoctorUpdate}/>
      <Route exact path={"/patientupdate/:name"} component={PatientUpdate}/>
      <Route exact path={"/confirmemail"} component={ConfirmEmail}/>
      <Route exact path={"/logout"} component={Logout}/>

      <Route exact path={"*"} component={NoteFound}/>
     
      
</Switch>
    
    {/* <Footer/> */}
     </BrowserRouter>
    </>
  
  );
}

export default App;
