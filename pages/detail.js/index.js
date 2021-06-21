import MainLayout from '../../components/Main_Layout'
import Link from 'next/link'

const Detail = () => (
  <MainLayout>
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
                        <img src="/img/pashmina/pasqu-hyc.jpg"className="img-fluid"/></div>
                      <div id="slide-2">
                        <img src="/img/pashmina/pash-ero.jpg" className="img-fluid"/></div>
                      <div id="slide-3">
                        <img src="/img/pashmina/pash.jpeg" className="img-fluid"/></div>
                      <div id="slide-4">
                        <img src="/img/pashmina/pasqu-ceruty.jpg" className="img-fluid"/></div>
                      <div id="slide-5">
                        <img src="/img/pashmina/pas-ceruty.jpg" className="img-fluid"/></div>
                    </div>

                    
                    <Link href="#slide-1" scroll={false} >
                      <a style={{fontSize:"15px", fontWeight:"bold", textDecoration:"none"
                    }}>1</a>
                    </Link>
                    <Link href="#slide-2" scroll={false}>
                      <a style={{fontSize:"15px", fontWeight:"bold", textDecoration:"none"}}>2</a>
                    </Link>
                    <Link href="#slide-3" scroll={false}>
                      <a style={{fontSize:"15px", fontWeight:"bold", textDecoration:"none"}}>3</a>
                    </Link>
                    <Link href="#slide-4" scroll={false}>
                      <a style={{fontSize:"15px", fontWeight:"bold", textDecoration:"none"}}>4</a>
                    </Link>
                    <Link href="#slide-5" scroll={false}>
                      <a style={{fontSize:"15px", fontWeight:"bold", textDecoration:"none"}}>5</a>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__details__text">
              <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
              <div className="product__details__price">$ 75.0</div>
              <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                magni lores eos qui ratione voluptatem sequi nesciunt.</p>
              <div className="product__details__button">
                <div className="quantity">
                  <span>Quantity:</span>
                  <div className="pro-qty"><span className="dec qtybtn">-</span>
                    <input type="text" value="1" onClick="" />
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
  </MainLayout>
)

export default Detail