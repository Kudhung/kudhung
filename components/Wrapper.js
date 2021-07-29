import Link from 'next/link'

const Wrapper = () => (
    <div className="wrapper">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <nav className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="header__logo">
                        <Link href="/admin">
                            <a>
                                <h3 className="nav-title_admin" >KUDHUNG ADMIN</h3>
                            </a>
                        </Link>
                    </div>
                </div></div>
        </nav>

        <aside className="sidebar_admin">
            <ul className="menu-content">
                <li className="sidebar-menu">
                    <Link href='/admin/product'>
                        <a style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace" }}>
                            <i className="fa fa-product-hunt" style={{ marginLeft: "15%", fontSize: "20px", marginRight: "5%" }}></i>
                            Produk
                        </a>
                    </Link>
                </li>
                <li className="sidebar-menu">
                    <Link href='/admin/promo'>
                        <a style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace" }}>
                            <i className="fa fa-calendar" style={{ marginLeft: "15%", fontSize: "20px", marginRight: "5%" }}></i>
                            Promo
                        </a>
                    </Link>
                </li>
                <li className="sidebar-menu">
                    <Link href='/admin/gallery'>
                        <a style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace" }}>
                            <i className="fa fa-image" style={{ marginLeft: "15%", fontSize: "20px", marginRight: "5%" }}></i>
                            Gambar
                        </a>
                    </Link>
                </li>
                <li className="sidebar-menu">
                    <Link href='/admin/category'>
                        <a style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace" }}>
                            <i className="fa fa-list-alt" style={{ marginLeft: "15%", fontSize: "20px", marginRight: "5%" }}></i>
                            Kategori
                        </a>
                    </Link>
                </li>
                <li className="sidebar-menu">
                    <Link href='/admin/color'>
                        <a style={{ fontWeight: "bold", fontSize: "20px", fontFamily: "monospace" }}>
                            <i className="fa fa-paint-brush" style={{ marginLeft: "15%", fontSize: "20px", marginRight: "5%" }}></i>
                            Warna
                        </a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>

)
export default Wrapper