import MainLayout from '../../components/Main_Layout'
import Link from 'next/link'

export async function getServerSideProps(ctx) {
  const dataPromo = await prisma.promo.findMany()
  return {
      props: { dataPromo },
  };
}

const PromoKudhung2 = (props) => (
  <div style={{ backgroundColor: "rgb(226, 226, 226)" }}>
    <div style={{ padding: "5px 5px 5px 5px", width: "100%", height: "100%" }}>
      <img src={props.gambarPromo} alt={props.judulPromo} className="img-fluid" />
    </div>
    <div style={{ marginTop: "5%", fontFamily: "serif" }} >
      <h3 style={{ color: "black", fontSize: "18px", fontWeight: "bolder", textAlign: "center" }}>{props.judulPromo}</h3>
      <h3 style={{ color: "black", fontSize: "15px", textAlign: "center", fontWeight: "bold" }}>{props.hargaPromo}</h3>
      <h3 style={{ color: "black", fontSize: "15px", marginTop: "7%", textAlign: "center" }}>Periode Promo</h3>
      <h3 style={{ color: "black", fontSize: "15px", textAlign: "center", fontWeight: "bold" }}>{props.periodePromo}</h3>
    </div>
    <div className="text-block">
      <Link
        href="/promo/detail/[detailpromo]"
        as={`/promo/detail/${props.idPromo}`}
      >
        <h4 style={{ color: "white", fontSize: "18px", fontWeight: "bold", marginTop: "7%" }}>DETAIL PROMO</h4>
      </Link>
    </div>
  </div>

)

const Promo2 = (props) => (
  <MainLayout>
    <section className="shop spad">
      <div className="container_promo">

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">

              {props.dataPromo.map((prom) => (
                <div className="col-lg-3 col-md-6 col-sm-3" style={{marginBottom:"5%"}} key={prom.idPromo}>
                  <PromoKudhung2
                    idPromo={prom.idPromo}
                    judulPromo={prom.judulPromo}
                    hargaPromo={prom.hargaPromo}
                    gambarPromo={prom.gambarPromo}
                    deskripsiPromo={prom.deskripsiPromo}
                    periodePromo={prom.periodePromo}
                  />
                </div>))}

            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
)
export default Promo2