import Main_Layout from "../../../components/Main_Layout";
import Link from 'next/link';
import prisma from "../../../client.ts";
import React, { useState } from 'react';

export async function getServerSideProps(context) {
  let kode = context.params.kode;
  let data = await prisma.produk.findUnique({
    where: { id: Number(kode) },
    include: { fotoProduk: true, warnaProduk: true }
  })
  let { jenisProduk, hargaProduk, fotoProduk, deskripsiProduk, gambarProduk, warnaProduk } = data;
  return { props: { jenisProduk, hargaProduk, fotoProduk, deskripsiProduk, gambarProduk, warnaProduk } };
}

const Detail_Square = (props) => {
  const [count, setCount]= useState(1);
  return (
    <Main_Layout>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="product__details__pic">
                <div className="container">
                  <div className="row">
                    <div className="slider img-thumbnail" style={{ backgroundColor: "#f0efef" }}>
                      <div className="slides">
                        {props.fotoProduk.map((produk) => (
                          <div key={produk.idGmbrproduk} id={produk.idGmbrproduk} className="img_detail">
                            <img src={produk.urlGmbrproduk} className="img-fluid img-thumbnail" style={{ width: "100%", height: "100%" }} /></div>
                        ))}</div>

                      {props.fotoProduk.map((produk, i = 1) => (
                        <div key={i+1}>
                        <Link href="#produk.urlGmbr" scroll={false}>
                          <a style={{
                            fontSize: "15px", fontWeight: "bold", textDecoration: "none"
                          }} hidden>{i + 1}</a>
                        </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{props.jenisProduk}
                  <div className="product__details__price">{props.hargaProduk}</div>
                </h3>
                <p>{props.deskripsiProduk}</p>
                <hr />
                <div className="product__details__button">
                  <div className="quantity row">
                    <div className="col-lg-4 col-md-4">
                      <span >Quantity:</span>
                      <div className="pro-qty">
                        <span className="dec qtybtn" onClick={() => {
                          if(count>1){
                            setCount(count - 1)
                          }
                        }} >-</span>
                        <input type="text" id="qty" defaultValue={ count} disabled />
                        <span className="inc qtybtn" onClick={() => 
                            setCount(count + 1)}>+</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <span>Color Available:</span>
                      <select className="pro-qty-clr">
                        {props.warnaProduk.map((warna) => (
                          <option value={warna.jenisColor} key={warna.idColor}>{warna.jenisColor}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <a href="#" className="cart-btn"> Order Via Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </Main_Layout>
  );
};
export default Detail_Square;