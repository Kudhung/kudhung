import prisma from "../../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method Tidak Diijinkan" });
  const gambarpromo = JSON.parse(req.body);

  const del = await prisma.gambarpromo.delete({
    where: {
      idGmbrpromo: gambarpromo.idGmbrpromo,
    },
  })
  res.json(del);
};