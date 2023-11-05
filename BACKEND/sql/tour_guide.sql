-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2023 at 05:43 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boat_reservation`
--

-- --------------------------------------------------------

--
-- Table structure for table `tour_guide`
--

CREATE TABLE `tour_guide` (
  `tg_id` int(50) NOT NULL,
  `tg_fname` varchar(50) NOT NULL,
  `tg_lname` varchar(50) NOT NULL,
  `tg_mname` varchar(50) NOT NULL,
  `tg_email` varchar(50) NOT NULL,
  `tg_address` varchar(50) NOT NULL,
  `tg_gender` varchar(50) NOT NULL,
  `tg_dob` date NOT NULL,
  `tg_status` varchar(20) NOT NULL,
  `tg_img` varchar(50) DEFAULT NULL,
  `tg_nationality` varchar(20) NOT NULL,
  `tg_cpnum` int(11) NOT NULL,
  `tg_del` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tour_guide`
--

INSERT INTO `tour_guide` (`tg_id`, `tg_fname`, `tg_lname`, `tg_mname`, `tg_email`, `tg_address`, `tg_gender`, `tg_dob`, `tg_status`, `tg_img`, `tg_nationality`, `tg_cpnum`, `tg_del`) VALUES
(1, '[value-2]', '[value-3]', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '0000-00-00', '[value-9]', '[value-10]', '[value-11]', 0, 0),
(2, '[value-2]', '[value-3]', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '0000-00-00', '[value-9]', '[value-10]', '[value-11]', 0, 0),
(3, '', '', '', 'c.iyac123@gmail.com', '', '', '0000-00-00', '', NULL, '', 0, 0),
(4, '1', '1', '1', 'c.iyac123@gmail.com', '', '', '0000-00-00', '', NULL, '', 0, 1),
(5, '', '', '', 'iyacc@yahoo.com', '', '', '0000-00-00', '', NULL, '', 0, 0),
(6, '1', '1', '1', '1@gmail.com', '1', 'Male', '2023-10-31', '1', NULL, '1', 1, 1),
(7, '', '', '', 'c.iyac123@gmail.com', '', '', '0000-00-00', '', '1699159348223.png', '', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tour_guide`
--
ALTER TABLE `tour_guide`
  ADD PRIMARY KEY (`tg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tour_guide`
--
ALTER TABLE `tour_guide`
  MODIFY `tg_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
