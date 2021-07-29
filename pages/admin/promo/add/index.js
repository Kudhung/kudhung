
import LayoutAdmin from '../../../../components/Layout_Admin';
import { useForm } from 'react-hook-form'
import prisma from '../../.././../client.ts'
import React, { useState } from "react";
import Link from 'next/link'

export async function getServerSideProps(context) {
    const daftarPromo = await prisma.promo.findMany();
    return { props: { daftarPromo } }
}

const FormAdmin = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="content" onSubmit={handleSubmit(props.onSubmit)}>
            <h3 className="section_title_post" style={{ marginTop: "1%", marginLeft: "16%" }}>FORM TAMBAH PROMO</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "30%", marginRight: "15%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Judul Promo
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.judulPromo?.type === 'required' && "(Judul promo empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('judulPromo', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Judul Promo"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Harga
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.hargaPromo?.type === 'required' && "(Harga empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('hargaPromo', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Harga"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Gambar
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.gambarPromo?.type === 'required' && "(URL gambar empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('gambarPromo', { required: true })}
                            className="form-control"
                            placeholder="URL Gambar"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="">Periode Promo
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.periodePromo?.type === 'required' && "(Periode empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('periodePromo', { required: true })}
                            className="form-control"
                            placeholder="Periode Promo"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Status Promo</label>
                        <select
                            {...register('statusPromo', { required: true })}
                            className="form-control"
                            placeholder="Status"
                            style={{ height: "45px" }}
                        >
                            <option value="Sedang-berjalan">1. Sedang Berjalan</option>
                            <option value="Comming-soon">2. Comming Soon</option>
                            <option value="Berakhir">3. Berakhir</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="">Deskripsi
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.deskripsiPromo?.type === 'required' && "(Deskripsi empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('deskripsiPromo', { required: true })}
                            className="form-control"
                            placeholder="Deskripsi Promo"
                            style={{ height: "150%", resize: "none" }}
                        />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <button
                            className="btn btn-primary btn-sm btn-block  col-md-6"
                            type="submit"
                            style={{ marginLeft: "25%", marginTop: "25%" }}
                        >
                            Simpan
                        </button>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <Link href="/admin/promo">
                            <button
                                className="btn btn-primary btn-sm btn-block  col-md-6"
                                type="submit"
                                style={{ marginLeft: "25%", marginTop: "25%" }}
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

const Process = (props) => {
    const [daftarPromo, setDaftarPromo] = useState(props.daftarPromo)
    return (
        <LayoutAdmin>
            <FormAdmin onSubmit={async (data, event) => {
                const promo = {
                    judulPromo: data.judulPromo,
                    hargaPromo: data.hargaPromo,
                    deskripsiPromo: data.deskripsiPromo,
                    periodePromo: data.periodePromo,
                    gambarPromo: data.gambarPromo,
                    statusPromo: data.statusPromo
                };
                try {
                    const respon = await fetch('/api/promo/post', {
                        method: 'POST',
                        body: JSON.stringify(promo),
                    });

                    if (!respon.ok) throw new Error(respon.statusText);
                    let status = await respon.json();
                    if (status !== null) {
                        event.target.reset();
                        setDaftarPromo([...daftarPromo, promo]);
                        window.history.back()
                    }
                } catch (error) {
                    console.log(error)
                }
            }}
            />
        </LayoutAdmin>
    )
}

export default Process