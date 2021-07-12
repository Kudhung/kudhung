import prisma from "../../../../client.ts"

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const gambarproduk = JSON.parse(req.body)

    const post = await prisma.gambarproduk.create({
        data: {
            urlGmbrproduk: gambarproduk.urlGmbrproduk,
            idProduk: Number(gambarproduk.idProduk),
        },
    });

    res.json(post)
}