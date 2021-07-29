import Main_Layout from "../../../components/Main_Layout";
import Link from 'next/link';
import prisma from "../../../client.ts";

export async function getServerSideProps(context) {
  let kode = context.params.detailpromo;
  let data = await prisma.promo.findUnique({
    where: { idPromo: Number(kode) },
    include: { fotoPromo: true }
  })
  let { judulPromo, hargaPromo,gambarPromo, deskripsiPromo, periodePromo, fotoPromo,statusPromo} = data;
  return { props: { judulPromo, hargaPromo,gambarPromo, deskripsiPromo, periodePromo, fotoPromo,statusPromo} };
}
const Detail_Promo = (props) => {
  return (
    <Main_Layout>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="product__details__pic">
                <div className="container">
                  <div className="row">
                    <div className="slider img-thumbnail" style={{ backgroundColor: "#f0efef" }}>
                      <div className="slides">
                          <div className="img_detail" >
                            <img src={props.gambarPromo}  alt="Promo" className="img-fluid img-thumbnail" style={{ width:"100%", height: "100%" }} />
                            </div>
                        {props.fotoPromo.map((promo,i=1) => (
                          <div key={i+1} id={promo.idGmbrpromo} className="img_detail" >
                            <img src={promo.urlGmbrpromo}  alt="Promo" className="img-fluid img-thumbnail" style={{ width:"100%", height: "100%" }} />
                            </div>
                        ))}
                        </div>

                      {props.fotoPromo.map((p, i = 1) => (
                        <div key={i+1}>
                          <a style={{fontSize: "15px", fontWeight: "bold", textDecoration: "none"}} hidden>{i + 1}</a>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="product__details__text">
                <h3>{props.judulPromo}
                  <div className="product__details__price">{props.hargaPromo}</div>
                </h3>
                <p>{props.deskripsiPromo}</p>
                <hr />
                <div className="product__details__button">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <h5 style={{fontSize:"20px" ,fontWeight:"bold", padding:"5px"}}>Color:</h5>
                      {props.fotoPromo.map((warna, i = 1) => (
                        <div key={i+1}>
                        <h6 value={warna.ketPromo} style={{fontSize:"18px", padding:"6px",position:"relative", marginLeft:"8%"}}>{i + 1}. {warna.ketPromo}</h6>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <h5 style={{fontSize:"20px" ,fontWeight:"bold", padding:"5px"}}>Status Promo:</h5>
                        <h6 style={{fontSize:"18px", padding:"6px",position:"relative", marginLeft:"8%"}}>{props.statusPromo}</h6>
                    </div>
                  <Link href="/promo"><a className="cart-btn" style={{marginTop:"8%"}}> Kembali </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </Main_Layout>
  );
};
export default Detail_Promo;