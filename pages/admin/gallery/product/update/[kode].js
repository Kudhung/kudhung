import prisma from "../../../../../client.ts"
import LayoutAdmin from "../../../../../components/Layout_Admin";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListGambarProduk from "../../../../../components/AdminGambarProduk";
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambarproduk.findMany();
    const dataProduk = await prisma.produk.findMany();
    const dataWarna = await prisma.warna.findMany();
    let kode = context.params.kode;
    let data = await prisma.gambarproduk.findUnique({
        where: { idGmbrproduk: Number(kode) },
    });
    let { idGmbrproduk, urlGmbrproduk, idProduk, ketGmbr } = data;
    return { props: { idGmbrproduk, urlGmbrproduk, idProduk, ketGmbr, daftarGambar, dataProduk,dataWarna } };
};

const UpdateGambarProduk = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (<form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
        < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-lg-3">
                    <label htmlFor="">Masukkan URL Gambar</label>
                    <input
                        {...register('urlGmbrproduk', { required: true })}
                        className="form-control"
                        type="text"
                        id="urlgambarproduk"
                        placeholder="URL Gambar"
                        style={{ height: "45px", width: "250px" }}
                        value={props.gmbrProduk}
                        onChange={(Event) => props.setGmbrProduk(Event.target.value)}
                    />
                </div>
                <div className=" col-lg-3" style={{ marginLeft: "8%" }}>
                    <label htmlFor="">Jenis Produk</label>
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
                    <label htmlFor="">Keterangan Gambar</label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register('ketGmbr', { required: true })}>
                        {props.dataWarna.map((warna,i=1) => (
                            <option key={i+1} value={warna.jenisColor}>{i+1}. {warna.jenisColor}</option>
                        ))}
                    </select>
                </div>
            <div className=" col-lg-3" style={{ marginTop: "-4.5%", marginLeft: "95%" }}>
                <button
                    className="btn btn-primary btn-sm btn-block  col-md-6"
                    type="submit" style={{ marginTop: "-8%" }}>Update
                </button>
                <Link href="/admin/gallery/product">
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "5%" }}>Cancel
                    </button>
                </Link>
            </div>
        </div>
    </form>
    )
}

const UpGambarProduk = (props) => {
    const [gmbrProduk, setGmbrProduk] = useState(props.urlGmbrproduk);
    const [idGmbr, setIdGmbr] = useState(props.idGmbrProduk);
    const [urlGmbr, setUrlGmbr] = useState(props.urlGmbrproduk);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>Galeri Produk</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <UpdateGambarProduk
                                dataProduk={props.dataProduk} dataWarna={props.dataWarna} gmbrProduk={gmbrProduk} setGmbrProduk={setGmbrProduk} onSubmit={async (data, event) => {
                                    const gambar = { urlGmbrproduk: data.urlGmbrproduk, idGmbrproduk: props.idGmbrproduk, idProduk: data.idProduk, ketGmbr:data.ketGmbr };
                                    try {
                                        const respon = await fetch('/api/gallery/product/update', {
                                            method: 'POST',
                                            body: JSON.stringify(gambar),
                                        });

                                        if (!respon.ok) throw new Error(respon.statusText);

                                        let status = await respon.json();

                                        if (status !== null) {
                                            event.target.reset();
                                            location.reload()
                                            window.history.back()
                                        }
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                                }
                            />

                            <ListGambarProduk daftarGambar={props.daftarGambar} hidden={true}  idGmbr={idGmbr} setIdGmbr={setIdGmbr} urlGmbr={urlGmbr} setUrlGmbr={setUrlGmbr}/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default UpGambarProduk;