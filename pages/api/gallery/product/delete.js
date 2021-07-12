import prisma from "../../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const gambarproduk = JSON.parse(req.body);

  const del = await prisma.gambarproduk.delete({
    where: {
      idGmbrproduk: gambarproduk.idGmbrproduk,
    },
  })
  res.json(del);
};