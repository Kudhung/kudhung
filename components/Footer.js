import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-8" style={{marginLeft:"0%"}}>
                    <div className="footer__about">
                        <h6 style={{ color: "#111111", fontWeight: "bolder", textTransform: "uppercase", marginBottom: "12px", textAlign:"center"}} >KUDHUNG</h6>
                        <ul>
                            <li style={{ listStyle: "none", textAlign: "justify", marginLeft: "10%", marginRight: "10%" }}>Kudhung merupakan start up yang bergerak di bidang Hijab. Menyediakan berbagai macam hijab sesuai dengan kebutuhan muslimah dan memberikan kualitas serta pelayanan yang baik dan cepat</li>
                        </ul>

                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1">
                    <div className="footer__widget">
                        <h6>link</h6>
                        <ul>
                            <li><a href=".">Collection</a></li>
                            <li><a href=".">Promo</a></li>
                            <li><a href=".">Limited Edition</a></li>
                            <li><a href=".">About Kudhung</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-2">
                    <div className="footer__widget">
                        <h6>Find Us On </h6>
                        <div className="footer__social">
                            <a href="."><FontAwesomeIcon icon={faFacebook} size="xs" /></a>
                            <a href="."><FontAwesomeIcon icon={faYoutube} size="xs" /></a>
                            <a href="."><FontAwesomeIcon icon={faInstagram} size="xs" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

)
export default Footer