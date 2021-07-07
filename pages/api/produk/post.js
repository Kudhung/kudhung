import prisma from '../../../client.ts'

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const produk = JSON.parse(req.body)

    const post = await prisma.produk.create({
        data: {
            jenisProduk: produk.jenisProduk,
            hargaProduk: produk.hargaProduk,
            deskripsiProduk: produk.deskripsiProduk,
            labelProduk: produk.labelProduk,
            gambarProduk: produk.gambarProduk,
            warnaProduk:Number[produk.warnnaProduk],
            kategoriProduk: Number(produk.kategoriProduk)
        },
    });

    res.json(post)
}