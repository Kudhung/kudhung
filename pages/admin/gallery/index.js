import LayoutAdmin from "../../../components/Layout_Admin"
import Link from 'next/link'
const Gallery = () => {
    return (
        <LayoutAdmin>
            <div  style={{ position: "relative", marginLeft: "20%", marginRight: "0%", marginTop: "1%" }}>
                    <Link href="/admin/gallery/product"><button className="button_gallery " style={{textTransform:"capitalize"}}><span>gallery product</span></button></Link>
                    <Link href="/admin/gallery/promo"><button className="button_gallery " style={{textTransform:"capitalize"}}><span>gallery promo </span></button></Link>
                    </div>
        </LayoutAdmin>
    )
}

export default Gallery