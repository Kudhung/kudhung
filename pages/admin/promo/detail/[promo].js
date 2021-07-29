import LayoutAdmin from '../../../../components/Layout_Admin';
import Link from 'next/link';
import prisma from "../../../../client.ts";
import React, { useState } from 'react';

export async function getServerSideProps(context) {
  let kode = context.params.promo;
  let data = await prisma.promo.findUnique({
    where: { idPromo: Number(kode) },
    include: { fotoPromo: true }
  })
  let { idPromo, judulPromo, hargaPromo, deskripsiPromo, periodePromo, fotoPromo, gambarPromo, statusPromo } = data;
  return { props: { idPromo, judulPromo, hargaPromo, deskripsiPromo, fotoPromo, periodePromo, gambarPromo, statusPromo } };
}

const DetailPromoAdmin = (props) => {
  const [id, setId] = useState();
  const [ketPromo, setKetPromo] = useState();
  return (
    <LayoutAdmin>
      <section className="product-details spad row" style={{ marginLeft: "20%", marginRight: "15px" }}>
        <div className="product__details__text" style={{ width: "100%", textAlign: "center", marginBottom: "2%", marginTop: "-5%" }}>
          <h5 style={{ fontSize: "30px", fontWeight: "bolder", textDecoration: "underline" }}>INFORMASI PROMO</h5>
        </div>
        <table className="table" style={{ marginBottom: "-1px" }}>
          <tbody >
            <tr style={{ backgroundColor: "rgba(139, 131, 131, 0.12)" }}>
              <td style={{ textAlign: "left", border: "none" }}>
                <div className="product__details__text" style={{ width: "100%", textAlign: "center" }}>
                  <h3 >Galeri</h3>
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
                  {props.fotoPromo.map((promo) => (
                    <div className="column__produk__admin col-lg-4" key={promo.idGmbrpromo} style={{ width: "125px", marginTop: "-2%" }}>
                      <pre style={{ fontSize: "15px", textAlign: "center", marginBottom: "1px" }}>{promo.ketPromo}</pre>
                      <img
                        src={promo.urlGmbrpromo}
                        alt="Product"
                        className="img-thumbnail"
                        onClick={() => {
                          setId(promo.urlGmbrpromo),
                            setKetPromo(promo.ketPromo),
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
                    onClick={() => (document.getElementById('pop').style.display = 'none')} className="closebtn__produk__admin"
                  >
                    &times;
                  </span>
                  <img id="expandedImg" className="img-thumbnail" style={{ width: "100%" }} src={id} />
                  <pre style={{ fontSize: "15px", textAlign: "center", marginBottom: "1px" }} id="expandedImg">{ketPromo}</pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table" style={{ backgroundColor: "white", border: "solid 2px black" }}>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Nama Promo</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.judulPromo}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Harga</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk"><b>Rp. </b> {props.hargaPromo}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Deskripsi</h3>
              </td>
              <td style={{ width: "500px" }}>
                <div style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.deskripsiPromo}</div>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Periode Promo</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.periodePromo}</pre>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td style={{ width: "500px", borderRight: "solid 1px black" }}>
                <h3 className="galeri__produk">Status Promo</h3>
              </td>
              <td style={{ width: "500px" }}>
                <pre style={{ fontSize: "18px" }} className="deskripsi__admin__produk">{props.statusPromo}</pre>
              </td>
            </tr>
          </tbody>
        </table>
        <Link href="/admin/promo">
          <button className="btn btn-primary btn-sm btn-block" type="submit" > Back </button>
        </Link>
      </section>
    </LayoutAdmin>
  );
};
export default DetailPromoAdmin;