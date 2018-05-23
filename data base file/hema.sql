-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2018 at 10:56 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hema`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `Company_Id` int(4) NOT NULL,
  `Company_Name` varchar(30) NOT NULL,
  `City` varchar(30) NOT NULL,
  `Street_Name` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`Company_Id`, `Company_Name`, `City`, `Street_Name`) VALUES
(500, 'alpha', 'cairo', 'eloeez'),
(501, 'organica', 'tanta', 'eldamatyyy');

-- --------------------------------------------------------

--
-- Table structure for table `company_make`
--

CREATE TABLE `company_make` (
  `Medicine_Id` int(5) NOT NULL,
  `Company_Id` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_make`
--

INSERT INTO `company_make` (`Medicine_Id`, `Company_Id`) VALUES
(1, 500),
(1, 501),
(2, 500),
(2, 501);

-- --------------------------------------------------------

--
-- Table structure for table `company_phone`
--

CREATE TABLE `company_phone` (
  `Company_Id` int(5) NOT NULL,
  `Company_Phone` int(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_phone`
--

INSERT INTO `company_phone` (`Company_Id`, `Company_Phone`) VALUES
(500, 117744889),
(500, 14789625),
(501, 18974632),
(501, 1177448899);

-- --------------------------------------------------------

--
-- Table structure for table `contains`
--

CREATE TABLE `contains` (
  `Medicine_Id` int(5) NOT NULL,
  `Pharmacy_Id` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contains`
--

INSERT INTO `contains` (`Medicine_Id`, `Pharmacy_Id`) VALUES
(1, 1000),
(2, 1000),
(1, 1001),
(2, 1001);

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE `contract` (
  `Company_Id` int(5) NOT NULL,
  `Pharmacy_Id` int(5) NOT NULL,
  `Start_Date` date NOT NULL,
  `End_Date` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contract`
--

INSERT INTO `contract` (`Company_Id`, `Pharmacy_Id`, `Start_Date`, `End_Date`) VALUES
(500, 1000, '2017-12-03', '2018-10-11'),
(501, 1000, '2018-05-21', '2020-12-19');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `Doctor_Id` int(2) NOT NULL,
  `First_Name` varchar(12) NOT NULL,
  `Middle_Name` varchar(10) NOT NULL,
  `Last_Name` varchar(10) NOT NULL,
  `Years_Experience` int(2) NOT NULL,
  `Speciality` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`Doctor_Id`, `First_Name`, `Middle_Name`, `Last_Name`, `Years_Experience`, `Speciality`) VALUES
(100, 'Alaa', 'Ameen', 'Elsayed', 5, 'Pediatrics'),
(101, 'ahmed', 'moha', 'bally', 5, 'athma'),
(102, 'hema', 'ali', 'ahmed', 5, 'athma');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `Medicine_Id` int(3) NOT NULL,
  `Quantity` int(4) NOT NULL,
  `Cost` int(6) NOT NULL,
  `Production_Date` date NOT NULL,
  `Expiry_Date` date NOT NULL,
  `Medicine_Trade_Name` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`Medicine_Id`, `Quantity`, `Cost`, `Production_Date`, `Expiry_Date`, `Medicine_Trade_Name`) VALUES
(1, 100, 205, '2015-05-08', '2018-09-08', 'konge'),
(2, 30, 580, '2012-05-05', '2015-05-06', 'perofeen');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `Ssn` int(30) NOT NULL,
  `First_Name` varchar(30) NOT NULL,
  `Middle_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Drug_Sensitivity` varchar(20) NOT NULL,
  `Date_Of_Birth` date NOT NULL,
  `Gender` enum('male','female') DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`Ssn`, `First_Name`, `Middle_Name`, `Last_Name`, `Address`, `Drug_Sensitivity`, `Date_Of_Birth`, `Gender`) VALUES
(987654321, 'ali', 'joooo', 'semo', '10str_elsallam', 'jsdhsd', '2017-12-13', 'male'),
(258741369, 'Hatem', 'mohamed', 'zamzem', '20str_elgammal', 'athmal', '1996-12-04', 'male'),
(4587944, 'ahmed', 'mohamed', 'ali', '10strahmed', 'athma', '2017-12-21', 'male'),
(2147483647, 'ahmed ', 'ahmed', 'ahmed', 'alex', 'none', '2018-05-08', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `patient_buy`
--

CREATE TABLE `patient_buy` (
  `SSN` int(15) NOT NULL,
  `Medicine_Id` int(5) NOT NULL,
  `Price` int(5) NOT NULL,
  `Date` date NOT NULL,
  `Discount` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_buy`
--

INSERT INTO `patient_buy` (`SSN`, `Medicine_Id`, `Price`, `Date`, `Discount`) VALUES
(258741369, 1, 200, '2015-05-08', 30),
(987654321, 1, 200, '2015-05-08', 30),
(258741369, 2, 580, '2012-05-05', 40),
(987654321, 2, 580, '2012-05-05', 40);

-- --------------------------------------------------------

--
-- Table structure for table `patient_phone`
--

CREATE TABLE `patient_phone` (
  `SSN` int(15) NOT NULL,
  `Patient_Phone` int(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_phone`
--

INSERT INTO `patient_phone` (`SSN`, `Patient_Phone`) VALUES
(987654321, 119308745),
(987654321, 1820609874),
(258741369, 119308745),
(258741369, 1820609874);

-- --------------------------------------------------------

--
-- Table structure for table `patient_treating`
--

CREATE TABLE `patient_treating` (
  `id` int(5) NOT NULL,
  `Ssn` int(15) NOT NULL,
  `Doctor_Id` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_treating`
--

INSERT INTO `patient_treating` (`id`, `Ssn`, `Doctor_Id`) VALUES
(4, 987654321, 101),
(5, 987654321, 100);

-- --------------------------------------------------------

--
-- Table structure for table `pharmacist`
--

CREATE TABLE `pharmacist` (
  `Pharmacist_Id` int(4) NOT NULL,
  `Salary` int(5) NOT NULL,
  `Years_Experience` int(2) NOT NULL,
  `First_Name` varchar(30) NOT NULL,
  `Middle_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Pharmacy_Id` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pharmacist`
--

INSERT INTO `pharmacist` (`Pharmacist_Id`, `Salary`, `Years_Experience`, `First_Name`, `Middle_Name`, `Last_Name`, `Pharmacy_Id`) VALUES
(200, 5000, 2, 'eman', 'sayed', 'ibrahim', 1000),
(201, 4000, 9, 'ibrahim', 'ali', 'mohamed', 1000),
(202, 5000, 7, 'ali', 'ahmed', 'cccccc', 1001);

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `Pharmacy_Id` int(4) NOT NULL,
  `Pharmacy_Name` varchar(21) NOT NULL,
  `City` varchar(10) NOT NULL,
  `Street_Name` varchar(15) NOT NULL,
  `Pharmacy_Phone` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pharmacy`
--

INSERT INTO `pharmacy` (`Pharmacy_Id`, `Pharmacy_Name`, `City`, `Street_Name`, `Pharmacy_Phone`) VALUES
(1000, 'H First Pharmacy', 'Nasr City8', 'AlHai ElSabeee', 160116544),
(1001, 'alaaPharmacy', 'tanta', 'elmoeez', 112987454);

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy_sells`
--

CREATE TABLE `pharmacy_sells` (
  `id` int(5) NOT NULL,
  `Medicine_Id` int(5) NOT NULL,
  `Pharmacist_Id` int(5) NOT NULL,
  `Price` int(5) NOT NULL,
  `Date` date NOT NULL,
  `Discount` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pharmacy_sells`
--

INSERT INTO `pharmacy_sells` (`id`, `Medicine_Id`, `Pharmacist_Id`, `Price`, `Date`, `Discount`) VALUES
(1, 1, 200, 200, '2015-05-08', 30),
(2, 2, 200, 580, '2012-05-05', 40),
(3, 1, 201, 200, '2015-05-08', 30),
(4, 1, 202, 580, '2012-05-05', 40);

-- --------------------------------------------------------

--
-- Table structure for table `prescribing`
--

CREATE TABLE `prescribing` (
  `Doctor_Id` int(5) NOT NULL,
  `Medicine_Id` int(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prescribing`
--

INSERT INTO `prescribing` (`Doctor_Id`, `Medicine_Id`) VALUES
(100, 1),
(100, 2),
(101, 1),
(101, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`Company_Id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`Doctor_Id`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`Medicine_Id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`Ssn`);

--
-- Indexes for table `patient_treating`
--
ALTER TABLE `patient_treating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ssn` (`Ssn`),
  ADD KEY `Ssn_2` (`Ssn`),
  ADD KEY `Ssn_3` (`Ssn`),
  ADD KEY `Ssn_4` (`Ssn`);

--
-- Indexes for table `pharmacist`
--
ALTER TABLE `pharmacist`
  ADD PRIMARY KEY (`Pharmacist_Id`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`Pharmacy_Id`);

--
-- Indexes for table `pharmacy_sells`
--
ALTER TABLE `pharmacy_sells`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `Company_Id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `Doctor_Id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `Medicine_Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `patient_treating`
--
ALTER TABLE `patient_treating`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pharmacist`
--
ALTER TABLE `pharmacist`
  MODIFY `Pharmacist_Id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;

--
-- AUTO_INCREMENT for table `pharmacy`
--
ALTER TABLE `pharmacy`
  MODIFY `Pharmacy_Id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;

--
-- AUTO_INCREMENT for table `pharmacy_sells`
--
ALTER TABLE `pharmacy_sells`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
