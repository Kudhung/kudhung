import LayoutAdmin from '../../../../components/Layout_Admin';
import { useForm } from 'react-hook-form'
import prisma from '../../../../client.ts'
import React, { useState } from "react";
import ListGmbrPromo from '../../../../components/AdminGambarPromo';

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambarpromo.findMany();
    const dataPromo = await prisma.promo.findMany();
    const dataWarna = await prisma.warna.findMany();
    return { props: { daftarGambar, dataPromo, dataWarna } }
}

const FormGambarPromo = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-3">
                    <label htmlFor="">Masukkan Url
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.urlGmbrpromo?.type === 'required' && "(Masukkan URL Gambar)"}
                        </p>
                    </label>
                    <input
                        {...register('urlGmbrpromo', { required: true })}
                        className="form-control"
                        type="text"
                        id="urlgambarpromo"
                        placeholder="URL Gambar"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>
                <div className=" col-md-3" style={{ marginLeft: "8%" }}>
                    <label htmlFor="">Jenis Promo
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.promoId?.type === 'required' && "(Masukkan jenis promo)"}
                        </p>
                    </label>
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
                    <label htmlFor="">Keterangan Gambar
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.ketPromo?.type === 'required' && "(Masukkan keterangan gambar)"}
                        </p>
                    </label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register('ketPromo', { required: true })}>
                        {props.dataWarna.map((warna, i = 1) => (
                            <option key={i + 1} value={warna.jenisColor}>{i + 1}. {warna.jenisColor}</option>
                        ))}
                    </select>
                </div>
                <div className=" col-md-4" style={{ marginTop: "-1.5%", marginLeft: "95%" }}>
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

const AdminGambarPromo = (props) => {
    const [daftarGambar, setDaftarGambar] = useState(props.daftarGambar)
    const [Gmbrpromo, setGmbrPromo] = useState(props.idGmbrPromo);
    const [urlGmbrpromo, setUrlGmbrpromo] = useState(props.urlGmbrpromo);
    const [ketPromo, setKetPromo] = useState(props.ketPromo);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>Galeri Promo</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormGambarPromo
                                dataPromo={props.dataPromo}
                                dataWarna={props.dataWarna}
                                onSubmit={async (data, event) => {
                                    const gambar = { urlGmbrpromo: data.urlGmbrpromo, ketPromo: data.ketPromo, promoId: data.promoId };
                                    try {
                                        const respon = await fetch('/api/gallery/promo/post', {
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
                            <ListGmbrPromo daftarGambar={props.daftarGambar} Gmbrpromo={Gmbrpromo} setGmbrPromo={setGmbrPromo} urlGmbrpromo={urlGmbrpromo} setUrlGmbrpromo={setUrlGmbrpromo} ketPromo={ketPromo} setKetPromo={setKetPromo} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminGambarPromo