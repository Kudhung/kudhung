-- CreateTable
CREATE TABLE "Produk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisProduk" TEXT NOT NULL,
    "hargaProduk" TEXT NOT NULL,
    "deskripsiProduk" TEXT NOT NULL,
    "labelProduk" TEXT NOT NULL,
    "gambarProduk" TEXT NOT NULL,
    "kategoriProduk" INTEGER NOT NULL,
    "tepiProduk" TEXT NOT NULL,
    "bahanProduk" TEXT NOT NULL,
    "ukuranProduk" TEXT NOT NULL,
    "stokProduk" TEXT NOT NULL,
    FOREIGN KEY ("kategoriProduk") REFERENCES "Kategori" ("idKtg") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Promo" (
    "idPromo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judulPromo" TEXT NOT NULL,
    "hargaPromo" TEXT NOT NULL,
    "deskripsiPromo" TEXT NOT NULL,
    "periodePromo" TEXT NOT NULL,
    "gambarPromo" TEXT NOT NULL,
    "statusPromo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Kategori" (
    "idKtg" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisKtg" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Gambarproduk" (
    "idGmbrproduk" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlGmbrproduk" TEXT NOT NULL,
    "idProduk" INTEGER NOT NULL,
    "ketGmbr" TEXT NOT NULL,
    FOREIGN KEY ("idProduk") REFERENCES "Produk" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Gambarpromo" (
    "idGmbrpromo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "urlGmbrpromo" TEXT NOT NULL,
    "promoId" INTEGER NOT NULL,
    "ketPromo" TEXT NOT NULL,
    FOREIGN KEY ("promoId") REFERENCES "Promo" ("idPromo") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Warna" (
    "idColor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jenisColor" TEXT NOT NULL
);
