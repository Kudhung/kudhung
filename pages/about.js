import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadphones, faMapMarker, faPhone, faIcons } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import MainLayout from '../components/Main_Layout'

const About = () => (
      <MainLayout>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__content contact__address ">
                <h5 style={{ textAlign: "unset" }}>KUDHUNG</h5>
                <p className="deskripsi_kudhung">Kudhung merupakan start up yang bergerak di bidang Hijab. Menyediakan berbagai macam hijab sesuai dengan kebutuhan muslimah dan memberikan kualitas serta pelayanan yang baik dan cepat </p>
              </div>
              <div className="contact__content contact__address ">
                <h5 style={{ textAlign: "unset" }}>TEAM KUDHUNG</h5>
                <div className="row">
                  <div className="column">
                    <div className="card">
                      <img src="img/pashmina/pash.jpeg" className="image_team" alt="Jane" />
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Septiany Diyah Ayu K.A</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CEO </h6>
                        <p className="title"> Chief Executive Officer</p>
                        <p>example@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="column ">
                    <div className="card">
                      <img src="img/pashmina/pash.jpeg" className="image_team" alt="Jane" />
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Silva Setianingrum</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CFO </h6>
                        <p className="title">Chief Financial Officer</p>
                        <p>example@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <img src="img/pashmina/pash.jpeg" className="image_team" alt="Jane" />
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Riska Aulia Nur Ardiyanti</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CMO </h6>
                        <p className="title">Credit Marketing Officer</p>
                        <p>example@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <img src="img/pashmina/pash.jpeg" className="image_team" alt="Jane" />
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Devanty Ika Sanjaya Putri</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CTO </h6>
                        <p className="title">Chief Technology Officer</p>
                        <p>example@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__content">
                <div className="contact__address">
                  <h5 style={{ textAlign: "unset" }}>Contact info</h5>
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      <h6 style={{fontSize:"15px"}} className="fontawesome_about" ><FontAwesomeIcon icon={faMapMarker} style={{ color: "red" }} /> Address </h6>
                      <p>Jl. Jenderal Ahmad Yani No.80, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416</p>
                    </li>
                    <li>
                      <h6><FontAwesomeIcon icon={faPhone} className="fontawesome" style={{ color: "red", fontSize: "28px" }} />  Phone</h6>
                      <p><span>08113506655</span><span>083847549013</span></p>
                    </li>
                    <li>
                      <h6><FontAwesomeIcon icon={faHeadphones} className="fontawesome" style={{ color: "red", fontSize: "28px" }} />  Support </h6>
                      <p>kudhung.bwi@gmail.com</p>
                    </li>
                    <li>
                      <h6><FontAwesomeIcon icon={faIcons} className="fontawesome" style={{ color: "red", fontSize: "28px" }} /> Social Media </h6>

                      <ul style={{ marginTop: "5%", marginLeft: "-4%" }} className="breadcrumb__links">
                        <li>
                          <FontAwesomeIcon icon={faFacebook} style={{ color: "black", fontSize: "19px", marginRight: "10px" }} />
                          <a href=".">kudhung.bwi@gmail.com</a>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faYoutube} style={{ color: "black", fontSize: "19px", marginRight: "10px" }} />
                          <a href="https://www.youtube.com/channel/UC7sBMEcQitsqxhSzi4eUjGg">Kudhung Bwi</a>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faInstagram} style={{ color: "black", fontSize: "19px", marginRight: "10px" }} />
                          <a href=".">Kudhung_Bwi_Official</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="contact__form">
                  <h5 style={{ textAlign: "unset" }}>SEND MESSAGE</h5>
                  <form action="#" style={{ marginLeft: "10%" }}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="site-btn">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </MainLayout>
  )

export default About