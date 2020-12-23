-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 25 2019 г., 10:45
-- Версия сервера: 5.6.41
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `kafedra`(
	`id_kaf` numeric(18, 0) NOT NULL,
	`name_kaf` varchar(256) NULL,
	`tel` varchar(50) NULL,
	`title` varchar(150) NULL,
	`pic` int(11) NULL,
	`del` int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `kafedra_doljn`(
	`id_doljn` int(11) NOT NULL,
	`name` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `kafedra_napr`(
	`id_kafedra` int(11) NULL,
	`name_napr` char(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `kafedra_predmets`(
	`id` int NOT NULL,
	`id_predmets` int(11) NULL,
	`id_kafedra` int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `kafedra_rel_sotr`(
	`id_kaf` int(11) NULL,
	`id_sotr`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- 
-- 
-- 
CREATE TABLE `kafedra_sotr`(
	`id_kafedra` int(11) NULL,
	`id_sotr` int(11) NOT NULL,
	`name` varchar(50) NULL,
	`surname` varchar(50) NULL,
	`sec_surn` varchar(50) NULL,
	`addr` varchar(500) NULL,
	`doljn` int(11) NULL,
	`tel` varchar(50) NULL,
	`sot_tel` varchar(50) NULL,
	`foto` varchar(50) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `predmets`(
	`id` int  NOT NULL,
	`name` varchar(150) NOT NULL,
	`comment` varchar(255) NULL,
	`del` int(11) NOT NULL,
	`gak` int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `predmets_razdel`(
	`id` int  NOT NULL,
	`name` varchar(150) NULL,
	`id_predmets` int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- 
-- 
-- 
CREATE TABLE `raspis_aud_fond`(
	`korpus` varchar(50) NULL,
	`etaj` varchar(50) NULL,
	`n_aud` varchar(50) NULL,
	`kol_mest` int(11) NULL,
	`proektor` varchar(50) NULL,
	`lab_obor` varchar(50) NULL,
	`id_aud_fond` int  NOT NULL,
	`addr` varchar(50) NULL,
	`nomer` int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `raspis_baza`(
	`id` int  NOT NULL,
	`r_k` varchar(20) NULL,
	`r_gr` int(11) NULL,
	`r_pgr` int(11) NULL,
	`id_aud_fond` int(11) NULL,
	`id_ych_plan` int(11) NULL,
	`id_zan_tip` int(11) NULL,
	`id_day` int(11) NULL,
	`id_nedel` int(11) NULL,
	`id_para` int(11) NULL,
	`fio1` varchar(50) NULL,
	`subject` varchar(2000) NULL,
	`datetimein` datetime NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_baza_1`(
	`id` int(11) NOT NULL,
	`r_k` varchar(20) NULL,
	`r_gr` int(11) NULL,
	`r_pgr` int(11) NULL,
	`id_aud_fond` int(11) NULL,
	`id_ych_plan` int(11) NULL,
	`id_zan_tip` int(11) NULL,
	`id_day` int(11) NULL,
	`id_nedel` int(11) NULL,
	`id_para`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_baza_2009_2010`(
	`id` int  NOT NULL,
	`r_k` varchar(20) NULL,
	`r_gr` int(11) NULL,
	`r_pgr` int(11) NULL,
	`id_aud_fond` int(11) NULL,
	`id_ych_plan` int(11) NULL,
	`id_zan_tip` int(11) NULL,
	`id_day` int(11) NULL,
	`id_nedel` int(11) NULL,
	`id_para` int(11) NULL,
	`fio1` varchar(50) NULL,
	`subject` varchar(2000) NULL,
	`datetimein` datetime NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_dat_sokr`(
	`name` varchar(50) NULL,
	`id`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `raspis_dat_ych`(
	`dat` datetime NULL,
	`den` varchar(50) NULL,
	`nom` int(11) NULL,
	`odd` varchar(50) NULL,
	`denid`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- 
-- 
-- 
CREATE TABLE `raspis_dat_ych_2009_2010`(
	`dat` datetime NULL,
	`den` varchar(50) NULL,
	`nom` int(11) NULL,
	`odd` varchar(50) NULL,
	`denid`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `raspis_dat_ych1`(
	`dat` datetime NULL,
	`den` varchar(20) NULL,
	`nom` int(11) NULL,
	`odd` varchar(10) NULL,
	`denid`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_fs`(
	`id` int(11) NOT NULL,
	`name` varchar(70) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- 
-- 
-- 
CREATE TABLE `raspis_korp`(
	`id` int(11) NULL,
	`name` varchar(50) NULL,
	`name_kr` varchar(50) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `raspis_para`(
	`id` int(11) NOT NULL,
	`num` int(11) NULL,
	`num_text` varchar(50) NULL,
	`tim` varchar(50) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_pps`(
	`kaf` varchar(255) NULL,
	`fam` varchar(255) NULL,
	`nam` varchar(255) NULL,
	`otch` varchar(255) NULL,
	`post` varchar(255) NULL,
	`id_pps` int  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `raspis_pps1`(
	`kaf` varchar(255) NULL,
	`fam` varchar(255) NULL,
	`nam` varchar(255) NULL,
	`otch` varchar(255) NULL,
	`post` varchar(255) NULL,
	`id_pps` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_test`(
	`id` int  NOT NULL,
	`txt` varchar(50) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- -- 
-- 
-- 
CREATE TABLE `raspis_ych_plan`(
	`spec` varchar(255) NULL,
	`course1` varchar(255) NULL,
	`fac` varchar(255) NULL,
	`k` varchar(255) NULL,
	`fs` varchar(255) NULL,
	`course` varchar(255) NULL,
	`s` varchar(10) NULL,
	`subject` varchar(400) NULL,
	`st` int(11) NULL,
	`gr` int(11) NULL,
	`pgr` int(11) NULL,
	`lek` int(11) NULL,
	`lek_pot` varchar(255) NULL,
	`lab_zan` int(11) NULL,
	`lab_pot` varchar(255) NULL,
	`prak_zan` int(11) NULL,
	`prak_pot` varchar(255) NULL,
	`it_kontr` varchar(255) NULL,
	`kontr_p` varchar(255) NULL,
	`fio1` varchar(255) NULL,
	`fio2` varchar(255) NULL,
	`start` datetime NULL,
	`end` datetime NULL,
	`id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_ych_plan_2009_2010`(
	`spec` varchar(255) NULL,
	`course1` varchar(255) NULL,
	`fac` varchar(255) NULL,
	`k` varchar(255) NULL,
	`fs` varchar(255) NULL,
	`course` varchar(255) NULL,
	`s` varchar(10) NULL,
	`subject` varchar(400) NULL,
	`st` int(11) NULL,
	`gr` int(11) NULL,
	`pgr` int(11) NULL,
	`lek` int(11) NULL,
	`lek_pot` varchar(255) NULL,
	`lab_zan` int(11) NULL,
	`lab_pot` varchar(255) NULL,
	`prak_zan` int(11) NULL,
	`prak_pot` varchar(255) NULL,
	`it_kontr` varchar(255) NULL,
	`kontr_p` varchar(255) NULL,
	`fio1` varchar(255) NULL,
	`fio2` varchar(255) NULL,
	`start` datetime NULL,
	`end` datetime NULL,
	`id` int  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_ych_plan_old`(
	`spec` varchar(255) NULL,
	`k` varchar(255) NULL,
	`s` float NULL,
	`subject` varchar(255) NULL,
	`st` float NULL,
	`gr` float NULL,
	`pgr` float NULL,
	`lek` float NULL,
	`lek_pot` varchar(255) NULL,
	`lab_zan` float NULL,
	`prak_zan` float NULL,
	`prak_pot` varchar(255) NULL,
	`it_kontr` varchar(255) NULL,
	`kontr_p` varchar(255) NULL,
	`fio1` varchar(255) NULL,
	`fio2` varchar(255) NULL,
	`start` datetime NULL,
	`end` datetime NULL,
	`fs` int(11) NULL,
	`course` int(11) NULL,
	`id` int(11) NOT NULL,
	`id_prepod1` int(11) NULL,
	`id_prepod2`int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_ych_plan2`(
	`spec` varchar(255) NULL,
	`k` varchar(255) NULL,
	`fs` int(11) NULL,
	`course` varchar(255) NULL,
	`s` int(11) NULL,
	`subject` varchar(255) NULL,
	`st` int(11) NULL,
	`gr` int(11) NULL,
	`pgr` int(11) NULL,
	`lek` int(11) NULL,
	`lek_potok` varchar(255) NULL,
	`lab_zan` int(11) NULL,
	`prak_zan` int(11) NULL,
	`prak_pot` varchar(255) NULL,
	`it_kontr` varchar(255) NULL,
	`kontr_p` varchar(255) NULL,
	`fio1` varchar(255) NULL,
	`fio2` varchar(255) NULL,
	`start` datetime NULL,
	`end` datetime NULL,
	`id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
--
-- 
-- 
CREATE TABLE `raspis_zan_tip`(
	`id` int(11) NOT NULL,
	`name` varchar(50) NULL,
	`kr_name` varchar(50) NULL,
	`id_tip` int(11) NULL,
	`kr_kr_name` varchar(50) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;