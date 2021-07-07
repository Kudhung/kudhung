import Link from 'next/link'

const ListWarna = (props) => {
    return (
        <div style={{ width: "500px" }}>
            <table className="table table-striped ">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No</th>
                        <th>Warna</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.daftarWarna.map((warna, i = 1) => (
                        <tr key={warna.idColor}>
                            <td style={{ textAlign: "center" }}>{i + 1}</td>
                            <td style={{ textAlign: "left", width: "250px" }}>{warna.jenisColor}</td>
                            <td className="div_button_post">
                            <Link href="/admin/warna/update/[kode]" as={`/admin/warna/update/${warna.idColor}`}>
                                <button className="button_update_post" hidden={props.hidden}>Update</button>
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

export default ListWarna