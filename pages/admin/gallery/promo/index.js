import LayoutAdmin from '../../../../components/Layout_Admin';
import { useForm } from 'react-hook-form'
import prisma from '../../../../client.ts'
import React, { useState } from "react";
import ListGmbrPromo from '../../../../components/AdminGambarPromo';

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambarpromo.findMany();
    const dataPromo = await prisma.promo.findMany();
    return { props: { daftarGambar, dataPromo } }
}

const FormGambarPromo = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-4">
                    <label htmlFor="">Masukkan Url </label>
                    <input
                        {...register('urlGmbrpromo', { required: true })}
                        className="form-control"
                        type="text"
                        id="urlgambarpromo"
                        placeholder="URL Gambar"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>

                <div className=" col-md-4" style={{ marginLeft: "8%" }}>
                    <label htmlFor="">Jenis Promo </label>
                    <select
                        className="form-control"
                        style={{ height: "45px", width: "250px" }}
                        {...register('promoId', { required: true })}>
                        {props.dataPromo.map((promo) => (
                            <option key={promo.idPromo} value={promo.idPromo}>{promo.idPromo}. {promo.judulPromo}</option>
                        ))}

                    </select>
                </div>

                <div className=" col-md-4" style={{ marginTop: "-3.5%", marginLeft: "82%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}>Simpan
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
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>List URL Gambar</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormGambarPromo
                                dataPromo={props.dataPromo}
                                onSubmit={async (data, event) => {
                                    const gambar = { urlGmbrpromo: data.urlGmbrpromo, promoId: data.promoId };

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

                            <ListGmbrPromo daftarGambar={props.daftarGambar} Gmbrpromo={Gmbrpromo} setGmbrPromo={setGmbrPromo} urlGmbrpromo={urlGmbrpromo} setUrlGmbrpromo={setUrlGmbrpromo} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminGambarPromo