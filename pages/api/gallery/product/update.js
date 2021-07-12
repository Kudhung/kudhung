import prisma from "../../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method Tidak Diijinkan" });
  const gambarproduk = JSON.parse(req.body);
  const update = await prisma.gambarproduk.update({
    where: {
      idGmbrproduk: gambarproduk.idGmbrproduk,
    },
    data: {
      urlGmbrproduk: gambarproduk.urlGmbrproduk,
      idProduk: Number(gambarproduk.idProduk),
    },
  });
  res.json(update);
};