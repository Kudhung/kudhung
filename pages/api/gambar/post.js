import prisma from '../../../client.ts'

export default async (req,res) => {
    if(req.method !== 'POST')
    return res
    .status(405)
    .json({message:'Request method tidak diizinkan'});

    const gambar = JSON.parse(req.body)

    const post = await prisma.gambar.create({
        data:{
            urlGmbr:gambar.urlGmbr,
            idProduk:Number(gambar.idProduk),
            promoId:Number(gambar.promoId)
        },
    });

    res.json(post)
}