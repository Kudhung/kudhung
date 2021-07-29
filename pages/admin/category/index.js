import LayoutAdmin from "../../../components/Layout_Admin";
import prisma from '../../../client.ts'
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListKategori from "../../../components/AdminKategori";

export async function getServerSideProps(context) {
    const daftarKategori = await prisma.kategori.findMany();
    return { props: { daftarKategori } }
}

const PostKategori = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%", marginLeft: "35%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-6">
                    <label htmlFor="">Masukkan Kategori
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.jenisKtg?.type === 'required' && "(Masukkan jenis kategori)"}
                        </p>
                    </label>
                    <input
                        {...register('jenisKtg', { required: true })}
                        className="form-control"
                        type="text"
                        id="jenisKtg"
                        placeholder="Categories Name"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>
                <div className=" col-md-6" style={{ marginTop: "-9%", marginLeft: "70%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-3%" }}>Simpan
                    </button>
                </div>
            </div>
        </form>
    )
}

const AdminKategori = (props) => {
    const [daftarKategori, setDaftarKategori] = useState(props.daftarKategori)
    const [id, setId] = useState(props.idKtg);
    const [jenis, setJenis] = useState(props.jenisKtg);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginLeft: "35%", marginRight: "15%", marginTop: "1%" }}>Daftar Kategori</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <PostKategori
                                onSubmit={async (data, event) => {
                                    const kategori = { jenisKtg: data.jenisKtg };

                                    try {
                                        const respon = await fetch('/api/category/post', {
                                            method: 'POST',
                                            body: JSON.stringify(kategori),
                                        });

                                        if (!respon.ok) throw new Error(respon.statusText);
                                        let status = await respon.json();
                                        if (status !== null) {
                                            event.target.reset();
                                            setDaftarKategori([...daftarKategori, kategori]);
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            />
                            <ListKategori daftarKategori={daftarKategori} id={id} jenis={jenis} setId={setId} setJenis={setJenis} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminKategori