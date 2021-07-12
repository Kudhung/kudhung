import prisma from "../../../../../client.ts"
import LayoutAdmin from "../../../../../components/Layout_Admin";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListGambarProduk from "../../../../../components/AdminGambarProduk";
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambarproduk.findMany();
    const dataProduk = await prisma.produk.findMany();
    let kode = context.params.kode;
    let data = await prisma.gambarproduk.findUnique({
        where: { idGmbrproduk: Number(kode) },
    });

    let { idGmbrproduk, urlGmbrproduk, idProduk } = data;
    return { props: { idGmbrproduk, urlGmbrproduk, idProduk, daftarGambar, dataProduk } };
};

const UpdateGambarProduk = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (<form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
        < div className="form-group row" style={{ marginBottom: "5%" }}>
            <div className=" col-lg-3">
                <div className="col-lg-12">URL Baru</div>

                <input
                    {...register('urlGmbrproduk', { required: true })}
                    className="form-control"
                    type="text"
                    id="urlGmbrpoduk"
                    placeholder="New URL"
                    style={{ height: "45px", width: "250px" }}
                    value={props.gmbrProduk}
                    onChange={(Event) => props.setGmbrProduk(Event.target.value)}
                />
            </div>
            <div className=" col-lg-3" style={{ marginLeft: "10%" }}>
                <div className="col-lg-12">Jenis Produk</div>
                <select
                    className="form-control"
                    style={{ height: "45px", width: "250px" }}
                    {...register('idProduk', { required: true })}>
                    {props.dataProduk.map((produk) => (
                        <option key={produk.id} value={produk.id}>{produk.id}. {produk.jenisProduk}</option>
                    ))}

                </select>
            </div>
            <div className=" col-lg-3" style={{ marginTop: "-3.5%", marginLeft: "70%" }}>
                <button
                    className="btn btn-primary btn-sm btn-block  col-md-6"
                    type="submit" style={{ marginTop: "-8%" }}>Update
                </button>
            </div>
            <div className=" col-lg-3" style={{ marginTop: "-3.5%", marginLeft: "82%" }}>
                <Link href="/admin/gallery/product">
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}>Cancel
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
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>List URL Gambar</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <UpdateGambarProduk
                                dataProduk={props.dataProduk} gmbrProduk={gmbrProduk} setGmbrProduk={setGmbrProduk} onSubmit={async (data, event) => {
                                    const gambar = { urlGmbrproduk: data.urlGmbrproduk, idGmbrproduk: props.idGmbrproduk, idProduk: data.idProduk };
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