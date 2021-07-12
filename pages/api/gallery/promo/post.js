import prisma from "../../../../client.ts"

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const gambarpromo = JSON.parse(req.body)

    const post = await prisma.gambarpromo.create({
        data: {
            urlGmbrpromo: gambarpromo.urlGmbrpromo,
            promoId: Number(gambarpromo.promoId),
        },
    });

    res.json(post)
}