import Main_Layout from "../../../components/Main_Layout";
import prisma from "../../../client.ts";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export async function getServerSideProps(context) {
  let kode = context.params.kode;
  let data = await prisma.produk.findUnique({
    where: { id: Number(kode) },
    include: { fotoProduk: true }
  })
  let { jenisProduk, hargaProduk, fotoProduk, deskripsiProduk, gambarProduk, tepiProduk, bahanProduk, ukuranProduk, stokProduk } = data;
  return { props: { jenisProduk, hargaProduk, fotoProduk, deskripsiProduk, gambarProduk, tepiProduk, bahanProduk, ukuranProduk, stokProduk } };
}


const Detail_Pashmina = (props) => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState()
  const [alamat, setAlamat] = useState()
  const [warna, setWarna] = useState()
  const [telp, setTelp] = useState()
  const [jenisproduk] = useState(props.jenisProduk)
  const [hargaProduk] = useState(props.hargaProduk)
  const [id, setId] = useState();
  const [ketGmbr, setKetGmbr] = useState();
  const {
    register, handleSubmit,
    formState: { errors }
  } = useForm();


  const onSubmit = (props) => {
    /* Whatsapp Window Open */
    window.open('https://web.whatsapp.com/send' + '?phone=' + '6283857247099' + '&text=' + 'Halo saya ingin memesan  ' + '%20' + jenisproduk + '%20' + '(' + '%20' + hargaProduk + '%20' + ')' + '%0A%0A' +
      '*Name : ' + name + '%0A' +
      '*No Telp : ' + telp + '%0A' +
      '*Alamat : ' + alamat + '%0A' +
      '*Warna : ' + warna + '%0A' +
      '*Jumlah Barang : ' + count + '%0A', '_blank');
  };

  return (
    <Main_Layout>
      <section className="product-details spad">
        <div className="container">
          <div className="row" id="keterangan">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="product__details__pic">
                <div className="container">
                  <div className="row">
                    <div className="slider img-thumbnail" style={{ backgroundColor: "#f0efef" }}>
                      <div className="slides">
                        <div className="img_detail">
                          <img src={props.gambarProduk} alt="Product" className="img-fluid img-thumbnail" style={{ width: "100%", height: "100%" }} /></div>

                        {props.fotoProduk.map((produk) => (
                          <div key={produk.idGmbrproduk} className="img_detail">
                            <img src={produk.urlGmbrproduk} alt="Product" className="img-fluid img-thumbnail" style={{ width: "100%", height: "100%" }} /></div>
                        ))}</div>

                      <div className="product__details__button" style={{ marginTop: "5%" }}>
                        <a className="cart-btn" style={{ cursor: "pointer" }} onClick={() => (document.getElementById('pop').style.display = 'block', document.getElementById('keterangan').style.display = 'none')}> Pesan Sekarang</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{props.jenisProduk}
                  <div className="product__details__price">Rp. {props.hargaProduk}</div>
                </h3>
                <div className="col-lg-12" style={{ marginTop: "-10%" }}>
                  <div className="product__details__tab">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className="nav-link" style={{ cursor: "pointer", color: "black" }} onClick={() => (document.getElementById('tabs-1').style.display = 'block', document.getElementById('tabs-2').style.display = 'none')} aria-selected="true">Description</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" style={{ cursor: "pointer", color: "black" }} onClick={() => (document.getElementById('tabs-2').style.display = 'block', document.getElementById('tabs-1').style.display = 'none')} aria-selected="true">Specification</a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <h6 style={{ textDecoration: "underline solid black 2px", color: "black" }} >Description</h6>
                        <a>{props.deskripsiProduk}</a>
                      </div>

                      <div className="table" style={{ marginLeft: "3px" }} className="tab-pane" id="tabs-2" role="tabpanel">
                        <h6 style={{ textDecoration: "underline solid black 2px", color: "black" }}>Specification</h6>
                        <div>
                          <ul className="deskrip__tbl__td" style={{ borderTop: "none", textDecoration: "none" }}>Ukuran
                            <ul >
                              <p style={{ fontSize: "15px", textAlign: "justify", textDecoration: "none", marginLeft: "15%", fontWeight: "none", color: "black" }}>{props.ukuranProduk}</p>
                            </ul>
                          </ul>
                        </div>

                        <div>
                          <ul className="deskrip__tbl__td" style={{ borderTop: "none", textDecoration: "none" }}>Stok
                            <ul >
                              <p style={{ fontSize: "15px", textAlign: "justify", textDecoration: "none", marginLeft: "15%", fontWeight: "none", color: "black" }}>{props.stokProduk}</p>
                            </ul>
                          </ul>
                        </div>
                        <div>
                          <ul className="deskrip__tbl__td" style={{ borderTop: "none", textDecoration: "none" }}>Warna
                            {props.fotoProduk.map((ket, i = 1) => (
                              <ul key={i + 1}>
                                <p key={ket.idGmbrproduk} style={{ fontSize: "15px", textAlign: "justify", textDecoration: "none", marginLeft: "15%", fontWeight: "none", color: "black" }}>{i + 1}. {ket.ketGmbr}</p>
                              </ul>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <ul className="deskrip__tbl__td" style={{ borderTop: "none", textDecoration: "none" }}>Bahan
                            <ul >
                              <p style={{ fontSize: "15px", textAlign: "justify", textDecoration: "none", marginLeft: "15%", fontWeight: "none", color: "black" }}>{props.bahanProduk}</p>
                            </ul>
                          </ul>
                        </div>
                        <div>
                          <ul className="deskrip__tbl__td" style={{ borderTop: "none", textDecoration: "none" }}>Jenis Tepi
                            <ul >
                              <p style={{ fontSize: "15px", textAlign: "justify", textDecoration: "none", marginLeft: "15%", fontWeight: "none", color: "black" }}>{props.tepiProduk}</p>
                            </ul>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* form pesan */}
          <form onSubmit={handleSubmit(onSubmit)} id="pop" className="container__produk__admin">
            <h3 style={{ paddingBottom: "5%", fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>DATA PEMESANAN</h3>
            <table>
              <thead>
                <tr style={{ fontWeight: "bolder", fontSize: "25px", color: "black" }}>
                  <td>{props.jenisProduk} <sup><sup style={{ fontWeight: "500", fontSize: "20px", color: "red" }}> Rp. {props.hargaProduk}</sup> </sup></td>
                </tr>
              </thead>
            </table>
            <table>
              <thead>
                <tr style={{ fontWeight: "bold", fontSize: "12", color: "black" }}>
                  <td>Warna Tersedia : </td>
                  <td style={{ width: "450px" }}>
                    <div className="container product__details__text ">
                      {props.fotoProduk.map((foto) => (
                        <div style={{ textAlign: "center", padding: "8px" }} className="column__produk__admin col-lg-4" key={foto.idGmbrproduk}>
                          <img src={foto.urlGmbrproduk} alt="Product" className="img-thumbnail"
                            onClick={() => { setId(foto.urlGmbrproduk), setKetGmbr(foto.ketGmbr), document.getElementById('image_modal').style.display = 'block' }} />
                          <a style={{ fontWeight: "500", fontSize: "12px" }}>
                            <input type='radio' style={{ marginRight: "5px" }} id="warna" name="warnaPilihan" defaultValue={foto.ketGmbr} onChange={(Event) => setWarna(Event.target.value)} />{foto.ketGmbr}</a>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </thead>
            </table>


            <div className="product__details__widget">
              <div className="product__details__button">
                <div className="quantity col-lg-12">
                  <span>Nama Penerima :
                    <p style={{ color: "red" }}>{errors.nama?.type === 'required' && "(Isi Nama Penerima)"} </p>
                  </span>
                  <div className="pro-qty" style={{ width: "50%" }}>
                    <input {...register("nama", { required: true })} defaultValue={name} onChange={(Event) => setName(Event.target.value)} style={{ width: "100% " }} />
                  </div>
                </div>
                <div className="quantity col-lg-12">
                  <span>Nomor Telepon/Hp :
                    <p style={{ color: "red" }}>{errors.telp?.type === 'required' && "(Isi No Telepon)"} </p>
                  </span>
                  <div className="pro-qty" style={{ width: "50%" }}>
                    <input {...register("telp", { required: true })} defaultValue={telp} onChange={(Event) => setTelp(Event.target.value)} style={{ width: "100% " }} />
                  </div>
                </div>
                <div className="quantity col-lg-12">
                  <span>Alamat Lengkap :
                    <p style={{ color: "red" }}>{errors.alamatLengkap?.type === 'required' && "(Isi Alamat Lengkap)"} </p> </span>
                  <div className="pro-qty" style={{ width: "50%" }}>
                    <input {...register("alamatLengkap", { required: true })} defaultValue={alamat} onChange={(Event) => setAlamat(Event.target.value)} style={{ width: "100% " }} />
                  </div>
                  <div className="quantity col-lg-12">
                    <span>Jumlah Pesan :</span>
                    <div className="pro-qty" style={{ width: "155px" }}>
                      <span className="dec qtybtn" onClick={() => {
                        if (count > 1) {
                          setCount(count - 1)
                        }
                      }} >-</span>
                      <input defaultValue={count} />
                      <span className="inc qtybtn" onClick={() =>
                        setCount(count + 1)}>+</span>
                    </div>
                  </div>
                </div>
                <button className="cart-btn" type="submit" > Order Via Whatsapp</button>
              </div>
            </div>
          </form>

          {/* Modal Image */}
          <div id="image_modal" className="modal" style={{ backgroundColor: "grey", opacity: "-moz-initial" }}>
            <div style={{ fontSize: "25px", textAlign: "center", color: "black", fontWeight: "bold" }}>{ketGmbr}
            </div>
            <span onClick={() => (document.getElementById('image_modal').style.display = 'none')} className="close" title="Close Modal" style={{ cursor: "pointer", fontSize: "60px", marginRight: "5%" }}>&times;</span>
            <img src={id} alt="Product" style={{ width: "50%", height: "90%", marginLeft: "25%" }} />
          </div>
        </div>
      </section>
    </Main_Layout>
  );
};
export default Detail_Pashmina;