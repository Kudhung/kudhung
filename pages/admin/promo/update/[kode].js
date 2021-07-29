import prisma from "../../../../client.ts"
import LayoutAdmin from "../../../../components/Layout_Admin"
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarPromo = await prisma.promo.findMany();
    let kode = context.params.kode;
    let data = await prisma.promo.findUnique({
        where: { idPromo: Number(kode) },
    });

    let { idPromo, judulPromo, hargaPromo, deskripsiPromo, periodePromo, gambarPromo, statusPromo } = data;
    return { props: { idPromo, judulPromo, hargaPromo, deskripsiPromo, periodePromo, gambarPromo, statusPromo, daftarPromo } };
};

const UpdatePromo = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="content" onSubmit={handleSubmit(props.onSubmit)}>
            <h3 className="section_title_post" style={{ marginTop: "1%", marginLeft: "16%" }}>FORM UPDATE PROMO</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "30%", marginRight: "15%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Judul Promo</label>
                        <textarea
                            {...register('judulPromo', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Judul Promo"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.judulPromo}
                            onChange={(Event) => props.setJudulPromo(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Harga</label>
                        <textarea
                            {...register('hargaPromo', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Harga"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.hargaPromo}
                            onChange={(Event) => props.setHargaPromo(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Gambar</label>
                        <textarea
                            {...register('gambarPromo', { required: true })}
                            className="form-control"
                            placeholder="URL Gambar"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.gambarPromo}
                            onChange={(Event) => props.setGambarPromo(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Periode Promo</label>
                        <textarea
                            {...register('periodePromo', { required: true })}
                            className="form-control"
                            placeholder="Periode Promo"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.periodePromo}
                            onChange={(Event) => props.setPeriodePromo(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Status Promo</label>
                        <select
                            {...register('statusPromo', { required: true })}
                            className="form-control"
                            placeholder="Status Promo"
                            style={{ height: "45px" }}
                        >
                            <option value="Sedang-berjalan">1. Sedang Berjalan</option>
                            <option value="Comming-soon">2. Comming Soon</option>
                            <option value="Berakhir">3. Berakhir</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="">Deskripsi</label>
                        <textarea
                            {...register('deskripsiPromo', { required: true })}
                            className="form-control"
                            placeholder="Deskripsi"
                            style={{ height: "150%", resize: "none" }}
                            value={props.deskripsiPromo}
                            onChange={(Event) => props.setDeskripsiPromo(Event.target.value)}
                        />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <button
                            className="btn btn-primary btn-sm btn-block  col-md-6"
                            type="submit"
                            style={{ marginLeft: "25%", marginTop: "5%" }}
                        >
                            Update
                        </button>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <Link href="/admin/promo">
                            <button
                                className="btn btn-primary btn-sm btn-block  col-md-6"
                                type="submit"
                                style={{ marginLeft: "25%", marginTop: "5%" }}
                            >
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

const UpPromo = (props) => {
    const [judulPromo, setJudulPromo] = useState(props.judulPromo);
    const [hargaPromo, setHargaPromo] = useState(props.hargaPromo);
    const [deskripsiPromo, setDeskripsiPromo] = useState(props.deskripsiPromo);
    const [gambarPromo, setGambarPromo] = useState(props.gambarPromo);
    const [periodePromo, setPeriodePromo] = useState(props.periodePromo);
    const [statusPromo, setStatusPromo] = useState(props.statusPromo);
    return (
        <LayoutAdmin>
            <UpdatePromo
                judulPromo={judulPromo} setJudulPromo={setJudulPromo}
                hargaPromo={hargaPromo} setHargaPromo={setHargaPromo}
                deskripsiPromo={deskripsiPromo} setDeskripsiPromo={setDeskripsiPromo}
                gambarPromo={gambarPromo} setGambarPromo={setGambarPromo}
                periodePromo={periodePromo} setPeriodePromo={setPeriodePromo}
                statusPromo={statusPromo} setStatusPromo={setStatusPromo}

                onSubmit={async (data, event) => {
                    const promo = {
                        judulPromo: data.judulPromo,
                        hargaPromo: data.hargaPromo,
                        deskripsiPromo: data.deskripsiPromo,
                        gambarPromo: data.gambarPromo,
                        periodePromo: data.periodePromo,
                        statusPromo: data.statusPromo,
                        idPromo: props.idPromo
                    };
                    try {
                        const respon = await fetch('/api/promo/update', {
                            method: 'POST',
                            body: JSON.stringify(promo),
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
        </LayoutAdmin>
    )
}

export default UpPromo;