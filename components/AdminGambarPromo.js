import Link from 'next/link'

const ListGmbrPromo = (props) => {
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
                        <tr key={gambar.idGmbrpromo}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "100px" }}>{gambar.urlGmbrpromo}</td>
                            <td style={{ textAlign: "center", width: "150px" }}>{gambar.promoId}</td>
                            <td className="div_button_post">
                                <Link href="/admin/gallery/promo/update/[kode]" as={`/admin/gallery/promo/update/${gambar.idGmbrpromo}`}>
                                    <button className="button_update_post" hidden={props.hidden}>Update</button>
                                </Link>
                                <button className="button_remove_post"
                                    onClick={() => {
                                        props.setGmbrPromo(gambar.idGmbrpromo),
                                            props.setUrlGmbrpromo(gambar.urlGmbrpromo),
                                            document.getElementById('id04').style.display = 'block'
                                    }
                                    } value="Remove">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="id04" className="modal">
                <span onClick={() => (document.getElementById('id04').style.display = 'none')} className="close" title="Close Modal" style={{ cursor: "pointer" }}>&times;</span>
                <div className="modal-content">
                    <div className="container_config">
                        <h2>Remove Image Promo ?</h2>
                        <p>Are you sure you want to delete the " {props.urlGmbrpromo} " ?</p>
                        <div className="clearfix">
                            <button type="button" className="cancelbtn button__config" value="Cancel"
                                onClick={() => (document.getElementById('id04').style.display = 'none')}>Cancel</button>

                            <button type="button" className="deletebtn button__config" value=" "
                                onClick={async (event) => {
                                    const gambar = {
                                        idGmbrpromo: props.Gmbrpromo
                                    }
                                    try {
                                        const hapus = await fetch("/api/gallery/promo/delete", {
                                            method: "POST",
                                            body: JSON.stringify(gambar),
                                        });
                                        location.reload();

                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListGmbrPromo