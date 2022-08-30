import React from "react";
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useEffect, useState } from "react"
import axios from "axios";
// import Nav from '../component/Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Home() {


  // const access_token = localStorage.getItem('access_token');
  let namedata = localStorage.getItem('user')



  const [doc_data, setdoc_data] = useState([]);

  useEffect(() => {
    axios.get(`https://care-ap.herokuapp.com/api/`)

      .then((res) => setdoc_data(res.data))
      .catch((err) => console.log(err))
  }, [])




  function handleSubmit(e) {
    e.preventDefault();
    namedata? window.location.href= '/AllDoctors':
     window.location.href = "/login";
  }

  return (
    <>
      <link rel="stylesheet" href="assets/css/normalize.css" />
      <link rel="stylesheet" href="assets/css/Care.css" />
      <link rel="stylesheet" href="assets/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
      {/* <!-- Start Landing --> */}
      <div class="landing">

        <div class="container">
          <div class="text">
            <h1>Care Yourself EveryDay</h1>
            <p>Better Healthcare for a Better Life</p>
            {/* <a href="/tips" class="btn btn-primary"> Show More </a> */}

          </div>
          <div class="">
            <img src="assets/imgs/4990223.png" alt="" width="600px" />
          </div>
        </div>

      </div>
      <div class="team" id="Top_Doctors">
        <h2 class="main-title"> Doctors </h2>
        <div class="container">
          {doc_data.slice(0, 3).map((docs) => {
            const imagepath = `https://care-ap.herokuapp.com${docs.image}`
            return (
              <div>
                <div class="box">
                  <div class="data">
                    <Link to={`/doctordetail/${docs.user}`}>
                      <img src={imagepath} width="270px" alt="imge" /></Link>
                  </div>
                  <div class="info">
                    <h3 style={{ marginTop: '8px' }}>DR.{docs.user}</h3>
                    <p style={{ marginTop: '6px', fontSize: '20px' }}>{docs.doctor}</p>
                    <p classname="text" style={{ position: 'absolute', top: '1px', marginRight: '16px', fontSize: '20px', color: 'yellow' }}>
                      <FontAwesomeIcon icon={faStar} style={{ margin: '0 7px 0 0' }} />
                      {docs.avg}</p>

                  </div>
                </div>
              </div>
            )

          })
          }
         
        </div>
        <div class="button-div">
            <button onClick={handleSubmit} class="btn btn-primary" style={{ marginLeft: '650px',marginTop:'10px' }}> Show More </button>

          </div>
      </div>
      
      {/* <div class="spikes">
        <MessengerCustomerChat
        pageId="100512945834708"  appId="758513578527305"
      />
    </div> */}
      <Footer />

    </>)
}


export default Home;