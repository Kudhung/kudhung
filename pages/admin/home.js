// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'
import LayoutAdmin from '../../components/Layout_Admin'
import { useForm } from 'react-hook-form'
import prisma from '../../client.ts'
import React, { useState } from "react";

export async function getServerSideProps(context) {
    const daftarProduk = await prisma.produk.findMany();
    const dataKategori = await prisma.kategori.findMany();
    const dataWarna = await prisma.warna.findMany();
    return { props: { daftarProduk, dataKategori, dataWarna } }
}

const FormAdmin = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="content" onSubmit={handleSubmit(props.onSubmit)}>
            <h3 className="section_title_post" style={{ marginTop: "1%" }}>TAMBAH PRODUCT</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "20%", marginRight: "20%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Produk</label>
                        <input
                            {...register('jenisProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Produk Name"
                            style={{ height: "45px" }} />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Harga</label><input
                            {...register('hargaProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Price"
                            style={{ height: "45px" }} />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Gambar Utama</label><textarea
                            {...register('gambarProduk', { required: true })}
                            className="form-control"
                            placeholder="Url Gambar"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}

                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Deskripsi</label><textarea
                            {...register('deskripsiProduk', { required: true })}
                            className="form-control"
                            placeholder="Description"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        /> </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Kategori</label><select
                            {...register('kategoriProduk', { required: true })}
                            className="form-control"
                            placeholder="Jenis"
                            style={{ height: "45px" }}
                        >
                            {props.dataKategori.map((kategori, nomor = 1) => (
                                <option value={kategori.idKtg} key={kategori.idKtg}>{nomor + 1}. {kategori.jenisKtg}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Label Produk</label><input
                            {...register('labelProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Label Produk"
                            style={{ height: "45px" }} />
                    </div>

                    <div className="form-group col-md-12 col-lg-12">
                        <label htmlFor="" style={{ textAlign: "center" }}>Warna</label>
                        {props.dataWarna.map((warna, nomor = 1) => (
                            <p className="col-lg-3 col-md-6" key={warna.idColor}>
                                <input type='checkbox' id={warna.idColor} value={warna.jenisColor} {...register('warnaProduk',{required:true})} /> {nomor + 1}. {warna.jenisColor}
                            </p>
                        ))}</div>

                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginLeft: "25%", marginTop: "5%" }}
                    >Simpan</button>
                </div>
            </div>
        </form>)
}

const Admin = (props) => {
    const [daftarProduk, setDaftarProduk] = useState(props.daftarProduk)
    return (
        <LayoutAdmin>
            <FormAdmin dataKategori={props.dataKategori} dataWarna={props.dataWarna}

                onSubmit={async (data, event) => {
                    const produk = {
                        jenisProduk: data.jenisProduk,
                        hargaProduk: data.hargaProduk,
                        deskripsiProduk: data.deskripsiProduk,
                        labelProduk: data.labelProduk,
                        gambarProduk: data.gambarProduk,
                        kategoriProduk: data.kategoriProduk,
                        warnaProduk: data.warnaProduk
                    };

                    try {
                        const respon = await fetch('/api/produk/post', {
                            method: 'POST',
                            body: JSON.stringify(produk),
                        });

                        if (!respon.ok) throw new Error(respon.statusText);
                        let status = await respon.json();
                        if (status !== null) {
                            event.target.reset();
                            setDaftarProduk([...daftarProduk, produk]);
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }} />

            <section className="content_post">
                <h3 className="section_title_post">LIST PRODUCT</h3>
                <div className="container">
                    <div className="py-3 px-0">
                        <div className="row">
                            {daftarProduk.map((produk) => (
                                <div className="post_post col-md-5" key={produk.id}>
                                    <div className="content_post">
                                        <p className="title_post">{produk.jenisProduk}</p>
                                        <div className="img_produk">
                                            <img src={produk.gambarProduk} alt="Produk" className="img fluid img-thumbnail" style={{width:"250px"}} />
                                        </div>
                                        <p className="price_post" >{produk.hargaProduk}</p>
                                        <p className="desc_post">{produk.deskripsiProduk}</p>
                                        <hr />
                                        <div className="div_button_post">
                                            <button className="button_update_post"  >Update</button>
                                            <button className="button_remove_post"  >Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </LayoutAdmin>)
}
export default Admin