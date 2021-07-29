import prisma from '../../../client.ts'

export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const color = JSON.parse(req.body)

    const post = await prisma.warna.create({
        data: {
            jenisColor: color.jenisColor
        },
    });

    res.json(post)
}