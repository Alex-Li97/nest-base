/*
  Warnings:

  - Added the required column `token` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `test` ADD COLUMN `token` VARCHAR(255) NOT NULL;
