import Link from 'next/link'

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
                <li className="sidebar-menu"><Link href='/admin/home'><a><i className="fa fa-shopping-basket"></i> Home </a></Link></li>
                <li className="sidebar-menu"> <Link href='/admin/kategori'><a ><i className="fa fa-shopping-basket"></i> Kategori </a></Link></li>
                <li className="sidebar-menu"><Link href='/admin/gambar'><a href="."><i className="fa fa-shopping-basket"></i>  Gambar </a></Link></li>
                <li className="sidebar-menu"><Link href='/admin/warna'><a href="."><i className="fa fa-shopping-basket"></i>  Warna </a></Link></li>
                <li className="sidebar-menu"><Link href='/admin/promo'><a href="."><i className="fa fa-shopping-basket"></i>  Promo </a></Link></li>
            </ul>
        </aside>
        </div>


)
export default Wrapper