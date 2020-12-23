-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Дек 23 2020 г., 06:27
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
-- База данных: `id8435427_checkers`
--
CREATE DATABASE IF NOT EXISTS `id8435427_checkers` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id8435427_checkers`;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `date`, `time`) VALUES
(2, 'Саша', '2019-06-30', '10:43:31'),
(3, 'Таня', '2019-07-04', '11:04:45'),
(4, 'Анжелика', '2019-07-04', '13:27:45'),
(5, 'Екатерина', '2019-07-04', '13:27:52'),
(6, 'Екатерина', '2019-07-04', '13:28:06'),
(7, 'Владимир', '2019-07-04', '13:28:10'),
(8, 'Алина', '2019-07-04', '13:28:20'),
(9, 'Татьяна', '2019-07-04', '13:28:29'),
(10, 'Татьяна', '2019-07-04', '13:28:36'),
(11, 'Таня', '2019-07-04', '13:28:43'),
(12, 'Таня', '2019-07-04', '13:28:50'),
(13, 'Екатерина', '2019-07-11', '19:11:42'),
(14, 'Таня', '2019-07-11', '19:12:01'),
(15, 'Таня', '2019-09-12', '09:44:13');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
