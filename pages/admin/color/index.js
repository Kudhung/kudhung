import LayoutAdmin from "../../../components/Layout_Admin";
import { useForm } from 'react-hook-form'
import prisma from '../../../client.ts'
import React, { useState } from "react";
import ListWarna from "../../../components/AdminWarna";

export async function getServerSideProps(context) {
    const daftarWarna = await prisma.warna.findMany();
    return { props: { daftarWarna } }
}

const FormWarna = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%", marginLeft: "20%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-6">
                    <label htmlFor="">Masukkan Warna
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.jenisColor?.type === 'required' && "(Masukkan jenis warna)"}
                        </p>
                    </label>
                    <input
                        {...register('jenisColor', { required: true })}
                        className="form-control"
                        type="text"
                        id="jeniswarna"
                        placeholder="Categories Name"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>
                <div className=" col-md-6" style={{ marginTop: "-7%", marginLeft: "70%" }}>
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

const AdminWarna = (props) => {
    const [daftarWarna, setDaftarWarna] = useState(props.daftarWarna)
    const [id, setId] = useState(props.idColor);
    const [jenis, setJenis] = useState(props.jenisColor);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "45%", marginRight: "30%" }}>Daftar Warna</h3>
                <div className="py-6 px-0" style={{ marginLeft: "35%", marginRight: "15%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormWarna
                                onSubmit={async (data, event) => {
                                    const warna = { jenisColor: data.jenisColor };
                                    try {
                                        const respon = await fetch('/api/color/post', {
                                            method: 'POST',
                                            body: JSON.stringify(warna),
                                        });
                                        if (!respon.ok) throw new Error(respon.statusText);
                                        let status = await respon.json();
                                        if (status !== null) {
                                            event.target.reset();
                                            setDaftarWarna([...daftarWarna, warna]);
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            />
                            <ListWarna daftarWarna={daftarWarna} id={id} jenis={jenis} setId={setId} setJenis={setJenis} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminWarna