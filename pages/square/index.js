import MainLayout from '../../components/Main_Layout'
import Link from 'next/link'
import dataSquare from '../../dataproduk/dt_square.json';

export async function getServerSideProps(context) {
    return {
        props: { dataSquare },
    };
}

const List_Square = (props) => (
        <div className="product__item">
            <div className="product__item__pic set-bg ">
            <img src={props.gambar} alt="" className="product__item__pic set-bg img-fluid" width="360" />
                <div className="label new">{props.label}</div>
                <ul className="product__hover">
                    <li><a href="." className="image-popup"><span className="arrow_expand"></span></a></li>
                <Link
                    href="/square/[kode]/[jenis]"
                    as={`/square/${props.id}/${props.jenis.replace(/\s+/g, "-").toLowerCase()}`}
                >
                     <li><a href="." className="image-popup"><span className="icon_bag_alt"></span></a></li>
                     </Link>
                </ul>
            </div>

            <div className="product__item__text">
                <h6><a href=".">{props.jenis}</a></h6>
                <div className="product__price">Rp.{props.harga}</div>
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
                                        jenis={square.jenis}
                                        harga={square.harga}
                                        gambar={square.gambar}
                                        label={square.label}
                                        deskripsi={square.deskripsi}
                                    />
                                </div>))} 


                            {/* <List_Square

                                jenis="Square A"
                                harga="1.000.000"
                                gambar="/img/pashmina/pasqu-ceruty.jpg"
                                label="New 5"
                            />
                            <List_Square

                                jenis="Square B"
                                harga="190.000"
                                gambar="/img/pashmina/pas-ceruty.jpg"
                                label="New 6"
                            />
                            <List_Square

                                jenis="Square C"
                                harga="180.000"
                                gambar="/img/pashmina/pasqu-hyc.jpg"
                                label="New 7"
                            />
                            <List_Square

                                jenis="Square D"
                                harga="170.000"
                                gambar="/img/pashmina/pash.jpeg"
                                label="New 8"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
)

export default Square