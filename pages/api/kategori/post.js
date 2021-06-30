import prisma from '../../../client.ts'

export default async (req,res) => {
    if(req.method !== 'POST')
    return res
    .status(405)
    .json({message:'Request method tidak diizinkan'});

    const kategori = JSON.parse(req.body)

    const post = await prisma.kategori.create({
        data:{
            jenisKtg:kategori.jenisKtg
        },
    });

    res.json(post)
}