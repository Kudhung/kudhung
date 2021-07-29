import prisma from "../../../../../client.ts"
import LayoutAdmin from "../../../../../components/Layout_Admin";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListGmbrPromo from "../../../../../components/AdminGambarPromo";
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambarpromo.findMany();
    const dataPromo = await prisma.promo.findMany();
    const dataWarna = await prisma.warna.findMany();
    let kode = context.params.kode;
    let data = await prisma.gambarpromo.findUnique({
        where: { idGmbrpromo: Number(kode) },
    });

    let { idGmbrpromo, urlGmbrpromo, promoId, ketPromo } = data;
    return { props: { idGmbrpromo, urlGmbrpromo, ketPromo, promoId, daftarGambar, dataPromo, dataWarna } };
};

const UpdateGambarPromo = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (<form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
        < div className="form-group row" style={{ marginBottom: "5%" }}>
            <div className=" col-lg-3">
                <label htmlFor="">Masukkan URL Gambar</label>
                <input
                    {...register('urlGmbrpromo', { required: true })}
                    className="form-control"
                    type="text"
                    id="urlGmbrpomo"
                    placeholder="New URL"
                    style={{ height: "45px", width: "250px" }}
                    value={props.gmbrPromo}
                    onChange={(Event) => props.setGmbrPromo(Event.target.value)}
                />
            </div>
            <div className=" col-lg-3" style={{ marginLeft: "10%" }}>
                <label htmlFor="">Jenis Promo</label>
                <select
                    className="form-control"
                    style={{ height: "45px", width: "250px" }}
                    {...register('promoId', { required: true })}>
                    {props.dataPromo.map((promo, i = 1) => (
                        <option key={i + 1} value={promo.idPromo}>{i + 1}. {promo.judulPromo}</option>
                    ))}
                </select>
            </div>
            <div className=" col-lg-3" style={{ marginLeft: "8%" }}>
                <label htmlFor="">Keterangan Gambar</label>
                <select
                    className="form-control"
                    style={{ height: "45px", width: "250px" }}
                    {...register('ketPromo', { required: true })}>
                    {props.dataWarna.map((warna, i = 1) => (
                        <option key={i + 1} value={warna.jenisColor}>{i + 1}. {warna.jenisColor}</option>
                    ))}
                </select>
            </div>
            <div className=" col-lg-3" style={{ marginTop: "-4.5%", marginLeft: "96%" }}>
                <button
                    className="btn btn-primary btn-sm btn-block  col-md-6"
                    type="submit" style={{ marginTop: "-8%" }}
                >
                    Update
                </button>
                <Link href="/admin/gallery/promo">
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "5%" }}
                    >
                        Cancel
                    </button>
                </Link>
            </div>
        </div>
    </form>
    )
}

const UpGambarPromo = (props) => {
    const [gmbrPromo, setGmbrPromo] = useState(props.urlGmbrpromo);
    const [idGambarpromo, setIdGambarPromo] = useState(props.idGmbrPromo);
    const [urlGambarpromo, setUrlGmbrPromo] = useState(props.urlGmbrpromo);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>List URL Gambar</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <UpdateGambarPromo
                                dataPromo={props.dataPromo}
                                dataWarna={props.dataWarna}
                                gmbrPromo={gmbrPromo}
                                setGmbrPromo={setGmbrPromo}
                                onSubmit={async (data, event) => {
                                    const gambar = { urlGmbrpromo: data.urlGmbrpromo, idGmbrpromo: props.idGmbrpromo, promoId: data.promoId, ketPromo: data.ketPromo };
                                    try {
                                        const respon = await fetch('/api/gallery/promo/update', {
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
                                }}
                            />
                            <ListGmbrPromo daftarGambar={props.daftarGambar} hidden={true} Gmbrpromo={idGambarpromo} setGmbrPromo={setIdGambarPromo} urlGmbrpromo={urlGambarpromo} setUrlGmbrpromo={setUrlGmbrPromo} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default UpGambarPromo;