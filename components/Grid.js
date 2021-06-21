const Grid = (props) => (

    <div className="trend__item" >
        <div className="trend__item__pic ">
                <img src={props.gambar_hijab} className="img-fluid" alt="" />
        </div>
        <div className="trend__item__text">
            <h6>{props.jenis}</h6>
            <div className="product__price">Rp. {props.harga}</div>
        </div>
    </div>

    )
    export default Grid