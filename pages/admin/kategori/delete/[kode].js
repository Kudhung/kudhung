import prisma from "../../../../client.ts"
import LayoutAdmin from "../../../../components/Layout_Admin"
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarKategori = await prisma.kategori.findMany();
    let kode = context.params.kode;
    let data = await prisma.kategori.findUnique({
        where: { idKtg: Number(kode) },
    });

    let {jenisKtg, idKtg } = data;
    return { props: {jenisKtg, idKtg,daftarKategori } };
};

const FormDelete = (props) => {
    const { handleSubmit, errors } = useForm();
    return (
        <form className="row" style={{marginLeft:"14%"}} onSubmit={handleSubmit(props.onSubmit)}>
                <div className=" col-md-4" style={{ marginTop: "-7%", marginLeft: "15%" }}>
                    <button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        type="submit" style={{ marginTop: "10%" }}>YES
                    </button>
                </div>
                <div className=" col-md-4" style={{ marginTop: "-7%", marginLeft: "35%" }}>
                <Link href="/admin/kategori"><button
                        className="btn btn-primary btn-sm btn-block  col-md-6"
                        style={{ marginTop: "10%" }}>NO
                    </button></Link>
                </div>
        </form>
    )
}
const DeleteKategori = (props) => {
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative", marginTop:"15%" }}>
                <h6 style={{ marginTop: "1%", textAlign: "center", marginLeft: "10%", marginRight: "0%", position: "relative",fontSize:"25px" }}>Yakin Ingin Menghapus Kategori <b>"{props.jenisKtg}"</b> ? </h6>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group"></div>
                        <FormDelete  onSubmit={async (event) => {
                            const kategori =props.idKtg;
                            try {
                                const respon = await fetch('/api/kategori/delete', {
                                    method: 'POST',
                                    body: JSON.stringify(kategori),
                                });

                                if (!respon.ok) throw new Error(respon.statusText);

                                let status = await respon.json();

                                if (status !== null) {
                                    event.reset()
                                    location.reload()
                                    window.history.back()
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }
                        }>

                        </FormDelete>
                    </div>
                </div>
            </div>

        </LayoutAdmin>
    )
}

export default DeleteKategori;