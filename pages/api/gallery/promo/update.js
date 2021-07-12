import prisma from "../../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method Tidak Diijinkan" });
  const gambarpromo = JSON.parse(req.body);
  const update = await prisma.gambarpromo.update({
    where: {
      idGmbrpromo: gambarpromo.idGmbrpromo,
    },
    data: {
      urlGmbrpromo: gambarpromo.urlGmbrpromo,
      promoId: Number(gambarpromo.promoId),
    },
  });
  res.json(update);
};