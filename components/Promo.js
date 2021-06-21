import Link from 'next/link'

const PromoKudhung= (props) => (
    <div style={{backgroundColor:"rgb(226, 226, 226)"}}>
      <div className="product__item__promo">
        <img src={props.gambar} alt="" style={{ marginLeft:"3.6%", marginTop:"3.6%", width: "260px", height: "300px" }} />
        <div style={{marginTop:"5%", fontFamily:"serif"}} >
          <h3 style={{color:"black", fontSize:"18px", fontWeight:"bolder", textAlign:"center"}}>{props.promo}</h3>
          <h3 style={{color:"black", fontSize:"15px", textAlign:"center", fontWeight:"bold"}}>{props.harga}</h3>
          <h3 style={{color:"black", fontSize:"15px",marginTop:"7%", textAlign:"center"}}>Periode Promo</h3>
          <h3 style={{color:"black", fontSize:"15px", textAlign:"center", fontWeight:"bold"}}>{props.periode}</h3>
        </div>
        <div className="text-block">
                <Link
                    href="/promo/[kode]/[detailpromo]"
                    as={`/promo/${props.id}/${props.promo.replace(/\s+/g, "-").toLowerCase()}`}
                >
          <h4 style={{ color: "white", fontSize: "18px", fontWeight: "bold",marginTop:"7%" }}>ORDER NOW</h4>
          </Link>
        </div>
      </div>
    </div>

    )
export default PromoKudhung