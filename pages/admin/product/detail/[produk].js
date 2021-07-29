import LayoutAdmin from '../../../../components/Layout_Admin';
import Link from 'next/link';
import prisma from "../../../../client.ts";
import React, { useState } from 'react';

export async function getServerSideProps(context) {
  let kode = context.params.produk;
  let data = await prisma.produk.findUnique({
    where: { id: Number(kode) },
    include: { fotoProduk: true }
  })
  let { jenisProduk, labelProduk, kategoriProduk, hargaProduk, fotoProduk, deskripsiProduk, gambarProduk, ukuranProduk, tepiProduk, bahanProduk, stokProduk } = data;
  return { props: { jenisProduk, hargaProduk, labelProduk, kategoriProduk, fotoProduk, deskripsiProduk, gambarProduk, ukuranProduk, tepiProduk, bahanProduk, stokProduk } };
}

const DetailProdukAdmin = (props) => {
  const [id, setId] = useState();
  const [ketGmbr, setKetGmbr] = useState();
  return (
    <LayoutAdmin>
      <section className="product-details spad row" style={{ marginLeft: "20%", marginRight: "15px" }}>
        <div className="product__details__text" style={{ width: "100%", textAlign: "center", marginBottom: "2%", marginTop: "-5%" }}>
          <h5 style={{ fontSize: "30px", fontWeight: "bolder", textDecoration: "underline" }}>INFORMASI PRODUK</h5>
        </div>
        <table className="table" style={{ marginBottom: "-1px" }}>
          <tbody >
            <tr style={{ backgroundColor: "rgba(139, 131, 131, 0.12)" }}>
              <td style={{ textAlign: "left", border: "none" }}>
                <div className="product__details__text" style={{ width: "100%", textAlign: "center" }}>
                  <h3 >Galeri Foto</h3>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <tbody>
            <tr style={{ backgroundColor: "rgba(139, 131, 131, 0.12)" }}>
              <td style={{ textAlign: "left", borderTop: "none" }}>
                <div className="container product__details__text ">
                  {props.fotoProduk.map((produk) => (
                    <div
                      className="column__produk__admin col-lg-4"
                      key={produk.idGmbrproduk}
                      style={{ width: "125px", marginTop: "-2%" }}
                    >
                      <pre style={{ fontSize: "15px", textAlign: "center", marginBottom: "1px" }}>{produk.ketGmbr}</pre>
                      <img
                        src={produk.urlGmbrproduk}
                        alt="Product"
                        className="img-thumbnail"
                        onClick={() => {
                          setId(produk.urlGmbrproduk),
                            setKetGmbr(produk.ketGmbr),
                            document.getElementById('pop').style.display = 'block'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </td>
              <td style={{ textAlign: "left", width: "250px" }}>
                <div id="pop" className="container__produk__admin">
                  <span
                    onClick={() => (document.getElementById('pop').style.display = 'none')}
                    className="closebtn__produk__admin"
                  >
                    &times;
                  </span>
                  <img id="expandedImg" className="img-thumbnail" style={{ width: "100%" }} src={id} />
                  <pre style={{ fontSize: "15px", textAlign: "center", marginBottom: "1px" }} id="expandedImg">{ketGmbr}</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table" style={{ backgroundColor: "white", border: "solid 2px black" }}>
          <tbody>
            <tr style={{ textAlign: "center"}}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Nama Produk</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.jenisProduk}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Harga</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">
                  <b>Rp. </b>
                  {props.hargaProduk}
                </pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Deskripsi</h3>
              </td>
              <td style={{ width: "500px" }}>
                <p style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.deskripsiProduk}</p>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Ukuran</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.ukuranProduk}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Stok</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.stokProduk}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Jenis Tepi</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.tepiProduk}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Jenis Bahan</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.bahanProduk}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Kategori</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.kategoriProduk}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Label</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.labelProduk}</pre>
              </td>
            </tr>
          </tbody>
        </table>
        <Link href="/admin/product">
          <button className="btn btn-primary btn-sm btn-block" type="submit" style={{}}> Back </button>
        </Link>
      </section>
    </LayoutAdmin>
  );
};
export default DetailProdukAdmin;