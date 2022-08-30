import React from "react";

function NavBar(){
   
        return(
        <>
        <link rel="stylesheet" href="assets/css/normalize.css" />
          <link rel="stylesheet" href="assets/css/Care.css" />
          <link rel="stylesheet" href="assets/css/all.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
 <div class="nav" style={{height:'65px'}}> 
<ul >
<a href="/" class="logo" > <img src="assets/imgs/logo.png" alt="" className="logo1" style={{marginTop:'1px' }}/></a>
  <li style={{marginTop:'4px' }}><a href="/#Top_Doctors">Top Doctors</a></li>
  <li  style={{marginTop:'4px' }}> <a href="/Covied19">Covied19</a></li>
  <li  style={{marginTop:'4px' }}><a href="/login">Login</a></li>
  <li  style={{marginTop:'4px' }}><a href="/Signup">SignUp</a></li>

</ul>
</div>
        </>)
    
}

export default NavBar;