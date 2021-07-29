import prisma from '../../../client.ts'

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const promo = JSON.parse(req.body)

    const post = await prisma.promo.create({
        data: {
            judulPromo: promo.judulPromo,
            hargaPromo: promo.hargaPromo,
            deskripsiPromo: promo.deskripsiPromo,
            periodePromo: promo.periodePromo,
            gambarPromo: promo.gambarPromo,
            statusPromo: promo.statusPromo
        },
    });

    res.json(post)
}