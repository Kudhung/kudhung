import Main_Layout from "../../../components/Main_Layout"; 
import dataSquare from "../../../dataproduk/dt_square.json"

export async function getServerSideProps(context) {
    let kode = context.params.kode;
    let data = dataSquare.find((square) => square.id == kode);
    let { jenis, harga, gambar, deskripsi } = data;
    return { props: { jenis, harga, gambar, deskripsi } };
   }
   

const Detail_Square= (props) => {
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
                          </div>      
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
                        {/* <div className="pro-qty"><span className="dec qtybtn">-</span>
                          <input type="text" value="1" onClick="" />
                          <span className="inc qtybtn">+</span>
                        </div> */}
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