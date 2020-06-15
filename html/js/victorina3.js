'use strict';

const layout = new LayoutContent([
  { audio: '../quote/Fight.mp3',
    src: '../quote/1.png',
    arr: ['Семь', 'Американский психопат', 'Бойцовский клуб', 'На игле'],
    correct: 2, value: 1 },
  { audio: '../quote/Wonder.mp3',
    src: '../quote/2.png',
    arr: ['Обыкновенное чудо', 'Тот самый Мюнхгаузен', 'Чародеи', 'Покровские ворота'],
    correct: 0, value: 1 },
  { audio: '../quote/Web.mp3',
    src: '../quote/3.png',
    arr: ['Целовек, который изменил все', 'Социальная сеть', 'Стив Джобс', 'Сфера'],
    correct: 1, value: 1 },
  { audio: '../quote/Pretty.mp3',
    src: '../quote/4.png',
    arr: ['Чего хотят женщины', 'Отпуск по обмену', 'Красотка', 'Реальная любовь'],
    correct: 2, value: 1 },
  { audio: '../quote/Inception.mp3',
    src: '../quote/5.png',
    arr: ['Остров проклятых', 'Интерстеллар', 'Области тьмы', 'Начало'],
    correct: 3, value: 2 },
  { audio: '../quote/Scott.mp3',
    src: '../quote/6.png',
    arr: ['Добро пожаловать в Zомбилэнд', 'Мир Уэйна', 'Мир Уэйна 2', 'Скотт Пилигрим против всех'],
    correct: 3, value: 2 },
  { audio: '../quote/Interstellar.mp3',
    src: '../quote/7.png',
    arr: ['Интерстеллар', 'Марсианин', 'Пассажиры', 'Гравитация'],
    correct: 0, value: 2 },
  { audio: '../quote/Barcelona.mp3',
    src: '../quote/8.png',
    arr: ['Полночь в Париже', 'Дождливый день в Нью-Йорке', 'Вики Кристина Барселона', 'Римские приключения'],
    correct: 2, value: 2 },
  { audio: '../quote/Kill.mp3',
    src: '../quote/9.png',
    arr: ['Убить Билла. Фильм 1', 'Убить Билла. Фильм 2', 'От заката до рассвета', 'Город грехов'],
    correct: 0, value: 3 },
  { audio: '../quote/Her.mp3',
    src: '../quote/10.png',
    arr: ['500 дней лета', 'Трудности перевода', 'Фанатик', 'Она'],
    correct: 3, value: 5 }
], '.js-content', 'variants__ans-correct');

layout.init('audio', score => {
  const arrUrl = location.href.split('?')[1].split('&');
  return 'results.html?'  + arrUrl[0] + '&' + arrUrl[1] + '&quote=' + score;
});
