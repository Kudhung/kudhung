import LayoutAdmin from "../../components/Layout_Admin"

const AdminHome = () => {
    return (
        <LayoutAdmin>
            <div className="container">
                <h3 className="section_title_post" style={{ marginTop: "5%", textAlign: "center",marginBottom:"2%" ,marginLeft: "5%", marginRight: "-10%" }}>Welcome To Kudhung Admin</h3>
                <img src="/img/logo.jpeg" alt="Notebook" style={{ width: "40%",marginLeft:"38%",borderRadius:"50%" }} />
            </div>
        </LayoutAdmin>
    )
}

export default AdminHome