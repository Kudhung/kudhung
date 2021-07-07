import Link from 'next/link'

const ListKategori = (props) => {
    return (
        <div style={{ width: "500px" }}>
            <table className="table table-striped ">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No</th>
                        <th>Jenis Kategori</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.daftarKategori.map((kategori, nomor = 1) => (
                        <tr key={kategori.idKtg}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "250px" }}>{kategori.jenisKtg}</td>
                            <td className="div_button_post">
                                <Link href="/admin/kategori/update/[kode]" as={`/admin/kategori/update/${kategori.idKtg}`}>
                                    <button className="button_update_post"  hidden={props.hidden}>Update</button>
                                    </Link>
                                <Link href="/admin/kategori/delete/[kode]" as={`/admin/kategori/delete/${kategori.idKtg}`}>
                                    <button className="button_remove_post" >Remove</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListKategori