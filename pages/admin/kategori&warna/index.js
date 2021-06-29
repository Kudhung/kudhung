import LayoutAdmin from "../../../components/Layout_Admin";

const KatNa = () => (
    <LayoutAdmin>
        <section className="content">
            <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft:"5%", marginRight:"-10%" }}>KATEGORI & WARNA</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <div className="form-group row" style={{marginBottom:"5%",width:"500px"}}>
                            <span style={{ marginTop: "-5%", marginBottom:"10%",fontSize: "20px", textAlign: "center", fontWeight: "bold", textDecoration: "underline", marginLeft: "35%" }}>List Kategori</span>
                            <div className=" col-md-6">
                            <label htmlFor="">Masukkan Kategori</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Categories Name"
                                style={{ height: "45px" }}
                            /></div>
                            <div className=" col-md-6">
                            <button
                                className="btn btn-primary btn-sm btn-block  col-md-6"
                                type="button" style={{marginTop:"17%"}}
                            >Simpan</button></div>
                        </div>
                        <div>
                            <table className="table table-striped " style={{ width: "500px" }}>
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>Id</th>
                                        <th>Jenis Kategori</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>1.</td>
                                        <td style={{ textAlign: "justify", maxWidth: "200px" }}>icbdwqc wochq d qd obovuhuhuer pa a djkdabycv cw didb wocbwcb d</td>
                                        <td className="div_button_post">
                                            <button className="button_update_post">Update</button>
                                            <button className="button_remove_post">Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div className="form-group row" style={{marginBottom:"5%",width:"500px"}}>
                            <span style={{ marginTop: "-5%", marginBottom:"10%",fontSize: "20px", textAlign: "center", fontWeight: "bold", textDecoration: "underline", marginLeft: "35%" }}>List Warna</span>
                            <div className=" col-md-6">
                            <label htmlFor="">Masukkan Warna</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Produk Name"
                                style={{ height: "45px" }}
                            /></div>
                            <div className=" col-md-6">
                            <button
                                className="btn btn-primary btn-sm btn-block  col-md-6"
                                type="button" style={{marginTop:"17%"}}
                            >Simpan</button></div>
                        </div>
                        <div>
                            <table className="table table-striped " style={{ width: "500px" }}>
                                <thead>
                                    <tr style={{ textAlign: "center" }}>
                                        <th>Id</th>
                                        <th>Warna</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>1.</td>
                                        <td style={{ textAlign: "justify", maxWidth: "200px" }}>icbdwqc wochq d qd obovuhuhuer pa a djkdabycv cw didb wocbwcb d</td>
                                        <td className="div_button_post">
                                            <button className="button_update_post">Update</button>
                                            <button className="button_remove_post">Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <section className="content">
        <h3 className="section_title_post" style={{ marginTop: "1%" }}>TAMBAH PRODUCT</h3>
        <div className="py-3 px-0" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
            
        <div className="card row">
                    <div className="card-body">
                        <table className="table table-striped col-md-6 " style={{width:"500px"}}>
                            <thead>
                                <tr style={{textAlign:"center"}}>
                                    <th>ID</th>
                                    <th>Collection</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td style={{textAlign:"center"}}>1.</td>
                                        <td style={{textAlign:"justify", maxWidth:"200px"}}>icbdwqc wochq d qd obovuhuhuer pa a djkdabycv cw didb wocbwcb d</td>
                                        <td className="div_button_post">
                                <button className="button_update_post">Update</button>
                                <button className="button_remove_post">Remove</button></td>
                                    </tr>
                            </tbody>
                        </table>
                        </div>

                        
                    <div className="card-body">
                        <table className="table table-striped col-md-6" style={{width:"500px"}}>
                            <thead>
                                <tr style={{textAlign:"center"}}>
                                    <th>ID</th>
                                    <th>Collection</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td style={{textAlign:"center"}}>1.</td>
                                        <td style={{textAlign:"justify", maxWidth:"200px"}}>icbdwqc wochq d qd obovuhuhuer pa a djkdabycv cw didb wocbwcb d</td>
                                        <td className="div_button_post">
                                <button className="button_update_post">Update</button>
                                <button className="button_remove_post">Remove</button></td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                </section> */}
    </LayoutAdmin>
)

export default KatNa