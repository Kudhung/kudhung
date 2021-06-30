import LayoutAdmin from "../../components/Layout_Admin";
import { useForm } from 'react-hook-form'
import prisma from '../../client.ts'
import React, { useState } from "react";

export async function getServerSideProps(context) {
    const daftarWarna = await prisma.warna.findMany();
    return { props: { daftarWarna } }
}


const FormWarna= (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className=" col-md-6">
                    <label htmlFor="">Masukkan warna</label>
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
                        type="submit" style={{ marginTop: "-8%" }}>Simpan
                    </button>
                </div>
            </div>
        </form>
    )
}

const AdminWarna = (props) => {
    const [daftarWarna, setJenisWarna] = useState(props.daftarWarna)
    return (
        <LayoutAdmin>
            <div className="content" style={{position:"relative"}}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "-10%" }}>List Warna</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <FormWarna
                                onSubmit={async (data, event) => {
                                    const warna = { jenisColor: data.jenisColor };

                                    try {
                                        const respon = await fetch('/api/warna/post', {
                                            method: 'POST',
                                            body: JSON.stringify(warna),
                                        });

                                        if (!respon.ok) throw new Error(respon.statusText);
                                        let status = await respon.json();
                                        if (status !== null) {
                                            event.target.reset();
                                            setJenisWarna([...daftarWarna, warna]);
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
                                            <th>Warna</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {daftarWarna.map((warna,i=1) => (
                                            <tr key={warna.idColor}>
                                                <td style={{ textAlign: "center" }}>{i+1}</td>
                                                <td style={{ textAlign: "left", width: "250px" }}>{warna.jenisColor}</td>
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

export default AdminWarna