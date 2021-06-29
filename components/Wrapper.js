const Wrapper = () => (
    <div className="wrapper">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <nav className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="header__logo">
                        <a href="."><h3 className="nav-title_admin" >KUDHUNG ADMIN</h3></a>
                    </div>
                </div></div>
        </nav>

        <aside className="sidebar_admin">
            <ul className="menu-content">
                <li className="sidebar-menu"><a href="/admin"><i className="fa fa-home"></i> Home </a></li>
                <li className="sidebar-menu"><a href="/admin/kategori"><i className="fa fa-shopping-basket"></i>  Kategori </a></li>
                <li className="sidebar-menu"><a href="."><i className="fa fa-shopping-basket"></i>  Gambar </a></li>
                <li className="sidebar-menu"><a href="."><i className="fa fa-shopping-basket"></i>  Warna </a></li>
                <li className="sidebar-menu"><a href="/admin/kategori&warna"><i className="fa fa-shopping-basket"></i> Coba Kategori & Warna </a></li>
            </ul>
        </aside>
        </div>


)
export default Wrapper