-- AlterTable
ALTER TABLE `user` ADD COLUMN `token` VARCHAR(255) NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;
