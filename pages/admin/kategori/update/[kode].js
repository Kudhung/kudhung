import prisma from "../../../../client.ts"
import LayoutAdmin from "../../../../components/Layout_Admin"
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListKategori from "../../../../components/AdminKategori";
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarKategori = await prisma.kategori.findMany();
    let kode = context.params.kode;
    let data = await prisma.kategori.findUnique({
        where: { idKtg: Number(kode) },
    });

    let { jenisKtg, idKtg } = data;
    return { props: { jenisKtg, idKtg,daftarKategori } };
};

const FormUpdate = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <form className="form-group row" style={{ marginBottom: "0%"}} onSubmit={handleSubmit(props.onSubmit)}>
            < div className="form-group row" style={{ marginBottom: "5%" }}>
                <div className="col-md-12">Masukkan Kategori Baru</div>
                <div className=" col-md-4">
                    <input
                        {...register('jenisKtg', { required: true })}
                        className="form-control"
                        type="text"
                        id="jenisKtg"
                        placeholder="Categories Name"
                        style={{ height: "45px", width: "250px" }}
                        value={props.jenisKtg}
                        onChange={(Event) => props.setJenisKtg(Event.target.value)}
                    />
                </div>
                <div className=" col-md-4" style={{ marginTop: "-3%", marginLeft: "37%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}>Update
                    </button>
                </div>
                <div className=" col-md-4" style={{ marginTop: "-3%", marginLeft: "53%" }}>
                    <Link href="/admin/kategori">
                        <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "-8%" }}>Cancel
                    </button>
                    </Link>
                </div>
            </div>
        </form>
    )
}
const UpdateKategori = (props) => {

    const [jenisKtg, setJenisKtg] = useState(props.jenisKtg);

    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%", position: "relative" }}>List Kategori</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group"></div>
                        <FormUpdate jenisKtg={jenisKtg} setJenisKtg={setJenisKtg} onSubmit={async (data, event) => {
                            const kategori = { jenisKtg: data.jenisKtg, idKtg: props.idKtg };
                            try {
                                const respon = await fetch('/api/kategori/update', {
                                    method: 'POST',
                                    body: JSON.stringify(kategori),
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
                        }
                        }>

                        </FormUpdate>
                        <ListKategori daftarKategori={props.daftarKategori}  hidden={true}></ListKategori>
                    </div>
                </div>
            </div>

        </LayoutAdmin>
    )
}

export default UpdateKategori;