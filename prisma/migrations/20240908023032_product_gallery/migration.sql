/*
  Warnings:

  - You are about to drop the column `imageUuid` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUuid",
ADD COLUMN     "productGallery" TEXT[];
