import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
    .status(405)
    .json({ message: "Request method Tidak Diijinkan" });
  const gambar = JSON.parse(req.body);
  const update = await prisma.gambar.update({
    where: {
      idGmbr:gambar.idGmbr,
    },
    data: {
      urlGmbr:gambar.urlGmbr,
      idProduk:gambar.idProduk,
      promoId:gambar.promoId
    },
  });
  res.json(update);
};