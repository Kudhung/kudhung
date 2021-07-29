
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListKategori = (props) => {
    return (
        <div style={{ width: "500px", marginLeft: "25%" }}>
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
                        <tr key={nomor + 1}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "250px" }}>{kategori.jenisKtg}</td>
                            <td className="div_button_post">
                                <Link href="/admin/category/update/[kode]" as={`/admin/category/update/${kategori.idKtg}`}>
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
                                        props.setId(kategori.idKtg),
                                            props.setJenis(kategori.jenisKtg),
                                            document.getElementById('id01').style.display = 'block'
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="id01" className="modal">
                <span
                    onClick={() => (document.getElementById('id01').style.display = 'none')}
                    className="close"
                    title="Close Modal"
                    style={{ cursor: "pointer" }}
                >
                    &times;
                </span>
                <div className="modal-content">
                    <div className="container_config">
                        <h2>Remove Category ?</h2>
                        <p>Are you sure you want to delete the " {props.jenis} " category ?</p>
                        <div className="clearfix">
                            <button
                                type="button"
                                className="cancelbtn button__config"
                                value="Cancel"
                                onClick={() => (document.getElementById('id01').style.display = 'none')}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="deletebtn button__config"
                                value=" "
                                onClick={async (event) => {
                                    const kategori = {
                                        idKtg: props.id
                                    }
                                    try {
                                        const hapus = await fetch("/api/category/delete", {
                                            method: "POST",
                                            body: JSON.stringify(kategori),
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

export default ListKategori