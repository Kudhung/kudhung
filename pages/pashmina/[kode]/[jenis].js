import Main_Layout from "../../../components/Main_Layout";
import Link from 'next/link';
import prisma from "../../../client.ts";

export async function getServerSideProps(context) {
  let kode = context.params.kode;
  let data = await prisma.produk.findUnique({
    where: { id: Number(kode) },
    include: { gambarProduk: true }
  })
  let { jenisProduk, hargaProduk, urlProduk, deskripsiProduk, gambarProduk } = data;
  return { props: { jenisProduk, hargaProduk, urlProduk, deskripsiProduk, gambarProduk } };
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
                    <div className="slider img-thumbnail" style={{backgroundColor:"#f0efef"}}>
                      <div className="slides">
                        <div className="img_detail">
                          <img src={props.urlProduk} className="img_fluid img-thumbnail" style={{width:"100%",height:"100%"}}/></div>

                        {props.gambarProduk.map((produk) => (
                          <div key={produk.idGmbr} className="img_detail">
                            <img src={produk.urlGmbr} className="img-fluid img-thumbnail" style={{width:"100%",height:"100%"}}/></div>
                        ))}


                        {/* <div>
                          <img src={props.urlProduk} className="img_detail" /></div>
                        <div id="slide-2">
                          <img src={props.gambar} className="img_detail" /></div>
                        <div id="slide-3">
                          <img src={props.gambar} className="img_detail" /></div>
                        <div id="slide-4">

                          <img src={props.gambar} className="img_detail" /></div>
                        <div id="slide-5">
                          <img src={props.gambar} className="img_detail" /></div> */}
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
                <h3>{props.jenisProduk}
                  <div className="product__details__price">{props.hargaProduk}</div>
                </h3>
                <p>{props.deskripsiProduk}</p>
                <hr />
                <div className="product__details__button">
                  <div className="quantity row">
                    <div className="col-lg-4">
                      <span className="col-lg-6">Quantity:</span>
                      {/* <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" defaultValue="1" onClick="" />
                      <span className="inc qtybtn">+</span>
                    </div> */}
                    </div>
                    <div className="col-lg-4">
                      <span>Color:</span>
                      {/* <select className="pro-qty-clr">
                        <option value="pos">POS Indonesia</option>
                        <option value="jne">JNE</option>
                        <option value="tiki">TIKI</option>
                        <option value="wahana">Wahana</option>
                    </select> */}
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