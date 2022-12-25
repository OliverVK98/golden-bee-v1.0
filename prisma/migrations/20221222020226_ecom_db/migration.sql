-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cartId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartId")
);

-- CreateTable
CREATE TABLE "Product" (
    "productId" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discountedPrice" DOUBLE PRECISION NOT NULL,
    "rating" INTEGER NOT NULL,
    "frontImageUrl" TEXT NOT NULL,
    "extraImageUrls" TEXT[],
    "bannerImageUrls" TEXT[],
    "isAvailable" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Collection" (
    "collectionId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isStyle" BOOLEAN NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("collectionId")
);

-- CreateTable
CREATE TABLE "Product_Collection" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "collectionId" INTEGER NOT NULL,

    CONSTRAINT "Product_Collection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_Collection" ADD CONSTRAINT "Product_Collection_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_Collection" ADD CONSTRAINT "Product_Collection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("collectionId") ON DELETE RESTRICT ON UPDATE CASCADE;
