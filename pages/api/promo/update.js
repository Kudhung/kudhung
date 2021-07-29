import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ message: "Request method Tidak Diijinkan" });
  const promo = JSON.parse(req.body);
  const update = await prisma.promo.update({
    where: {
      idPromo: promo.idPromo,
    },
    data: {
      judulPromo: promo.judulPromo,
      hargaPromo: promo.hargaPromo,
      deskripsiPromo: promo.deskripsiPromo,
      periodePromo: promo.periodePromo,
      gambarPromo: promo.gambarPromo,
      statusPromo: promo.statusPromo
    },
  });
  res.json(update);
};