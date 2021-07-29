import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-8" style={{ marginLeft: "0%" }}>
                    <div className="footer__about">
                        <h6 style={{ color: "#111111", fontWeight: "bolder", textTransform: "uppercase", marginBottom: "12px", textAlign: "center" }} >KUDHUNG</h6>
                        <ul>
                            <li style={{ listStyle: "none", textAlign: "justify", marginLeft: "10%", marginRight: "10%" }}>Kudhung merupakan start up yang bergerak di bidang Hijab. Menyediakan berbagai macam hijab sesuai dengan kebutuhan muslimah dan memberikan kualitas serta pelayanan yang baik dan cepat</li>
                        </ul>

                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1">
                    <div className="footer__widget">
                        <h6>link</h6>
                        <ul>
                            <li><Link href="/promo"><a>Promo</a></Link></li>
                            <li><Link href="/pashmina"><a>Pashmina</a></Link></li>
                            <li><Link href="/square"><a>Sqaure</a></Link></li>
                            <li><Link href="/about"><a>About Kudhung</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-2">
                    <div className="footer__widget">
                        <h6>Find Us On </h6>
                        <div className="footer__social">
                            <a onClick={()=>(
                                window.open('https://www.youtube.com/channel/UC7sBMEcQitsqxhSzi4eUjGg','_blank')
                            )}><FontAwesomeIcon icon={faYoutube} size="xs" /></a>
                           <a onClick={()=>(
                                window.open('https://instagram.com/kudhu.ng?utm_medium=copy_link','_blank')
                            )}><FontAwesomeIcon icon={faInstagram} size="xs" /></a>
                            <a onClick={()=>(
                                window.open('https://web.whatsapp.com/send' + '?phone=' + '6283857247099','_blank')
                            )}><FontAwesomeIcon icon={faWhatsapp} size="xs" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

)
export default Footer