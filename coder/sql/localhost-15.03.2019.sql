-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Мар 15 2019 г., 16:19
-- Версия сервера: 5.6.41
-- Версия PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `accounts`
--
CREATE DATABASE `accounts` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `accounts`;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `second_name` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `patronymic` varchar(50) DEFAULT NULL,
  `usertype` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `password`, `second_name`, `first_name`, `patronymic`, `usertype`) VALUES
(4, 'Sawa12', 'Sawa1008971@mail.ru', '$2y$10$hxCfreJTvboEaBT3t8T25uKHyXdG.xJsXekertE.5n5GcoNAqZwVW', 'Николаев', 'Александр', '', 1),
(14, 'Sanek21cs22', 'Sawa100897@mail.ru', 'f147b4d2a730489cea25e3d1083d1c4a', 'ÐÐ¸ÐºÐ¾Ð»Ð°ÐµÐ²', 'Aleksandr', 'Yurevich', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
