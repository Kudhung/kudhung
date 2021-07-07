-- CreateTable
CREATE TABLE "Produk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisProduk" TEXT NOT NULL,
    "hargaProduk" TEXT NOT NULL,
    "deskripsiProduk" TEXT NOT NULL,
    "labelProduk" TEXT NOT NULL,
    "gambarProduk" TEXT NOT NULL,
    "kategoriProduk" INTEGER NOT NULL,
    FOREIGN KEY ("kategoriProduk") REFERENCES "Kategori" ("idKtg") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Promo" (
    "idPromo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judulPromo" TEXT NOT NULL,
    "hargaPromo" TEXT NOT NULL,
    "deskripsiPromo" TEXT NOT NULL,
    "periodePromo" TEXT NOT NULL,
    "gambarPromo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Kategori" (
    "idKtg" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisKtg" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Gambar" (
    "idGmbr" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlGmbr" TEXT NOT NULL,
    "idProduk" INTEGER NOT NULL,
    "promoId" INTEGER NOT NULL,
    FOREIGN KEY ("idProduk") REFERENCES "Produk" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("promoId") REFERENCES "Promo" ("idPromo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Warna" (
    "idColor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisColor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProdukToWarna" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Produk" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Warna" ("idColor") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PromoToWarna" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Promo" ("idPromo") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Warna" ("idColor") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProdukToWarna_AB_unique" ON "_ProdukToWarna"("A", "B");

-- CreateIndex
CREATE INDEX "_ProdukToWarna_B_index" ON "_ProdukToWarna"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PromoToWarna_AB_unique" ON "_PromoToWarna"("A", "B");

-- CreateIndex
CREATE INDEX "_PromoToWarna_B_index" ON "_PromoToWarna"("B");
