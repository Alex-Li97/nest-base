/*
  Warnings:

  - You are about to alter the column `password` on the `test1` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `test1` MODIFY `password` VARCHAR(30) NOT NULL;
