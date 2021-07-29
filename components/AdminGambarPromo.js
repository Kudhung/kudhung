import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListGmbrPromo = (props) => {
    return (
        <div style={{ width: "100%" }}>
            <table className="table table-striped ">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No</th>
                        <th>URL</th>
                        <th>Id Produk</th>
                        <th>Keterangan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.daftarGambar.map((gambar, nomor = 1) => (
                        <tr key={gambar.idGmbrpromo}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "200px" }}>
                                <img style={{ width: "100px", marginLeft: "20%" }} className="img-thumbnail" src={gambar.urlGmbrpromo} />
                            </td>
                            <td style={{ textAlign: "center", width: "200px" }}>{gambar.promoId}</td>
                            <td style={{ textAlign: "center", width: "200px" }}>{gambar.ketPromo}</td>
                            <td className="div_button_post">
                                <Link href="/admin/gallery/promo/update/[kode]" as={`/admin/gallery/promo/update/${gambar.idGmbrpromo}`}>
                                    <a>
                                        <FontAwesomeIcon
                                            icon={faPencilAlt}
                                            style={{ color: "green", marginRight: "4px", marginLeft: "7px", width: "18px", cursor: "pointer" }}
                                            hidden={props.hidden}
                                        />
                                    </a>
                                </Link> |
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    style={{ color: "red", marginRight: "4px", width: "18px", marginLeft: "7px", cursor: "pointer" }}
                                    onClick={() => {
                                        props.setGmbrPromo(gambar.idGmbrpromo),
                                            props.setUrlGmbrpromo(gambar.urlGmbrpromo),
                                            props.setKetPromo(gambar.ketPromo)
                                        document.getElementById('id04').style.display = 'block'
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="id04" className="modal">
                <span
                    onClick={() => (document.getElementById('id04').style.display = 'none')}
                    className="close"
                    title="Close Modal"
                    style={{ cursor: "pointer" }}
                >
                    &times;
                </span>
                <div className="modal-content">
                    <div className="container_config">
                        <h2>Remove Image Promo ?</h2>
                        <p>Are you sure you want to delete the " {props.urlGmbrpromo} " ?</p>
                        <div className="clearfix">
                            <button type="button" className="cancelbtn button__config" value="Cancel"
                                onClick={() => (document.getElementById('id04').style.display = 'none')}
                            >
                                Cancel
                            </button>
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
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListGmbrPromo