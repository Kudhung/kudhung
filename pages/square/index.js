import MainLayout from '../../components/Main_Layout'
import Link from 'next/link'
import prisma from "../../client.ts";

export async function getServerSideProps(ctx) {
    const dataSquare = await prisma.produk.findMany(
        {
        where: { kategoriProduk: 3 },
    }
    )
    return {
        props: { dataSquare },
    };
}

const List_Square = (props) => (
        <div className="product__item">
            <div className="product__item__pic set-bg ">
            <img src={props.gambarProduk} alt="" className="product__item__pic set-bg img-fluid" width="360" />
                <div className="label new">{props.labelProduk}</div>
                <ul className="product__hover">
                    <li><a href="." className="image-popup"><span className="arrow_expand"></span></a></li>
                <Link
                    href="/square/[kode]/[jenis]"
                    as={`/square/${props.id}/${props.jenisProduk.replace(/\s+/g, "-").toLowerCase()}`}
                >
                     <li><a href="." className="image-popup"><span className="icon_bag_alt"></span></a></li>
                     </Link>
                </ul>
            </div>

            <div className="product__item__text">
                <h6><a href=".">{props.jenisProduk}</a></h6>
                <div className="product__price">Rp.{props.hargaProduk}</div>
                <p>@By:Kudhung</p>
            </div>
        </div>

)

const Square = (props) => (
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
                                    <List_Square
                                        id={square.id}
                                        gambarProduk={square.gambarProduk}
                                        jenisProduk={square.jenisProduk}
                                        hargaProduk={square.hargaProduk}
                                        labelProduk={square.labelProduk}
                                        deskripsiProduk={square.deskripsiProduk}
                                    />
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
)

export default Square