import MainLayout from '../components/Main_Layout'
import Link from 'next/link'
import prisma from "../client.ts";

export async function getServerSideProps(ctx) {
  const dataPashmina = await prisma.produk.findMany(
    {
      where: { kategoriProduk: 1 },
    }
  )
  const dataSquare = await prisma.produk.findMany(
    {
      where: { kategoriProduk: 2 },
    }
  )
  const dataPromo = await prisma.promo.findMany({
    where: { statusPromo: "Sedang-berjalan" }
  })

  return {
    props: { dataPashmina, dataSquare, dataPromo },
  };
}

const GridPashmina = (props) => (
  <div className="trend__item" >
    <div className="trend__item__pic ">
      <Link
        href="/pashmina/[kode]/[jenis]"
        as={`/pashmina/${props.id}/${props.jenisProduk.replace(/\s+/g, "-").toLowerCase()}`}>
        <img src={props.gambarProduk} className="img-fluid img-thumbnail" alt={props.jenisProduk} style={{ cursor: "pointer" }} /></Link>
    </div>
    <div className="trend__item__text"><h6>{props.jenisProduk}</h6>
      <div className="product__price">Rp. {props.hargaProduk}</div>
    </div>
  </div>
)

const GridSquare = (props) => (
  <div className="trend__item" >
    <div className="trend__item__pic ">
      <Link
        href="/square/[kode]/[jenis]"
        as={`/square/${props.id}/${props.jenisProduk.replace(/\s+/g, "-").toLowerCase()}`}>
        <img src={props.gambarProduk} className="img-fluid img-thumbnail" alt={props.jenisProduk} style={{ cursor: "pointer" }} /></Link>
    </div>
    <div className="trend__item__text"><h6>{props.jenisProduk}</h6>
      <div className="product__price">Rp. {props.hargaProduk}</div>
    </div>
  </div>
)

const onSubmit = (props) => {
  /* Whatsapp Window Open */
    window.open('https://web.whatsapp.com/send' + '?phone=' + '6283857247099' + '&text=' + 'Halo !  '+ '%0A' +
    'Saya' + '%20' + 'tertarik' + '%20' + 'dengan' + '%20' + 'promo' + '%20' + 'yang' + '%20' + 'sedang' +'%20' +'berjalan.' +'%0A'+'Mohon' +'%20'+'Berikan'+'%20'+'penjelasan'+'%20'+'lebih'+'%0A%0A'+'Terima'+'%20'+'Kasih', '_blank');
};

const Beranda = (props) => (

  <MainLayout>
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0 col-md-12 col-sm-3">
            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: "url(/img/pashmina/pash.png)" }} >
              <div className="categories__text align_kategori">
                <h4>PASHMINA</h4>
                <hr />
                <Link href="/pashmina"><p className="shop_now">Shop Now</p></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0 col-md-12 col-sm-3">
            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: "url(/img/square/square.png)" }} >
              <div className="categories__text align_kategori">
                <h4>SQUARE</h4>
                <hr />
                <Link href="/square"><p className="shop_now">Shop Now</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="trend spad ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="trend__content">
              <div className="section-title">
                <h4>Pashmina</h4>
              </div>
              {props.dataPashmina.map((pashmina) => (
                <div key={pashmina.id}>
                  <GridPashmina
                    id={pashmina.id}
                    gambarProduk={pashmina.gambarProduk}
                    jenisProduk={pashmina.jenisProduk}
                    hargaProduk={pashmina.hargaProduk}
                    labelProduk={pashmina.labelProduk}
                    deskripsiProduk={pashmina.deskripsiProduk}
                  />
                </div>))}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="trend__content">
              <div className="section-title">
                <h4>Square</h4>
              </div>
              {props.dataSquare.map((square) => (
                <div key={square.id}>
                  <GridSquare
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
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 m-auto">
            <div className="banner__slider owl-carousel" >
              {props.dataPromo.map((promo) => (
                <div className="banner__text" key={promo.idPromo}>
                  <span> PROMO DEALS </span>
                  <h4 style={{ color: "red", fontSize: "15px", textAlign: "center", marginBottom: "5%" }}>{promo.periodePromo}</h4>
                  <h1>{promo.judulPromo}</h1>
                    <a onClick={onSubmit} style={{cursor:"pointer"}}>Chat Sekarang</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
)

export default Beranda