import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import LayoutAdmin from '../../components/Layout_Admin'

function My_Function() 
{
    alert("Hallo")
}

const Admin = () => (
    <LayoutAdmin>

        <section className="content">
            <h3 className="section_title_post" style={{ marginTop: "1%" }}>TAMBAH PRODUCT</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "20%", marginRight: "20%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Produk</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Produk Name"
                            style={{ height: "45px" }}
                            onClick={My_Function}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Harga</label><input
                            className="form-control"
                            type="text"
                            placeholder="Price"
                            style={{ height: "45px" }}
                            onClick={My_Function}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Gambar Utama</label><textarea
                            className="form-control"
                            placeholder="Url Gambar"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }} 
                            onClick={My_Function} 
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Deskripsi</label><textarea
                            className="form-control"
                            placeholder="Description"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            onClick={My_Function} 
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Kategori</label><select
                            className="form-control"
                            placeholder="Jenis"
                            style={{ height: "45px" }}
                        >
                            <option>Pashmina</option>
                            <option>Square</option>
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Label Collection</label><select
                            className="form-control"
                            placeholder="Jenis"
                            style={{ height: "45px" }}
                        >
                            <option>Label Produk</option>
                            <option>New Produk</option>
                            <option>Limited Stock</option>
                            <option>Pre-Order</option>
                        </select>
                    </div>
                    
                    <div className="form-group col-md-6">
                        <label htmlFor="">Warna</label><select
                            className="form-control"
                            placeholder="Pilih Warna"
                            style={{ height: "45px" }}
                        >
                            <option>Label Produk</option>
                            <option>New Produk</option>
                            <option>Limited Stock</option>
                            <option>Pre-Order</option>
                        </select>
                        <ul>
                            <div style={{ textAlign: "left", marginTop: "2px" }}>
                                <button style={{ marginRight: "5px", textAlign: "left", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Abu - Abu Muda <FontAwesomeIcon icon={faTimes} style={{ width: "8px", textAlign: "right", marginTop: "-2%", marginLeft: "8px" }} /></button>

                                <button style={{ marginRight: "5px", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textAlign: "left", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Coklat Susu <FontAwesomeIcon icon={faTimes} style={{ width: "8px", textAlign: "right", marginTop: "-2%", marginLeft: "8px" }} /></button>

                                <button style={{ marginRight: "5px", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textAlign: "left", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Navy <FontAwesomeIcon icon={faTimes} style={{ width: "8px", marginTop: "-2%", marginLeft: "8px" }} /></button>

                                <button style={{ marginRight: "5px", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textAlign: "left", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Coklat <FontAwesomeIcon icon={faTimes} style={{ width: "8px", marginTop: "-2%", marginLeft: "8px" }} /></button>

                            </div>
                        </ul>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Foto-Foto Produk</label><input
                            className="form-control"
                            type="text"
                            placeholder="Url Foto"
                            style={{ height: "45px" }}
                            onClick={My_Function}
                        />
                        <ul>
                            <div style={{ textAlign: "left", marginTop: "2px" }}>
                                {/* Looping Nanti */}
                                <label htmlFor=""><textarea  onClick={My_Function} value="https://firebasestorage.googleapis.com/v0/b/fotoproduk-91958.appspot.com/o/pas-ceruty.jpg?alt=media&token=f750d244-e331-43dd-99cf-771604abeaf9" style={{ marginRight: "5px", textAlign: "left", width: "340px", height: "50px", resize: "none" }} disabled></textarea><button style={{ display: "contents" }} onClick={My_Function} ><FontAwesomeIcon icon={faTimes} style={{ width: "8px", textAlign: "right", marginTop: "-12%", marginLeft: "8px" }} /></button></label>

                                <label htmlFor=""><textarea onClick={My_Function}  value="https://firebasestorage.googleapis.com/v0/b/fotoproduk-91958.appspot.com/o/pas-ceruty.jpg?alt=media&token=f750d244-e331-43dd-99cf-771604abeaf9" style={{ marginRight: "5px", textAlign: "left", width: "340px", height: "50px", resize: "none" }} disabled></textarea><button style={{ display: "contents" }} onClick={My_Function} ><FontAwesomeIcon icon={faTimes} style={{ width: "8px", textAlign: "right", marginTop: "-12%", marginLeft: "8px" }} /></button></label>
                            </div>
                        </ul>
                    </div>

                    {/* <div className="form-group col-md-6">
                        <label htmlFor="">Warna</label><input
                            className="form-control"
                            type="text"
                            placeholder="Color"
                            style={{ height: "45px" }}
                            onClick={My_Function}
                        />
                        <ul>
                            <div style={{ textAlign: "left", marginTop: "2px" }}>
                                Looping Nanti
                                <button style={{ marginRight: "5px", textAlign: "left", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Abu - Abu Muda <FontAwesomeIcon icon={faTimes} style={{ width: "8px", textAlign: "right", marginTop: "-2%", marginLeft: "8px" }} /></button>

                                <button style={{ marginRight: "5px", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textAlign: "left", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Coklat Susu <FontAwesomeIcon icon={faTimes} style={{ width: "8px", textAlign: "right", marginTop: "-2%", marginLeft: "8px" }} /></button>

                                <button style={{ marginRight: "5px", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textAlign: "left", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Navy <FontAwesomeIcon icon={faTimes} style={{ width: "8px", marginTop: "-2%", marginLeft: "8px" }} /></button>

                                <button style={{ marginRight: "5px", marginTop: "2%", border: "solid 1px black", backgroundColor: "white", fontSize: "14px", textAlign: "left", textTransform: "capitalize", color: "black" }} onClick={My_Function} > Coklat <FontAwesomeIcon icon={faTimes} style={{ width: "8px", marginTop: "-2%", marginLeft: "8px" }} /></button>

                            </div>
                        </ul>
                    </div> */}

                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="button" style={{ marginLeft: "25%", marginTop: "5%" }} onClick={My_Function}
                    >Simpan</button>
                </div>
            </div>
        </section>


        <section className="content_post">
            <h3 className="section_title_post">LIST PRODUCT</h3>
            <div className="container">
                <div className="py-3 px-0">
                    <div className="row">
                        <div className="post_post col-md-5">
                            <div className="content_post">
                                <p className="id">ID Produk : 09654892748</p>
                                <p className="title_post">Pashmina Premium</p>
                                <p className="title_post" style={{ fontSize: "10px", color: "black" }}>New Produk</p>
                                <div className="img_produk">
                                    <img src="https://placeimg.com/300/150/tech" alt="dumy" />
                                </div>
                                <p className="price_post" >Rp. 800.000</p>
                                <p className="warna" >Warna Tersedia : <b> Orange, Abu-Abu, Hitam</b></p>
                                <p className="collection">Kategori : <b> Pashmina </b></p>
                                <p className="desc_post">Pashmina adalah jenis wol kashmir sempurna dan tekstil yang terbuat dari wol tersebut dan pertama kali ditenun di India. </p>
                                <hr />
                                <div className="div_button_post">
                                    <button className="button_update_post" onClick={My_Function} >Update</button>
                                    <button className="button_remove_post" onClick={My_Function} >Remove</button>
                                </div>
                            </div>
                        </div>

                        <div className="post_post col-md-5">
                            <div className="content_post">
                                <p className="id">ID Produk : 09654892748</p>
                                <p className="title_post">Pashmina Premium</p>
                                <p className="title_post" style={{ fontSize: "10px", color: "black" }}>New Produk</p>
                                <div className="img_produk">
                                    <img src="https://placeimg.com/300/150/tech" alt="dumy" />
                                </div>
                                <p className="price_post" >Rp. 800.000</p>
                                <p className="warna" >Warna Tersedia : <b> Orange, Abu-Abu, Hitam</b></p>
                                <p className="collection">Kategori : <b> Pashmina </b></p>
                                <p className="desc_post">Pashmina adalah jenis wol kashmir sempurna dan tekstil yang terbuat dari wol tersebut dan pertama kali ditenun di India. </p>
                                <hr />
                                <div className="div_button_post">
                                    <button className="button_update_post" onClick={My_Function} >Update</button>
                                    <button className="button_remove_post" onClick={My_Function} >Remove</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </LayoutAdmin>

)
export default Admin