import LayoutAdmin from '../../../../components/Layout_Admin';
import { useForm } from 'react-hook-form'
import prisma from '../../../../client.ts'
import React, { useState } from "react";
import ListGambarProduk from "../../../../components/AdminGambarProduk";

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambarproduk.findMany();
    const dataProduk = await prisma.produk.findMany();
    const dataWarna = await prisma.warna.findMany();
    return { props: { daftarGambar, dataProduk, dataWarna } }
}

const FormGambar = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-lg-3">
                    <label htmlFor="">Masukkan URL Gambar
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.urlGmbrproduk?.type === 'required' && "(Masukkan URL Gambar)"}
                        </p>
                    </label>
                    <input
                        {...register('urlGmbrproduk', { required: true })}
                        className="form-control"
                        type="text"
                        id="urlgambarproduk"
                        placeholder="URL Gambar"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>
                <div className=" col-lg-3" style={{ marginLeft: "8%" }}>
                    <label htmlFor="">Jenis Produk
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.idProduk?.type === 'required' && "(Masukkan jenis produk)"}
                        </p>
                    </label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register('idProduk', { required: true })}>
                        {props.dataProduk.map((produk,i=1) => (
                            <option key={i+1} value={produk.id}>{i+1}. {produk.jenisProduk}</option>
                        ))}
                    </select>
                </div>
                <div className=" col-lg-3" style={{ marginLeft: "8%" }}>
                    <label htmlFor="">Keterangan Gambar
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.ketGmbr?.type === 'required' && "(Masukkan keterangan gambar)"}
                        </p>
                    </label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register('ketGmbr', { required: true })}>
                        {props.dataWarna.map((warna,i=1) => (
                            <option key={i+1} value={warna.jenisColor}>{i+1}. {warna.jenisColor}</option>
                        ))}
                    </select>
                </div>
                <div className=" col-lg-3" style={{ marginTop: "-2.5%", marginLeft: "95%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </form>
    )
}

const AdminGambar = (props) => {
    const [daftarGambar, setDaftarGambar] = useState(props.daftarGambar)
    const [idGmbr, setIdGmbr] = useState(props.idGmbrProduk);
    const [urlGmbr, setUrlGmbr] = useState(props.urlGmbrproduk);
    const [ketGmbr, setKetGmbr] = useState(props.ketGmbr);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>Galeri Gambar</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormGambar
                                dataProduk={props.dataProduk}
                                dataWarna={props.dataWarna}
                                onSubmit={async (data, event) => {
                                    const gambar = { urlGmbrproduk: data.urlGmbrproduk, ketGmbr: data.ketGmbr, idProduk: data.idProduk };
                                    try {
                                        const respon = await fetch('/api/gallery/product/post', {
                                            method: 'POST',
                                            body: JSON.stringify(gambar),
                                        });
                                        if (!respon.ok) throw new Error(respon.statusText);
                                        let status = await respon.json();
                                        if (status !== null) {
                                            event.target.reset();
                                            setDaftarGambar([...daftarGambar, gambar]);
                                            location.reload()
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            />
                            <ListGambarProduk daftarGambar={props.daftarGambar} idGmbr={idGmbr} setIdGmbr={setIdGmbr} urlGmbr={urlGmbr} setUrlGmbr={setUrlGmbr} ketGmbr={ketGmbr} setKetGmbr={setKetGmbr} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminGambar