import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListWarna = (props) => {
    return (
        <div style={{ width: "500px",marginLeft:"5%" }}>
            <table className="table table-striped ">
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th>No</th>
                        <th>Warna</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {props.daftarWarna.map((warna, nomor = 1) => (
                        <tr key={nomor + 1}>
                            <td style={{ textAlign: "center" }}>{nomor + 1}</td>
                            <td style={{ textAlign: "left", width: "250px" }}>{warna.jenisColor}</td>
                            <td className="div_button_post">
                                <Link href="/admin/color/update/[kode]" as={`/admin/color/update/${warna.idColor}`}>
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
                                        props.setId(warna.idColor),
                                            props.setJenis(warna.jenisColor),
                                            document.getElementById('id02').style.display = 'block'
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="id02" className="modal">
                <span
                    onClick={() => (document.getElementById('id02').style.display = 'none')}
                    className="close"
                    title="Close Modal"
                    style={{ cursor: "pointer" }}
                >
                    &times;
                </span>
                <div className="modal-content">
                    <div className="container_config">
                        <h2>Remove Color ?</h2>
                        <p>Are you sure you want to delete the " {props.jenis} " color ?</p>
                        <div className="clearfix">
                            <button
                                type="button"
                                className="cancelbtn button__config"
                                value="Cancel"
                                onClick={() => (document.getElementById('id02').style.display = 'none')}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="deletebtn button__config"
                                value=" "
                                onClick={async () => {
                                    const warna = {
                                        idColor: props.id
                                    }
                                    try {
                                        const hapus = await fetch("/api/color/delete", {
                                            method: "POST",
                                            body: JSON.stringify(warna),
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

export default ListWarna