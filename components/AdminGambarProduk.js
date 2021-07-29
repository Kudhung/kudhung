import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListGambarProduk = (props) => {
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
                        <tr key={gambar.idGmbrproduk}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "200px" }}>
                                <img style={{ width: "100px", marginLeft: "20%" }} className="img-thumbnail" src={gambar.urlGmbrproduk} />
                            </td>
                            <td style={{ textAlign: "center", width: "200px" }}>{gambar.idProduk}</td>
                            <td style={{ textAlign: "center", width: "200px" }}>{gambar.ketGmbr}</td>
                            <td className="div_button_post">
                                <Link href="/admin/gallery/product/update/[kode]" as={`/admin/gallery/product/update/${gambar.idGmbrproduk}`}>
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
                                        props.setIdGmbr(gambar.idGmbrproduk),
                                            props.setUrlGmbr(gambar.urlGmbrproduk),
                                            document.getElementById('id03').style.display = 'block'
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="id03" className="modal">
                <span
                    onClick={() => (document.getElementById('id03').style.display = 'none')}
                    className="close"
                    title="Close Modal"
                    style={{ cursor: "pointer" }}
                >
                    &times;
                </span>
                <div className="modal-content">
                    <div className="container_config">
                        <h2>Remove Image Product ?</h2>
                        <p>Are you sure you want to delete the " {props.urlGmbr} " ?</p>
                        <div className="clearfix">
                            <button
                                type="button"
                                className="cancelbtn button__config"
                                value="Cancel"
                                onClick={() => (document.getElementById('id03').style.display = 'none')}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="deletebtn button__config"
                                value=" "
                                onClick={async (event) => {
                                    const gambar = {
                                        idGmbrproduk: props.idGmbr
                                    }
                                    try {
                                        const hapus = await fetch("/api/gallery/product/delete", {
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

export default ListGambarProduk