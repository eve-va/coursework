'use strict';

const layout = new LayoutContent([
  { audio: '../audio/Friends.mp3',
    src: '../audio/1.webp',
    arr: ['Как я встретил вашу маму', 'Офис', 'Друзья', 'Секс в большом городе'],
    correct: 2, value: 1 },
  { audio: '../audio/Sherlock.mp3',
    src: '../audio/2.jpg',
    arr: ['Шерлок', 'Настоящий детектив', 'Мост', 'Ганнибал'],
    correct: 0, value: 1 },
  { audio: '../audio/Game.mp3',
    src: '../audio/3.jpg',
    arr: ['Царство', 'Игра престолов', 'Викинги', 'Тюдоры'],
    correct: 1, value: 1 },
  { audio: '../audio/Irony.mp3',
    src: '../audio/4.jpg',
    arr: ['Девчата', 'Москва слезам не верит', 'Ирония судьбы', 'Карнавальная ночь'],
    correct: 2, value: 1 },
  { audio: '../audio/Euphoria.mp3',
    src: '../audio/5.jpg',
    arr: ['Ривердэйл', '13 причин почему', 'Элита', 'Эйфория'],
    correct: 3, value: 2 },
  { audio: '../audio/Shindler.mp3',
    src: '../audio/6.jpg',
    arr: ['Список Шиндлера', 'Пианист', 'Серая зона', 'Воровка книг'],
    correct: 0, value: 2 },
  { audio: '../audio/Breakfast.mp3',
    src: '../audio/7.jpg',
    arr: ['Завтрак у Тиффани', 'Римские каникулы', 'Сабрина', 'Двое в пути'],
    correct: 0, value: 2 },
  { audio: '../audio/Gatsby.mp3',
    src: '../audio/8.jpg',
    arr: ['Большие надежды', 'Дневник памяти', 'Великий Гэтсби', 'Далласский клуб покупателей'],
    correct: 2, value: 2 },
  { audio: '../audio/Bond.mp3',
    src: '../audio/9.jpg',
    arr: ['Квант милосердия', '007: Координаты "Скайфолл"', 'Не время умирать', '007: Спектр'],
    correct: 2, value: 3 },
  { audio: '../audio/Amelie.mp3',
    src: '../audio/10.jpg',
    arr: ['Полночь в Париже', 'Шоколад', '500 дней лета', 'Амели'],
    correct: 3, value: 5 }
], '.js-content', 'variants__ans-correct');

layout.init('audio', function(score) {
  return 'page5.html?movie=' + location.href.split('score=')[1] + '&music=' + score;
});
