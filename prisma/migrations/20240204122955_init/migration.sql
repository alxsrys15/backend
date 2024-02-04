-- CreateTable
CREATE TABLE `UserSetting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `preferredTheme` ENUM('light', 'dark', 'system') NOT NULL DEFAULT 'light',
    `resultsPerPage` INTEGER NOT NULL DEFAULT 20,
    `sendEmail` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
