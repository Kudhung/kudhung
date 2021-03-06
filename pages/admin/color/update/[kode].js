import prisma from "../../../../client.ts"
import LayoutAdmin from "../../../../components/Layout_Admin"
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListWarna from "../../../../components/AdminWarna";
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarWarna = await prisma.warna.findMany();
    let kode = context.params.kode;
    let data = await prisma.warna.findUnique({
        where: { idColor: Number(kode) },
    });
    let { idColor, jenisColor } = data;
    return { props: { idColor, jenisColor, daftarWarna } };
};

const UpdateWarna = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%", marginLeft: "5%" }} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className="col-md-12">Masukkan Warna Baru</div>
                <div className=" col-md-4">
                    <input
                        {...register('jenisColor', { required: true })}
                        className="form-control"
                        type="text"
                        id="jenisColor"
                        placeholder="Color Name"
                        style={{ height: "45px", width: "250px" }}
                        value={props.jenisColor}
                        onChange={(Event) => props.setJenisColor(Event.target.value)}
                    />
                </div>
                <div className=" col-md-4" style={{ marginTop: "-3%", marginLeft: "42%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}
                    >
                        Update
                    </button>
                </div>
                <div className=" col-md-4" style={{ marginTop: "-3%", marginLeft: "57%" }}>
                    <Link href="/admin/color">
                        <button
                            className="btn btn-primary btn-sm btn-block  col-md-6"
                            type="submit" style={{ marginTop: "-8%" }}
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    )
}

const UpWarna = (props) => {
    const [jenisColor, setJenisColor] = useState(props.jenisColor);
    const [id, setId] = useState(props.idColor);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "45%", marginRight: "30%" }}>Daftar Warna</h3>
                <div className="py-6 px-0" style={{ marginLeft: "35%", marginRight: "15%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <UpdateWarna
                                jenisColor={jenisColor}
                                setJenisColor={setJenisColor}
                                onSubmit={async (data, event) => {
                                    const warna = { jenisColor: data.jenisColor, idColor: props.idColor };
                                    try {
                                        const respon = await fetch('/api/color/update', {
                                            method: 'POST',
                                            body: JSON.stringify(warna),
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
                            <ListWarna daftarWarna={props.daftarWarna} id={id} setId={setId} jenis={jenisColor} setJenis={setJenisColor} hidden={true} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default UpWarna;