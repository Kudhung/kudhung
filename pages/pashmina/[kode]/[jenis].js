import Main_Layout from "../../../components/Main_Layout";
import dataPashmina from "../../../dataproduk/dt_pashmina.json"
import Link from 'next/link'

export async function getServerSideProps(context) {
  let kode = context.params.kode;
  let data = dataPashmina.find((pashmina) => pashmina.id == kode);
  let { jenis, harga, gambar, deskripsi } = data;
  return { props: { jenis, harga, gambar, deskripsi } };
}
const Detail_Pashmina = (props) => {
  return (
    <Main_Layout>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <div className="container">
                  <div className="row">
                    <div className="slider">
                      <div className="slides">
                        <div id="slide-1">
                          <img src={props.gambar} className="img_detail"/></div>
                        <div id="slide-2">
                          <img src={props.gambar} className="img_detail" /></div>
                        <div id="slide-3">
                          <img src={props.gambar}  className="img_detail"/></div>
                        <div id="slide-4">
                          <img src={props.gambar}  className="img_detail"/></div>
                        <div id="slide-5">
                          <img src={props.gambar} className="img_detail" /></div>
                      </div>

                      <Link href="#slide-1" scroll={false} >
                        <a style={{
                          fontSize: "15px", fontWeight: "bold", textDecoration: "none"
                        }}>1</a>
                      </Link>
                      <Link href="#slide-2" scroll={false}>
                        <a style={{ fontSize: "15px", fontWeight: "bold", textDecoration: "none" }}>2</a>
                      </Link>
                      <Link href="#slide-3" scroll={false}>
                        <a style={{ fontSize: "15px", fontWeight: "bold", textDecoration: "none" }}>3</a>
                      </Link>
                      <Link href="#slide-4" scroll={false}>
                        <a style={{ fontSize: "15px", fontWeight: "bold", textDecoration: "none" }}>4</a>
                      </Link>
                      <Link href="#slide-5" scroll={false}>
                        <a style={{ fontSize: "15px", fontWeight: "bold", textDecoration: "none" }}>5</a>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3> {props.jenis} <span>Brand: Kudhung</span></h3>
                <div className="product__details__price">{props.harga}</div>
                <p>{props.deskripsi}</p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" defaultValue="1" onClick="" />
                      <span className="inc qtybtn">+</span>
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
export default Detail_Pashmina;