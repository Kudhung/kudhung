import LayoutAdmin from '../../../components/Layout_Admin'
import Link from 'next/link'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export async function getServerSideProps(context) {
    let daftarPromo = await prisma.promo.findMany()
    return { props: { daftarPromo } };
}

const Admin = (props) => {
    const [idPromo, setIdPromo] = useState(props.idPromo);
    const [judulPromo, setJudulPromo] = useState(props.judulPromo);
    return (
        <LayoutAdmin>
            <div className="content" style={{ position: "relative" }}>
                <h3 className="section_title_post" style={{ marginTop: "1%", textAlign: "center", marginLeft: "5%", marginRight: "-10%" }}>Daftar Promo</h3>
                <div className="py-6 px-0 " style={{ marginLeft: "20%", marginRight: "2%", marginTop: "1%" }}>
                    <div className="div_button_add">
                        <Link href="/admin/promo/add">
                            <button className="button_add_post" value="Detail">ADD +</button>
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <div style={{ position: "relative" }}>
                                <table className="table table-striped ">
                                    <thead>
                                        <tr style={{ textAlign: "center" }}>
                                            <th>No</th>
                                            <th>Gambar</th>
                                            <th style={{ textAlign: "left" }}>Nama Promo</th>
                                            <th style={{ textAlign: "left" }}>Harga</th>
                                            <th style={{ textAlign: "left" }}>Status</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.daftarPromo.map((promo, nomor = 1) => (
                                            <tr key={nomor + 1}>
                                                <td style={{ textAlign: "center", width: "50px" }}>{nomor + 1}</td>
                                                <td style={{ width: "220px" }}>
                                                    <img src={promo.gambarPromo} style={{ width: "120px", marginLeft: "18%" }} />
                                                </td>
                                                <td style={{ textAlign: "left", width: "200px" }}>{promo.judulPromo}</td>
                                                <td style={{ textAlign: "left", width: "150px" }}>{promo.hargaPromo}</td>
                                                <td style={{ textAlign: "left", width: "250px" }}>{promo.statusPromo}</td>
                                                <td className="div_button_post">
                                                    <FontAwesomeIcon
                                                        icon={faTrashAlt}
                                                        style={{ color: "red", marginRight: "4px", width: "18px", cursor: "pointer" }}
                                                        onClick={() => {
                                                            setIdPromo(promo.idPromo),
                                                                setJudulPromo(promo.judulPromo)
                                                            document.getElementById('promo_modal').style.display = 'block'
                                                        }}
                                                    /> |

                                                    <Link href="/admin/promo/update/[kode]" as={`/admin/promo/update/${promo.idPromo}`}>
                                                        <a>
                                                            <FontAwesomeIcon
                                                                icon={faPencilAlt}
                                                                style={{ color: "green", marginRight: "4px", marginLeft: "7px", width: "18px", cursor: "pointer" }}
                                                            />
                                                        </a>
                                                    </Link> |
                                                    <Link
                                                        href="/admin/promo/detail/[promo]"
                                                        as={`/admin/promo/detail/${promo.idPromo}`}
                                                    >
                                                        <a>
                                                            <FontAwesomeIcon
                                                                icon={faInfoCircle}
                                                                style={{ color: "blue", marginRight: "4px", marginLeft: "7px", width: "18px", cursor: "pointer" }}
                                                            />
                                                        </a>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div id="promo_modal" className="modal">
                                    <span
                                        onClick={() => (document.getElementById('promo_modal').style.display = 'none')}
                                        className="close"
                                        title="Close Modal"
                                        style={{ cursor: "pointer" }}
                                    >
                                        &times;
                                    </span>
                                    <div className="modal-content">
                                        <div className="container_config">
                                            <h2>Remove {judulPromo} ?</h2>
                                            <p>Are you sure you want to delete the " {judulPromo} "  ?</p>
                                            <div className="clearfix">
                                                <button
                                                    type="button"
                                                    className="cancelbtn button__config"
                                                    value="Cancel"
                                                    onClick={() => (document.getElementById('promo_modal').style.display = 'none')}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="button"
                                                    className="deletebtn button__config"
                                                    value=" "
                                                    onClick={async () => {
                                                        const promo = {
                                                            idPromo: idPromo
                                                        }
                                                        try {
                                                            const hapus = await fetch("/api/promo/delete", {
                                                                method: "POST",
                                                                body: JSON.stringify(promo),
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
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>)
}
export default Admin