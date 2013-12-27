-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2013 at 11:18 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `addressbook`
--
CREATE DATABASE IF NOT EXISTS `addressbook` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `addressbook`;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `ID` bigint(255) unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `Phone` int(15) DEFAULT NULL,
  `Email` text,
  `Address` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`ID`, `FirstName`, `LastName`, `Phone`, `Email`, `Address`) VALUES
(1, 'ioseb', 'bichinashvili', 599077094, 'soso.bichinashvili@gmail.com', 'gldani, tabidzis N39'),
(14, 'natia', 'sulaberidze', 453435453, 'nsulaberidze@cu.edu.ge', 'gldani, VII m/r'),
(18, 'giorgi', 'bichinashvili', 876543456, 'giorgi.bichinashvili@gmail.com', 'gldani, VI m/r'),
(22, 'eduard', 'shevardnadze', 32201010, 'tetrimela@mail.ru', 'krwanisis rezidencia'),
(23, 'giorgi', 'margvelashvili', 555123123, 'bivanishvili@mail.ru', 'riye, prezidentis rezidencia'),
(24, 'maka', 'lejava', 22, 'damwvarixeli@mail.ru', 'oqros ubnidan gldanamde'),
(25, 'áƒ–áƒ“áƒáƒ áƒáƒ•áƒ', 'gamarjobashvili', 1, 'chemidzmaxarbrat@mail.ru', 'lermontovis N27'),
(26, 'lev', 'tolstoi', 123123123, 'sdasdasd', 'fdsxc'),
(28, 'vigaca', 'mesameli', 123123123, 'jandaba@boom.ge', 'mesame mikro');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
