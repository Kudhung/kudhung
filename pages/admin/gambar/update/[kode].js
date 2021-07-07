import prisma from "../../../../client.ts"
import LayoutAdmin from "../../../../components/Layout_Admin"
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import ListGambar from "../../../../components/AdminGambar";
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarGambar = await prisma.gambar.findMany();
    let kode = context.params.kode;
    let data = await prisma.gambar.findUnique({
        where: { idGmbr: Number(kode) },
    });

    let { idGmbr, urlGmbr, idProduk, promoId } = data;
    return { props: { idGmbr, urlGmbr, idProduk, promoId, daftarGambar } };
};

const UpdateGambar = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (<form className="form-group row" style={{ marginBottom: "0%" }} onSubmit={handleSubmit(props.onSubmit)}>
        < div className="form-group row" style={{ marginBottom: "5%" }}>
            <div className="col-md-12">URL Baru</div>
            <div className=" col-md-4">
                <input
                    {...register('urlGmbr', { required: true })}
                    className="form-control"
                    type="text"
                    id="urlGmbr"
                    placeholder="New URL"
                    style={{ height: "45px", width: "250px" }}
                    value={props.urlGmbr}
                    onChange={(Event) => props.setUrlGmbr(Event.target.value)}
                />
            </div>
            <div className=" col-md-4" style={{ marginTop: "-4%", marginLeft: "45%" }}>
                <button
                    className="btn btn-primary btn-sm btn-block  col-md-6"
                    type="submit" style={{ marginTop: "-8%" }}>Update
                </button>
            </div>
            <div className=" col-md-4" style={{ marginTop: "-4%", marginLeft: "60%" }}>
                <Link href="/admin/gambar">
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

const UpGambar = (props) => {
    const [urlGmbr, setUrlGmbr] = useState(props.urlGmbr);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "0%" }}>List URL Gambar</h3>
                <div className="py-6 px-0" style={{ marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <div className="card-body">
                        <div className="form-group">
                            <UpdateGambar
                                urlGmbr={urlGmbr} setUrlGmbr={setUrlGmbr} onSubmit={async (data, event) => {
                                    const gambar = { urlGmbr: data.urlGmbr, idGmbr: props.idGmbr };
                                    try {
                                        const respon = await fetch('/api/gambar/update', {
                                            method: 'POST',
                                            body: JSON.stringify(gambar),
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
                                }
                            />

                            <ListGambar daftarGambar={props.daftarGambar} hidden={true} />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default UpGambar;