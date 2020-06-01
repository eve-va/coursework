'use strict';

const content = document.querySelector('.js-content'),
  correctClass = 'variants__ans-correct',
  layouts = {
    0: { audio: '../audio/Friends.mp3',
      src: '../audio/1.webp',
      arr: ['Как я встретил вашу маму', 'Офис', 'Друзья', 'Секс в большом городе'],
      correct: 2, value: 1 },
    1: { audio: '../audio/Sherlock.mp3',
      src: '../audio/2.jpg',
      arr: ['Шерлок', 'Настоящий детектив', 'Мост', 'Ганнибал'],
      correct: 0, value: 1 },
    2: { audio: '../audio/Game.mp3',
      src: '../audio/3.jpg',
      arr: ['Царство', 'Игра престолов', 'Викинги', 'Тюдоры'],
      correct: 1, value: 1 },
    3: { audio: '../audio/Irony.mp3',
      src: '../audio/4.jpg',
      arr: ['Девчата', 'Москва слезам не верит', 'Ирония судьбы', 'Карнавальная ночь'],
      correct: 2, value: 1 },
    4: { audio: '../audio/Euphoria.mp3',
      src: '../audio/5.jpg',
      arr: ['Ривердэйл', '13 причин почему', 'Элита', 'Эйфория'],
      correct: 3, value: 2 },
    5: { audio: '../audio/Shindler.mp3',
      src: '../audio/6.jpg',
      arr: ['Список Шиндлера', 'Пианист', 'Серая зона', 'Воровка книг'],
      correct: 0, value: 2 },
    6: { audio: '../audio/Breakfast.mp3',
      src: '../audio/7.jpg',
      arr: ['Завтрак у Тиффани', 'Римские каникулы', 'Сабрина', 'Двое в пути'],
      correct: 0, value: 2 },
    7: { audio: '../audio/Gatsby.mp3',
      src: '../audio/8.jpg',
      arr: ['Большие надежды', 'Дневник памяти', 'Великий Гэтсби', 'Далласский клуб покупателей'],
      correct: 2, value: 2 },
    8: { audio: '../audio/Bond.mp3',
      src: '../audio/9.jpg',
      arr: ['Квант милосердия', '007: Координаты "Скайфолл"', 'Не время умирать', '007: Спектр'],
      correct: 2, value: 3 },
    9: { audio: '../audio/Amelie.mp3',
      src: '../audio/10.jpg',
      arr: ['Полночь в Париже', 'Шоколад', '500 дней лета', 'Амели'],
      correct: 3, value: 4 },

    current: -1,
    get() {
      return this[++this.current];
    },
  };

let layout = layouts.get(),
  score = 0;

content.innerHTML = '';
content.appendChild(createLayout(layout.audio, layout.src, layout.arr, layout.correct, layout.value));
content.addEventListener('click', function(e) {
  if (e.target.classList.contains('js-variant')) {
    const container = e.target.parentNode.parentNode;
    if (e.target.getAttribute('data-correct')) {
      score += parseInt(container.getAttribute('data-value'));
      e.target.parentNode.classList.add(correctClass);
    } else {
      const labelCorrect = container.querySelector('label[data-correct]');
      labelCorrect.parentNode.classList.add(correctClass);
    }
    setTimeout(function() {
      layout = layouts.get();

      if (layout) {
        content.innerHTML = '';
        content.appendChild(createLayout(layout.audio, layout.src, layout.arr, layout.correct, layout.value));
      } else {
        location.href = 'page5.html?movie=' + location.href.split('score=')[1] + '&music=' + score;
      }
    }, 1500);
  }
});


function createLayout(audio, src, arr, correct, value) {
  const wr = document.createElement('div'),
    img = document.createElement('img'),
    song = document.createElement('audio'),
    songSource = document.createElement('source'),
    variants = document.createElement('div');
  let ans, temp;

  img.setAttribute('alt', 'poster');
  img.setAttribute('src', src);

  song.setAttribute('controls', 'controls');
  songSource.setAttribute('src', audio);
  songSource.setAttribute('type', 'audio/mp3');
  song.appendChild(songSource);

  variants.className = 'variants';
  variants.setAttribute('data-value', value);

  for (let i = 0; i < arr.length; i++) {
    ans = document.createElement('div');
    ans.className = 'variants__ans';
    temp = document.createElement('input');
    temp.setAttribute('type', 'radio');
    temp.setAttribute('name', 'variant');
    temp.setAttribute('id', 'variant' + i);
    ans.appendChild(temp);

    temp = document.createElement('label');
    temp.className = 'js-variant';
    temp.innerText = arr[i];
    temp.setAttribute('for', 'variant' + i);
    if (i === correct) temp.setAttribute('data-correct', correct);
    ans.appendChild(temp);

    variants.appendChild(ans);
  }

  wr.appendChild(img);
  wr.appendChild(song);
  wr.appendChild(variants);

  return wr;
}
