import prisma from "../../../../client.ts"
import LayoutAdmin from "../../../../components/Layout_Admin"
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarProduk = await prisma.produk.findMany();
    const dataKategori = await prisma.kategori.findMany();
    let kode = context.params.kode;
    let data = await prisma.produk.findUnique({
        where: { id: Number(kode) },
    });

    let { id, jenisProduk, hargaProduk, deskripsiProduk, labelProduk, gambarProduk, tepiProduk, bahanProduk, ukuranProduk, stokProduk } = data;
    return { props: { id, jenisProduk, hargaProduk, deskripsiProduk, labelProduk, gambarProduk, tepiProduk, bahanProduk, ukuranProduk, stokProduk, daftarProduk, dataKategori } };
};

const UpdateProduk = (props) => {
    const { register, handleSubmit, errors } = useForm();
    return (

        <form className="content" onSubmit={handleSubmit(props.onSubmit)}>
            <h3 className="section_title_post" style={{ marginTop: "1%", marginLeft: "16%" }}>FORM UPDATE PRODUK</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "30%", marginRight: "15%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">NamaProduk</label>
                        <textarea
                            {...register('jenisProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Nama Produk"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.jenisProduk}
                            onChange={(Event) => props.setJenisProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Harga</label>
                        <textarea
                            {...register('hargaProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Harga"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.hargaProduk}
                            onChange={(Event) => props.setHargaProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Gambar</label>
                        <textarea
                            {...register('gambarProduk', { required: true })}
                            className="form-control"
                            placeholder="URL Gambar"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.gambarProduk}
                            onChange={(Event) => props.setGambarProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jumlah Stok</label>
                        <textarea
                            {...register('stokProduk', { required: true })}
                            className="form-control"
                            placeholder="Jumlah Stok"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.stokProduk}
                            onChange={(Event) => props.setStokProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jenis Bahan</label>
                        <textarea
                            {...register('bahanProduk', { required: true })}
                            className="form-control"
                            placeholder="Jenis Bahan"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.bahanProduk}
                            onChange={(Event) => props.setBahanProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ukuran</label>
                        <textarea
                            {...register('ukuranProduk', { required: true })}
                            className="form-control"
                            placeholder="Ukuran"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.ukuranProduk}
                            onChange={(Event) => props.setUkuranProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jenis Tepi</label>
                        <textarea
                            {...register('tepiProduk', { required: true })}
                            className="form-control"
                            placeholder="Jenis Tepi"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.tepiProduk}
                            onChange={(Event) => props.setTepiProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jenis Label</label>
                        <textarea
                            {...register('labelProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Jenis Label"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                            value={props.labelProduk}
                            onChange={(Event) => props.setLabelProduk(Event.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Kategori</label>
                        <select
                            {...register('kategoriProduk', { required: true })}
                            className="form-control"
                            placeholder="Kategori"
                            style={{ height: "45px" }}
                        >
                            {props.dataKategori.map((kategori, nomor = 1) => (
                                <option value={kategori.idKtg} key={nomor + 1}>{nomor + 1}. {kategori.jenisKtg}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="">Deskripsi</label>
                        <textarea
                            {...register('deskripsiProduk', { required: true })}
                            className="form-control"
                            placeholder="Deskripsi Produk"
                            style={{ height: "150%", resize: "none" }}
                            value={props.deskripsiProduk}
                            onChange={(Event) => props.setDeskripsiProduk(Event.target.value)}
                        />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <button
                            className="btn btn-primary btn-sm btn-block  col-md-6"
                            type="submit"
                            style={{ marginLeft: "25%", marginTop: "20%" }}
                        >
                            Update
                        </button>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <Link href="/admin/product">
                            <button
                                className="btn btn-primary btn-sm btn-block  col-md-6"
                                type="submit"
                                style={{ marginLeft: "25%", marginTop: "20%" }}
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

const UpProduk = (props) => {
    const [jenisProduk, setJenisProduk] = useState(props.jenisProduk);
    const [hargaProduk, setHargaProduk] = useState(props.hargaProduk);
    const [deskripsiProduk, setDeskripsiProduk] = useState(props.deskripsiProduk);
    const [labelProduk, setLabelProduk] = useState(props.labelProduk);
    const [gambarProduk, setGambarProduk] = useState(props.gambarProduk);
    const [tepiProduk, setTepiProduk] = useState(props.tepiProduk);
    const [bahanProduk, setBahanProduk] = useState(props.bahanProduk);
    const [ukuranProduk, setUkuranProduk] = useState(props.ukuranProduk);
    const [stokProduk, setStokProduk] = useState(props.stokProduk);
    return (
        <LayoutAdmin>
            <UpdateProduk
                jenisProduk={jenisProduk} setJenisProduk={setJenisProduk}
                hargaProduk={hargaProduk} setHargaProduk={setHargaProduk}
                deskripsiProduk={deskripsiProduk} setDeskripsiProduk={setDeskripsiProduk}
                labelProduk={labelProduk} setLabelProduk={setLabelProduk}
                gambarProduk={gambarProduk} setGambarProduk={setGambarProduk}
                tepiProduk={tepiProduk} setTepiProduk={setTepiProduk}
                bahanProduk={bahanProduk} setBahanProduk={setBahanProduk}
                ukuranProduk={ukuranProduk} setUkuranProduk={setUkuranProduk}
                stokProduk={stokProduk} setStokProduk={setStokProduk}
                dataKategori={props.dataKategori}

                onSubmit={async (data, event) => {
                    const produk = {
                        jenisProduk: data.jenisProduk,
                        hargaProduk: data.hargaProduk,
                        deskripsiProduk: data.deskripsiProduk,
                        labelProduk: data.labelProduk,
                        gambarProduk: data.gambarProduk,
                        kategoriProduk: data.kategoriProduk,
                        tepiProduk: data.tepiProduk,
                        bahanProduk: data.bahanProduk,
                        ukuranProduk: data.ukuranProduk,
                        stokProduk: data.stokProduk,
                        id: props.id
                    };
                    try {
                        const respon = await fetch('/api/product/update', {
                            method: 'POST',
                            body: JSON.stringify(produk),
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

export default UpProduk;