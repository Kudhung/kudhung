import Banner from '../components/Banner'
import Grid from '../components/Grid'
import Kategori from '../components/Kategori'
import MainLayout from '../components/Main_Layout'

const Beranda = () => (
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
              <Grid
                gambar_hijab="/img/pashmina/pasqu-ceruty.jpg"
                jenis="Pashmina A"
                harga="10.000"
              />
              <Grid
                gambar_hijab="/img/pashmina/pash-ero.jpg"
                jenis="Pashmina B"
                harga="20.000"
              />
              <Grid
                gambar_hijab="/img/pashmina/pas-ceruty.jpg"
                jenis="Pashmina A"
                harga="30.000"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
              <div className="section-title">
                <h4>Square</h4>
              </div>
              <Grid
                gambar_hijab="/img/pashmina/pash-hyc.jpeg"
                jenis="Pashmina D"
                harga="40.000"
              />
              <Grid
                gambar_hijab="/img/pashmina/pash.jpeg"
                jenis="Pashmina E"
                harga="50.000"
              />
              <Grid
                gambar_hijab="/img/pashmina/pasqu-b.jpg"
                jenis="Pashmina F"
                harga="60.000"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
              <div className="section-title">
                <h4>New Collection</h4>
              </div>
              <Grid
                gambar_hijab="/img/pashmina/pasqu-hyc.jpg"
                jenis="Pashmina G"
                harga="70.000"
              />
              <Grid
                gambar_hijab="/img/pashmina/pash-ero.jpg"
                jenis="Pashmina H"
                harga="80.000"
              />
              <Grid
                gambar_hijab="/img/pashmina/pas-ceruty.jpg"
                jenis="Pashmina I"
                harga="90.000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Banner new="Pashmina Square"/>
  </MainLayout>
)
export default Beranda