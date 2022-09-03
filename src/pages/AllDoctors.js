import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function AllDoctors() {



  const [doc_data, setdoc_data] = useState([]);

  useEffect(() => {
    axios.get(`https://care-ap.herokuapp.com/api/`)

      .then((res) => setdoc_data(res.data))
      .catch((err) => console.log(err))
  }, [])





  return (
    <>
      <link rel="stylesheet" href="assets/css/Care.css" />

      <div className="team" id="Top_Doctors">
        <div class="container">
          {doc_data.map((docs) => {
            const imagepath = `https://care-ap.herokuapp.com${docs.image}`
            return (
              <div>
                <div class="box">
                  <div class="data">
                  <Link to = {`/doctordetail/${docs.user}`}>
                <img src={imagepath} width="270px" alt="imge" /></Link>
                  </div>

                  <div class="info">
                    <h3 style={{marginTop:'8px'}}>DR.{docs.user}</h3>
                    <p style={{fontSize:'20px'}}>{docs.doctor}</p>
                    <p classname="text" style={{ position: 'absolute', top: '1px', marginRight:'16px', fontSize: '20px', color: 'yellow' }}>
                    <FontAwesomeIcon icon={faStar}style={{margin: '0 7px 0 0'}} />
                      {docs.avg}</p>

                  </div>
                </div>
              </div>
            )

          })
          }
        </div>
      </div>


    </>)
}

export default AllDoctors;