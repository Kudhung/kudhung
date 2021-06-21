import MainLayout from '../../components/Main_Layout'
import Link from "next/link";
import dataPashmina from '../../dataproduk/dt_pashmina.json';

export async function getServerSideProps(context) {
    return {
        props: { dataPashmina },
    };
}

const List = (props) => (

    <div className="product__item">
        <div className="product__item__pic set-bg ">
            <img src={props.gambar} alt="" className="product__item__pic set-bg img-fluid" width="360" />
            <div className="label new">{props.label}</div>
            <ul className="product__hover">
                <li><a className="image-popup" style={{cursor:"pointer"}}><span className="arrow_expand"></span></a></li>
                <Link
                    href="/pashmina/[kode]/[jenis]"
                    as={`/pashmina/${props.id}/${props.jenis.replace(/\s+/g, "-").toLowerCase()}`}
                >
                    <li><a className="image-popup" style={{cursor:"pointer"}}><span className="icon_bag_alt"></span></a></li>
                </Link>
            </ul>
        </div>
        <div className="product__item__text">
            <h6><a href=".">{props.jenis}</a></h6>
            <div className="product__price">Rp.{props.harga}</div>
            <p>@By:Kudhung</p>
        </div>
    </div>)

const Pashmina = (props) => (
    <MainLayout>
        <section className="shop spad">
            <div className="col-lg-12 col-md-12">
                <div className="section-title" style={{ textAlign: "center" }}>
                    <h4>PASHMINA PRODUCT</h4>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row">

                            {props.dataPashmina.map((pashmina) => (
                                <div className="col-lg-3 col-md-6" key={pashmina.id}>
                                    <List
                                        id={pashmina.id}
                                        jenis={pashmina.jenis}
                                        harga={pashmina.harga}
                                        gambar={pashmina.gambar}
                                        label={pashmina.label}
                                        deskripsi={pashmina.deskripsi}
                                    />
                                </div>))} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
)

export default Pashmina