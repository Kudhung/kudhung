import MainLayout from '../../components/Main_Layout'
import PromoKudhung from '../../components/Promo'
import dataPromo from '../../dataproduk/dt_promo.json';

export async function getServerSideProps(context) {
  return {
    props: { dataPromo },
  };
}

const Promo = (props) => (
  <MainLayout>
    <section className="shop spad">
      <div className="container_promo">
        {/* <h1 style={{ fontSize: "50px", wordSpacing: "10px", fontWeight: "bold", textAlign: "center", color: "red", marginBottom: "4%", textDecoration: "underline" }}>Promo Bulan Juli 2021</h1> */}
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row">

              {props.dataPromo.map((prom) => (
                <div className="col-lg-3 col-md-6" key={prom.id}>
                  <PromoKudhung
                    id={prom.id}
                    promo={prom.promo}
                    harga={prom.harga}
                    gambar={prom.gambar}
                    deskripsi={prom.deskripsi}
                    periode={prom.periode}
                  />
                </div>))}

            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
)
export default Promo