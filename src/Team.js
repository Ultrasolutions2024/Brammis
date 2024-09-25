import React from 'react'
import team1 from './assets/images/team/1.jpg'
import team2 from './assets/images/team/2.jpg'
import team3 from './assets/images/team/3.jpg'
import team4 from './assets/images/team/4.jpg'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
function Team() {
  return (
    <>
    <section className="bg-05">
    <div className="shape-03" />
    <div className="shape-04" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="heading">
            <span style={{fontSize:"40px",fontWeight:"bold"}}>Team</span>
            <h2>Explore Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores officiis explicabo blanditiis consequuntur fugit
              fugiat, incidunt totam consectetur veritatis minus corporis
              doloribus, qui maxime velit nesciunt, officia praesentium odit
              facilis.
            </p>
          </div>
        </div>
        <div className="main-team-card d-flex">
          <div className="team-setup">
            <div className="team-items">
              <div className="team-user">
                <img src={team1} alt='img' />
              </div>
              <div className="team-user-social">
                <ol>
                  <li>
                    <i className="flaticon-facebook" ><FaFacebook style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                  {/* <li>
                    <i className="flaticon-twitter" ><RiTwitterXLine style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li> */}
                  <li>
                    <i className="flaticon-behance" ><FaWhatsapp style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                </ol>
              </div>
              <div className="team-name">
                <h2>Mark Anthony</h2>
                <b>Founder &amp; CEO</b>
              </div>
            </div>
          </div>
          <div className="team-setup">
            <div className="team-items">
              <div className="team-user">
                <img src={team2} alt='img' />
              </div>
              <div className="team-user-social">
                <ol>
                <li>
                    <i className="flaticon-facebook" ><FaFacebook style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                  {/* <li>
                    <i className="flaticon-twitter" ><RiTwitterXLine style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li> */}
                  <li>
                    <i className="flaticon-behance" ><FaWhatsapp style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                </ol>
              </div>
              <div className="team-name">
                <h2>Jessica Lee</h2>
                <b>Chinese Kitchen Lead</b>
              </div>
            </div>
          </div>
          <div className="team-setup">
            <div className="team-items">
              <div className="team-user">
                <img src={team3} alt='img'/>
              </div>
              <div className="team-user-social">
                <ol>
                <li>
                    <i className="flaticon-facebook" ><FaFacebook style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                  {/* <li>
                    <i className="flaticon-twitter" ><RiTwitterXLine style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li> */}
                  <li>
                    <i className="flaticon-behance" ><FaWhatsapp style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                </ol>
              </div>
              <div className="team-name">
                <h2>John Bennett</h2>
                <b>French Kitchen Lead</b>
              </div>
            </div>
          </div>
          <div className="team-setup">
            <div className="team-items">
              <div className="team-user">
                <img src={team4} alt='img' />
              </div>
              <div className="team-user-social">
                <ol>
                <li>
                    <i className="flaticon-facebook" ><FaFacebook style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                  {/* <li>
                    <i className="flaticon-twitter" ><RiTwitterXLine style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li> */}
                  <li>
                    <i className="flaticon-behance" ><FaWhatsapp style={{fontSize:"26px",textAlign:"center",marginBottom:"3PX"}}/></i>
                  </li>
                </ol>
              </div>
              <div className="team-name">
                <h2>ANDERSON JHON</h2>
                <b>Sous Chef</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
  )
}

export default Team