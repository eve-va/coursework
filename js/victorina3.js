'use strict';

const content = document.querySelector('.js-content'),
  correctClass = 'variants__ans-correct',
  layouts = {
    0: { audio: '../quote/Fight.mp3',
      src: '../quote/1.png',
      arr: ['Семь', 'Американский психопат', 'Бойцовский клуб', 'На игле'],
      correct: 2, value: 1 },
    1: { audio: '../quote/Wonder.mp3',
      src: '../quote/2.png',
      arr: ['Обыкновенное чудо', 'Тот самый Мюнхгаузен', 'Чародеи', 'Покровские ворота'],
      correct: 0, value: 1 },
    2: { audio: '../quote/Web.mp3',
      src: '../quote/3.png',
      arr: ['Целовек, который изменил все', 'Социальная сеть', 'Стив Джобс', 'Сфера'],
      correct: 1, value: 1 },
    3: { audio: '../quote/Pretty.mp3',
      src: '../quote/4.png',
      arr: ['Чего хотят женщины', 'Отпуск по обмену', 'Красотка', 'Реальная любовь'],
      correct: 2, value: 1 },
    4: { audio: '../quote/Inception.mp3',
      src: '../quote/5.png',
      arr: ['Остров проклятых', 'Интерстеллар', 'Области тьмы', 'Начало'],
      correct: 3, value: 2 },
    5: { audio: '../quote/Scott.mp3',
      src: '../quote/6.png',
      arr: ['Добро пожаловать в Zомбилэнд', 'Мир Уэйна',
        'Мир Уэйна 2', 'Скотт Пилигрим против всех'],
      correct: 3, value: 2 },
    6: { audio: '../quote/Interstellar.mp3',
      src: '../quote/7.png',
      arr: ['Интерстеллар', 'Марсианин', 'Пассажиры', 'Гравитация'],
      correct: 0, value: 2 },
    7: { audio: '../quote/Barcelona.mp3',
      src: '../quote/8.png',
      arr: ['Полночь в Париже', 'Дождливый день в Нью-Йорке',
        'Вики Кристина Барселона', 'Римские приключения'],
      correct: 2, value: 2 },
    8: { audio: '../quote/Kill.mp3',
      src: '../quote/9.png',
      arr: ['Убить Билла. Фильм 1', 'Убить Билла. Фильм 2',
        'От заката до рассвета', 'Город грехов'],
      correct: 0, value: 3 },
    9: { audio: '../quote/Her.mp3',
      src: '../quote/10.png',
      arr: ['500 дней лета', 'Трудности перевода', 'Фанатик', 'Она'],
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
        location.href = 'results.html?'  + location.href.split('?')[1].split('&')[0] + '&' +
         location.href.split('?')[1].split('&')[1] + '&quote=' + score;
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
