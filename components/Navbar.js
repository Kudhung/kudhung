import Link from "next/link"

const Navbar = () => (
    <header className="navbar">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="navbar__logo">
                        <a href="/"><h3 className="teks_Navbar" >KUDHUNG</h3></a>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                    <nav className="navbar__menu">
                        <ul>
                            <li><Link href="/"><a> Beranda </a></Link></li>
                            <li><Link href="/promo"><a>Promo2</a></Link></li>
                            <li><Link href="/promo"><a>Promo</a></Link></li>
                            <li style={{ cursor: "pointer" }}><a>Kudhung Collection</a>
                                <ul className="dropdown">
                                    <li><Link href="/pashmina"><a>Pashmina</a></Link></li>
                                    <li><Link href="/square"><a>Square</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href="/about"><a>About</a></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>


)
export default Navbar