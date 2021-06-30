import LayoutAdmin from "../../components/Layout_Admin";
import { useForm } from 'react-hook-form'
import prisma from '../../client.ts'
import React, { useState } from "react";

export async function getServerSideProps(context) {
    const daftarKategori = await prisma.kategori.findMany();
    return { props: { daftarKategori } }
}


const FormKategori = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-6">
                    <label htmlFor="">Masukkan Kategori</label>
                    <input
                        {...register('jenisKtg', { required: true })}
                        className="form-control"
                        type="text"
                        id="jeniskategori"
                        placeholder="Categories Name"
                        style={{ height: "45px", width: "250px" }}
                    />
                </div>
                <div className=" col-md-6" style={{ marginTop: "-7%", marginLeft: "70%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}>Simpan
                    </button>
                </div>
            </div>
        </form>
    )
}

const AdminKategori = (props) => {
    const [daftarKategori, setJenisKategori] = useState(props.daftarKategori)
    return (
        <LayoutAdmin>
            <div className="content" style={{position:"relative"}}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "-10%", position:"relative" }}>List Kategori</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormKategori
                                onSubmit={async (data, event) => {
                                    const kategori = { jenisKtg: data.jenisKtg };

                                    try {
                                        const respon = await fetch('/api/kategori/post', {
                                            method: 'POST',
                                            body: JSON.stringify(kategori),
                                        });

                                        if (!respon.ok) throw new Error(respon.statusText);
                                        let status = await respon.json();
                                        if (status !== null) {
                                            event.target.reset();
                                            setJenisKategori([...daftarKategori, kategori]);
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            />


                            <div style={{ width: "500px" }}>
                                <table className="table table-striped ">
                                    <thead>
                                        <tr style={{ textAlign: "center" }}>
                                            <th>No</th>
                                            <th>Jenis Kategori</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {daftarKategori.map((kategori,nomor=1) => (
                                            <tr key={kategori.idKtg}>
                                                <td style={{ textAlign: "center" }}>{nomor+1}</td>
                                                <td style={{ textAlign: "left", width: "250px" }}>{kategori.jenisKtg}</td>
                                                <td className="div_button_post">
                                                    <button className="button_update_post">Update</button>
                                                    <button className="button_remove_post">Remove</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default AdminKategori