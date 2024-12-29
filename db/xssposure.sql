-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2024 at 12:14 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xssposure`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `like_count` int(15) NOT NULL,
  `comment_count` int(15) NOT NULL,
  `posted_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `content`, `like_count`, `comment_count`, `posted_at`, `user_id`) VALUES
(1, 'Upravo sam završio gledanje serije, i moram reći – poslednja epizoda je bila fantastična! 🔥 Preporuke za sledeću seriju?', 0, 0, '2024-12-29 22:38:40', 2),
(2, 'Razmišljam o letovanju sledeće godine. Grčka ili Italija? 🍹🏖️ Gde biste vi voleli da odete?', 0, 0, '2024-12-29 22:39:28', 3),
(3, 'Danas sam testirao novi recept za kolače, i moram priznati – ispali su bolje nego što sam očekivao! 🍪 Ako želite recept, pišite u komentaru.', 0, 0, '2024-12-29 22:44:10', 4),
(4, 'Kafa + jutarnja šetnja = savršen početak dana! 🌞☕ Kako vi započinjete jutro?', 2, 1, '2024-12-29 22:45:19', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `username`, `password`, `name`, `roles`) VALUES
(1, 'admin', '$2a$10$6BRP3hNeGokUwi4Tnn7INeq0JkWKDTMu2/uv6s9C/1EMUUjFe4i6O', 'admin', 'USER'),
(2, 'marko95', '$2a$10$dkqGvQmBDY2HS/0qncp8mO7LbfPHWI9vSXaDNvntfq025.6Xtampy', 'Marko Marković', 'USER'),
(3, 'PetarP1', '$2a$10$tnCvmL6Jy0eqE0LUbfhkFeO7F0DhtO2EknDFqpVr6sMOTBjmHSIdS', 'Petar Petrović', 'USER'),
(4, 'Stefan00', '$2a$10$KLCfzfBoYNazYmYxS3Xc3.UgX3D/IiNTtOB3Z85kpbCzME1uLOxg6', 'Stefan Stefanović', 'USER');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
