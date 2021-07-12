import MainLayout from '../components/Main_Layout'
import Banner from '../components/Banner'
import Kategori from '../components/Kategori'
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
  const dataPreorder = await prisma.produk.findMany(
    {
      where: { kategoriProduk: 3 },
    })
  return {
    props: { dataPashmina, dataSquare, dataPreorder},
  };
}

const GridPashmina = (props) => (
  <div className="trend__item" >
    <div className="trend__item__pic ">
      <Link
        href="/pashmina/[kode]/[jenis]"
        as={`/pashmina/${props.id}/${props.jenisProduk.replace(/\s+/g, "-").toLowerCase()}`}>
        <img src={props.gambarProduk} className="img-fluid img-thumbnail" alt="" style={{ cursor: "pointer" }} /></Link>
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
        <img src={props.gambarProduk} className="img-fluid img-thumbnail" alt="" style={{ cursor: "pointer" }} /></Link>
    </div>
    <div className="trend__item__text"><h6>{props.jenisProduk}</h6>
      <div className="product__price">Rp. {props.hargaProduk}</div>
    </div>
  </div>
)

const GridPreOrder = (props) => (
  <div className="trend__item" >
    <div className="trend__item__pic ">
      <Link
        href="/preorder/[kode]/[jenis]"
        as={`/preorder/${props.id}/${props.jenisProduk.replace(/\s+/g, "-").toLowerCase()}`}>
        <img src={props.gambarProduk} className="img-fluid img-thumbnail" alt="" style={{ cursor: "pointer" }} /></Link>
    </div>
    <div className="trend__item__text"><h6>{props.jenisProduk}</h6>
      <div className="product__price">Rp. {props.hargaProduk}</div>
    </div>
  </div>
)

const Beranda = (props) => (

  <MainLayout>
    <Kategori />
    <section className="trend spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
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

          <div className="col-lg-4 col-md-4 col-sm-6">
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

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
              <div className="section-title">
                <h4>Pre-Order</h4>
              </div>
              {props.dataPreorder.map((dtPreorder) => (
                <GridPreOrder
                  key={dtPreorder.id}
                  id={dtPreorder.id}
                  jenisProduk={dtPreorder.jenisProduk}
                  gambarProduk={dtPreorder.gambarProduk}
                  hargaProduk={dtPreorder.hargaProduk}
                />))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Banner new="Pashmina Square" />
  </MainLayout>
)

export default Beranda