import MainLayout from '../../components/Main_Layout'
import Link from "next/link";
import prisma from "../../client.ts";
import React, { useState } from 'react';

export async function getServerSideProps(ctx) {
    const dataSquare = await prisma.produk.findMany(
        {
            where: { kategoriProduk: 2 },
        }
    )
    return {
        props: { dataSquare },
    };
}

const ListSquare = (props) => (

    <div className="product__item">
        <div className="product__item__pic set-bg ">
            <img src={props.gambarProduk} alt={props.jenisProduk} className="product__item__pic set-bg img-fluid" width="360" />
            <div className="label new">{props.labelProduk}</div>
            <ul className="product__hover">
                <li><a className="image-popup" style={{ cursor: "pointer" }} onClick={() => { props.setIdImg(props.gambarProduk), document.getElementById('image_modal').style.display = 'block' }}><span className="arrow_expand"></span></a></li>
                <Link
                    href="/square/[kode]/[jenis]"
                    as={`/square/${props.id}/${props.jenisProduk.replace(/\s+/g, "-").toLowerCase()}`}
                >
                    <li><a className="image-popup" style={{ cursor: "pointer" }}><span className="icon_bag_alt"></span></a></li>
                </Link>
            </ul>
        </div>
        <div className="product__item__text">
            <h6><a href=".">{props.jenisProduk}</a></h6>
            <div className="product__price">Rp. {props.hargaProduk}</div>
            <p>@By:Kudhung</p>
        </div>
    </div>)

const SquarePage = (props) => {
    const [idImg, setIdImg] = useState();

    return (
        <MainLayout>
            <section className="shop spad">
                <div className="col-lg-12 col-md-12">
                    <div className="section-title" style={{ textAlign: "center" }}>
                        <h4>SQUARE PRODUCT</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                {props.dataSquare.map((square) => (
                                    <div className="col-lg-3 col-md-6" key={square.id}>
                                        <ListSquare
                                            id={square.id}
                                            gambarProduk={square.gambarProduk}
                                            jenisProduk={square.jenisProduk}
                                            hargaProduk={square.hargaProduk}
                                            labelProduk={square.labelProduk}
                                            deskripsiProduk={square.deskripsiProduk}
                                            idImg={idImg} setIdImg={setIdImg}
                                        />
                                    </div>))}
                            </div>
                        </div>
                    </div>

                    {/* Modal Image */}
                    <div id="image_modal" className="modal" style={{ backgroundColor: "grey", opacity: "-moz-initial" }}>
                        <span onClick={() => (document.getElementById('image_modal').style.display = 'none')} className="close" title="Close Modal" style={{ cursor: "pointer", fontSize: "60px", marginRight: "5%" }}>&times;</span>
                        <img src={idImg} alt="Product" style={{ width: "50%", height: "90%", marginLeft: "25%", marginTop: "2%" }} />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default SquarePage