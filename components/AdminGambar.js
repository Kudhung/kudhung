import Link from 'next/link'

const ListGambar = (props) => {
    return (
        <div style={{ width: "100%" }}>
            <table className="table table-striped ">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No</th>
                        <th>URL</th>
                        <th>Id Produk</th>
                        <th>Id Promo</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.daftarGambar.map((gambar, nomor = 1) => (
                        <tr key={gambar.idGmbr}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "100px" }}>{gambar.urlGmbr}</td>
                            <td style={{ textAlign: "center", width: "150px" }}>{gambar.idProduk}</td>
                            <td style={{ textAlign: "center", width: "150px" }}>{gambar.promoId}</td>
                            <td className="div_button_post">
                            <Link href="/admin/gambar/update/[kode]" as={`/admin/gambar/update/${gambar.idGmbr}`}>
                                <button className="button_update_post"hidden={props.hidden}>Update</button>
                                </Link>
                                <button className="button_remove_post">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListGambar