import LayoutAdmin from "../../../components/Layout_Admin";
import { useForm } from 'react-hook-form'
import prisma from '../../../client.ts'
import React, { useState } from "react";
import ListGambar from "../../../components/AdminGambar";

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambar.findMany();
    const dataProduk = await prisma.produk.findMany();
    const dataPromo = await prisma.promo.findMany();
    return { props: { daftarGambar, dataProduk, dataPromo } }
}

const FormGambar = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-3">
                    <label htmlFor="">Masukkan Url </label>
                    <input
                        {...register('urlGmbr', { required: true })}
                        className="form-control"
                        type="text"
                        id="urlgambar"
                        placeholder="URL Gambar"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>

                <div className=" col-md-3" style={{ marginLeft: "2%" }}>
                    <label htmlFor="">Jenis Produk </label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register('idProduk', { required: true })}>

                        {props.dataProduk.map((produk) => (
                            <option key={produk.id} value={produk.id}>{produk.id}. {produk.jenisProduk}</option>
                        ))}

                    </select>
                </div>

                <div className=" col-md-3" style={{ marginLeft: "2%" }}>
                    <label htmlFor="">Jenis Promo </label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register("promoId", { required: true })}>
                        {props.dataPromo.map((promo) => (
                            <option key={promo.idPromo} value={promo.idPromo}>{promo.idPromo}. {promo.judulPromo}</option>
                        ))}
                    </select>
                </div>

                <div className=" col-md-3" style={{ marginTop: "-2.5%", marginLeft: "82%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}>Simpan
                    </button>
                </div>
            </div>
        </form>
    )
}

const AdminGambar = (props) => {
    const [daftarGambar, setDaftarGambar] = useState(props.daftarGambar)
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>List URL Gambar</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormGambar
                                dataProduk={props.dataProduk} dataPromo={props.dataPromo}

                                onSubmit={async (data, event) => {
                                    const gambar = { urlGmbr: data.urlGmbr, idProduk: data.idProduk, promoId: data.promoId };

                                    try {
                                        const respon = await fetch('/api/gambar/post', {
                                            method: 'POST',
                                            body: JSON.stringify(gambar),
                                        });

                                        if (!respon.ok) throw new Error(respon.statusText);
                                        let status = await respon.json();
                                        if (status !== null) {
                                            event.target.reset();
                                            setDaftarGambar([...daftarGambar, gambar]);
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            />

                                <ListGambar daftarGambar={props.daftarGambar}/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminGambar