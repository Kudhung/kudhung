import Link from 'next/link'

const Kategori = () => (
    <section className="categories">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="categories__item categories__large__item set-bg" style={{backgroundImage:"url(/img/pashmina/pash.jpeg)"}} >
                        <div className="categories__text align_kategori">
                            <h4>PASHMINA</h4>
                            <hr />
                            <Link href="/pashmina"><p className="shop_now">Shop Now</p></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="categories__item categories__large__item set-bg" style={{backgroundImage:"url(/img/pashmina/pasqu-ceruty.jpg)"}} >
                        <div className="categories__text align_kategori">
                            <h4>SQUARE</h4>
                            <hr />
                            <Link href="/square"><p className="shop_now">Shop Now</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    )
    export default Kategori