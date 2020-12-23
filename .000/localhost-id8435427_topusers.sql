-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Дек 23 2020 г., 07:01
-- Версия сервера: 10.3.16-MariaDB
-- Версия PHP: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `id8435427_topusers`
--
CREATE DATABASE IF NOT EXISTS `id8435427_topusers` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id8435427_topusers`;

-- --------------------------------------------------------

--
-- Структура таблицы `decoders`
--

CREATE TABLE `decoders` (
  `id` int(11) NOT NULL,
  `texts` int(11) NOT NULL,
  `data` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `topkorovkahard`
--

CREATE TABLE `topkorovkahard` (
  `id` int(11) NOT NULL,
  `usernik` varchar(15) NOT NULL,
  `score` int(9) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `topkorovkahard`
--

INSERT INTO `topkorovkahard` (`id`, `usernik`, `score`, `date`, `time`) VALUES
(1, 'Sawa121212', 22, '2018-12-30', '20:45:25'),
(2, 'Sawa121212', 19, '2018-12-30', '20:48:25'),
(3, 'Sawa121213', 15, '2018-12-30', '20:49:25'),
(4, 'Sawa121212', 32, '2018-12-31', '11:30:30'),
(5, 'НиколаевАЮ', 10, '2018-12-31', '21:56:25'),
(6, 'sto', 100, '2019-01-19', '21:42:23'),
(7, 'НиколаевАЮ', 7, '2019-06-28', '06:58:32'),
(8, 'БОГ', 4, '2019-06-28', '07:01:42');

-- --------------------------------------------------------

--
-- Структура таблицы `topkorovkalite`
--

CREATE TABLE `topkorovkalite` (
  `id` int(11) NOT NULL,
  `usernik` varchar(15) NOT NULL,
  `score` int(9) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `topkorovkalite`
--

INSERT INTO `topkorovkalite` (`id`, `usernik`, `score`, `date`, `time`) VALUES
(1, 'Sawa121212', 52, '2018-12-30', '20:45:25'),
(2, 'Sawa121212', 69, '2018-12-30', '20:48:25'),
(3, 'Sawa121212', 49, '2018-12-30', '20:49:25'),
(4, 'Sawa121212', 32, '2018-12-31', '11:30:30'),
(5, 'НиколаевАЮ', 7, '2018-12-31', '21:56:25'),
(6, 'farfan', 55, '2019-01-18', '20:52:12'),
(7, 'farfan', 59, '2019-01-18', '21:14:17'),
(8, 'Saaa', 122, '2019-01-18', '21:26:11'),
(9, 'Saaa', 101, '2019-01-18', '21:26:22'),
(10, 'tyt_i_tam', 78, '2019-01-18', '21:27:35'),
(11, 'taram', 44, '2019-01-18', '21:27:35'),
(12, 'tyt_i_tam', 78, '2019-01-18', '21:27:35'),
(13, 'neamae', 54, '2019-01-18', '21:27:35'),
(14, 'joy', 31, '2019-01-18', '21:43:57'),
(15, 'joy2', 32, '2019-01-18', '21:47:32'),
(16, 'joy3', 33, '2019-01-18', '21:48:01'),
(17, 'sto', 100, '2019-01-19', '20:57:24'),
(18, 'sto+2', 102, '2019-01-19', '21:06:58'),
(19, 'миша', 9, '2019-01-20', '14:04:39'),
(20, 'Саша', 7, '2019-02-06', '11:15:24'),
(21, 'Саша', 8, '2019-02-06', '11:23:56'),
(22, 'Саша', 5, '2019-02-06', '11:27:40'),
(23, 'Tarakan', 5, '2019-06-28', '06:42:21');

-- --------------------------------------------------------

--
-- Структура таблицы `toppyatnaski`
--

CREATE TABLE `toppyatnaski` (
  `id` int(11) NOT NULL,
  `usernik` varchar(15) NOT NULL,
  `score` int(9) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `toppyatnaski`
--

INSERT INTO `toppyatnaski` (`id`, `usernik`, `score`, `date`, `time`) VALUES
(1, 'sto', 100, '2019-01-20', '10:45:25'),
(2, 'sto+2', 102, '2019-01-20', '12:00:56'),
(3, 'Sawa121212', 103, '2019-01-20', '12:05:19'),
(4, 'qwe', 104, '2019-01-22', '10:38:18'),
(5, 'mR.viRUS21', 251, '2019-06-28', '06:10:20'),
(6, 'avocato', 279, '2020-02-28', '12:12:14');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `decoders`
--
ALTER TABLE `decoders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `topkorovkahard`
--
ALTER TABLE `topkorovkahard`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `topkorovkalite`
--
ALTER TABLE `topkorovkalite`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `toppyatnaski`
--
ALTER TABLE `toppyatnaski`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `decoders`
--
ALTER TABLE `decoders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `topkorovkahard`
--
ALTER TABLE `topkorovkahard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `topkorovkalite`
--
ALTER TABLE `topkorovkalite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `toppyatnaski`
--
ALTER TABLE `toppyatnaski`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
