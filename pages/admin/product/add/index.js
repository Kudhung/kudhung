import LayoutAdmin from '../../../../components/Layout_Admin';
import { useForm } from 'react-hook-form'
import prisma from '../../.././../client.ts'
import React, { useState } from "react";
import Link from 'next/link'

export async function getServerSideProps(context) {
    const daftarProduk = await prisma.produk.findMany();
    const dataKategori = await prisma.kategori.findMany();
    return { props: { dataKategori, daftarProduk } }
}

const FormAdmin = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="content" onSubmit={handleSubmit(props.onSubmit)}>
            <h3 className="section_title_post" style={{ marginTop: "1%", marginLeft: "16%" }}>Form Tambah Produk</h3>
            <div className="py-3 px-0 card" style={{ marginLeft: "30%", marginRight: "15%", marginTop: "1%" }}>
                <div className="card-body row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Nama Produk
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.jenisProduk?.type === 'required' && "(Jenis produk empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('jenisProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Nama Produk"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Harga
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.hargaProduk?.type === 'required' && "(Harga empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('hargaProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Harga"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Gambar
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.gambarProduk?.type === 'required' && "Gambar empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('gambarProduk', { required: true })}
                            className="form-control"
                            placeholder="URL Gambar"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jumlah Stok
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.stokProduk?.type === 'required' && "(Stok empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('stokProduk', { required: true })}
                            className="form-control"
                            placeholder="Jumlah Stok"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jenis Bahan
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.bahanProduk?.type === 'required' && "(Jenis bahan empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('bahanProduk', { required: true })}
                            className="form-control"
                            placeholder="Jenis Bahan"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ukuran
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.ukuranProduk?.type === 'required' && "(Ukuran empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('ukuranProduk', { required: true })}
                            className="form-control"
                            placeholder="Ukuran"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jenis Tepi
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.tepiProduk?.type === 'required' && "(Jenis tepi empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('tepiProduk', { required: true })}
                            className="form-control"
                            placeholder="Jenis Tepi"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Jenis Label
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.labelProduk?.type === 'required' && "(Jenis label empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('labelProduk', { required: true })}
                            className="form-control"
                            type="text"
                            placeholder="Label Produk"
                            style={{ minHeight: "50%", maxHeight: "100%", resize: "none" }}
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
                        <label htmlFor="">Deskripsi
                            <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.deskripsiProduk?.type === 'required' && "(Deskripsi produk empty)"}
                            </p>
                        </label>
                        <textarea
                            {...register('deskripsiProduk', { required: true })}
                            className="form-control"
                            placeholder="Deskripsi Produk"
                            style={{ height: "150%", resize: "none" }}
                        />
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <button
                            className="btn btn-primary btn-sm btn-block  col-md-6"
                            type="submit" style={{ marginLeft: "25%", marginTop: "20%" }}
                        >
                            Simpan
                        </button>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "9.2%" }}>
                        <Link href="/admin/product">
                            <button
                                className="btn btn-primary btn-sm btn-block  col-md-6"
                                type="submit" style={{ marginLeft: "25%", marginTop: "20%" }}
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

const AddProduk = (props) => {
    const [daftarProduk, setDaftarProduk] = useState(props.daftarProduk)
    return (
        <LayoutAdmin>
            <FormAdmin dataKategori={props.dataKategori} onSubmit={async (data, event) => {
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
                    stokProduk: data.stokProduk
                };
                try {
                    const respon = await fetch('/api/product/post', {
                        method: 'POST',
                        body: JSON.stringify(produk),
                    });
                    if (!respon.ok) throw new Error(respon.statusText);
                    let status = await respon.json();
                    if (status !== null) {
                        event.target.reset();
                        setDaftarProduk([...daftarProduk, produk]);
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

export default AddProduk