import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadphones, faMapMarker, faPhone, faIcons } from '@fortawesome/free-solid-svg-icons'
import {faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import MainLayout from '../components/Main_Layout'
import Link from 'next/link'

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
                      <img src="img/team/ceo.png" alt="Septiany"  style={{height:"260px"}}/>
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Septiany Diyah Ayu K.A</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CEO </h6>
                        <p className="title"> Chief Executive Officer</p>
                        <p style={{fontSize:"12px"}}>septiany.amalia@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="column ">
                    <div className="card">
                      <img src="img/team/cfo.jpeg" alt="Silva" style={{height:"260px"}}/>
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Silva Setianingrum</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CFO </h6>
                        <p className="title">Chief Financial Officer</p>
                        <p style={{fontSize:"12px"}}>silvasetia19@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <img src="img/team/cmo.png" alt="Riska" style={{height:"260px"}} />
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Riska Aulia Nur Ardiyanti</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CMO </h6>
                        <p className="title">Credit Marketing Officer</p>
                        <p style={{fontSize:"12px"}}>riskaaulion0102@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <img src="img/team/cto.png" alt="Devanty" style={{height:"260px"}} />
                      <div className="container">
                        <h6 style={{ fontSize: "25px" }}>Devanty Ika Sanjaya Putri</h6>
                        <h6 className="title" style={{ color: "black", fontWeight: "bold", paddingTop: "10px" }}>  CTO </h6>
                        <p className="title">Chief Technology Officer</p>
                        <p style={{fontSize:"12px"}}>devantyikasanjayaputri@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__content">
                <div className="contact__address">
                  <h5 style={{marginLeft:"10%"}}>Contact info</h5>
                  <ul style={{ marginLeft:"5%"}}>
                    <li >
                      <h6 style={{fontSize:"20px"}}><FontAwesomeIcon  className="fontawesome" icon={faMapMarker} style={{ color: "red",marginRight:"4px"}} /> Address </h6>
                      <p>Jl. Jenderal Ahmad Yani No.80, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416</p>
                    </li>
                    <li>
                      <h6 style={{fontSize:"20px"}}><FontAwesomeIcon icon={faPhone} className="fontawesome" style={{ color: "red",marginRight:"4px"}} />  Phone</h6>
                      <p><span>08113506655</span><span>083857247099</span></p>
                    </li>
                    <li>
                      <h6 style={{fontSize:"20px"}}><FontAwesomeIcon icon={faHeadphones} className="fontawesome" style={{ color: "red",marginRight:"4px"}} />  Support </h6>
                      <a>kudhung.bwi@gmail.com</a>
                    </li>
                    <li>
                      <h6 style={{fontSize:"20px"}}><FontAwesomeIcon icon={faIcons} className="fontawesome" style={{ color: "red",marginRight:"4px"}} /> Social Media </h6>

                      <ul style={{ marginTop: "2%", marginLeft: "-3%" }} className="breadcrumb__links">
                        <li>
                          <FontAwesomeIcon icon={faYoutube} style={{ color: "black", width:"5%", marginRight: "10px",marginRight:"4px"}} />
                          <a href="https://www.youtube.com/channel/UC7sBMEcQitsqxhSzi4eUjGg">Kudhung Bwi</a>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faInstagram} style={{ color: "black", width:"5%", marginRight: "10px",marginRight:"4px"}} />
                          <Link href="https://instagram.com/kudhu.ng?utm_medium=copy_link"><a>Kudhung_Bwi_Official</a></Link>
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "black", width:"5%", marginRight: "10px",marginRight:"4px"}} />
                          <a onClick={()=>(
                                window.open('https://web.whatsapp.com/send' + '?phone=' + '6283857247099','_blank')
                            )}>Kudhung</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </MainLayout>
  )

export default About