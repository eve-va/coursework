const content = document.querySelector('.js-content'),
      correctClass = 'variants__ans-correct',
      layouts = {
          0: { src: '../img/OnceUponATime.png', arr: ['Волк с Уолл-стрит', 'Начало', 'Однажды в Голливуде', 'Убийцы лунного цветка'], correct: 2, value: 1 },
          1: { src: '../img/TheMost.jpg', arr: ['Москва слезам не верит', 'Самая обаятельная и привлекательная', 'Любовь и голуби', 'Девчата'], correct: 1, value: 1 },
          2: { src: '../img/BladeRunner.jpg', arr: ['Бегущий по лезвию 2049', 'Драйв', 'Ла-Ла Ленд', 'Бегущий по лезвию'], correct: 0, value: 1 },
          3: { src: '../img/PulpFiction.jpg', arr: ['Убить Билла', 'Бриолин', 'Лихорадка субботнего вечера', 'Криминальное чтиво'], correct: 3, value: 1 },
          4: { src: '../img/Witcher.jpg', arr: ['Игра престолов', 'Ведьмак', 'Черное зеркало', 'Викинги'], correct: 1, value: 1 },
          5: { src: '../img/SomeLikeItHot.jpg', arr: ['Джентльмены предпочитают блондинок', 'В джазе только девушки', 'Как выйти замуж за миллионера', 'Гражданин Кейн'], correct: 1, value: 1 },
          6: { src: '../img/GroundhogDay.jpg', arr: ['Трудности перевода', 'Сломанные цветы', 'День сурка', 'Охотники за приведениями'], correct: 2, value: 1 },
          7: { src: '../img/Parasite.jpg', arr: ['Паразиты', 'Миллионер из трущеб', 'Всегда закат на третьей авеню', 'Пустой дом'], correct: 0, value: 1 },
          8: { src: '../img/EternalSunshine.jpg', arr: ['Отпуск по обмену', 'Шоу Трумана', 'Вечное сияние чистого разума', 'Дорога перемен'], correct: 2, value: 2 },
          9: { src: '../img/Gone.jpg', arr: ['Исчезнувшая', 'Умница Уилл Хантинг', 'Операция "Арго"', 'Девушка из Джерси'], correct: 0, value: 2 },
          10: { src: '../img/GetOut.jpg', arr: ['Мы', 'Зеленая книга', 'Прочь', 'Скрытые фигуры'], correct: 2, value: 2 },
          11: { src: '../img/BeautifulMind.jpg', arr: ['Х + У', 'Умница Уилл Хантинг', 'Игра в имитацию', 'Игры разума'], correct: 3, value: 2 },
          12: { src: '../img/Favourite.jpg', arr: ['Мария - королева Шотландии', 'Две королевы', 'Тюдоры', 'Фаворитка'], correct: 3, value: 2 },
          13: { src: '../img/InBruges.jpg', arr: ['Джентельмены', 'Дом на краю света', 'Залечь на дно в Брюгге', 'Телохранитель'], correct: 2, value: 2 },
          14: { src: '../img/LittleWomen.png', arr: ['Гордость и предубеждение', 'Маленькие женщины', 'Суфражистка', 'Опасные связи'], correct: 1, value: 2 },
          15: { src: '../img/Harry.jpg', arr: ['Гарри Поттер и Кубок огня', 'Гарри Поттер и орден Феникса', 'Гарри Поттер и Принц-полукровка', 'Гарри Поттер и Дары Смерти. Часть1'], correct: 1, value: 3 },
          16: { src: '../img/Pirates.jpg', arr: ['Пираты карибского моря: Проклятие Черной Жемчужины', 'Пираты карибского моря: Сундук мертвеца', 'Пираты карибского моря: На краю света', 'Пираты карибского моря: На странных берегах'], correct: 1, value: 3 },
          17: { src: '../img/Women.jpg', arr: ['Женщины на грани нервного срыва', 'Поговори с ней', 'Возвращение', 'Все о моей матери'], correct: 0, value: 4 },
          18: { src: '../img/Bride.jpg', arr: ['Кошмар перед Рождеством', 'Франкенвини', 'Маленький вампир', 'Труп невесты'], correct: 3, value: 4 },
          19: { src: '../img/Billboards.jpg', arr: ['Фарго', 'После прочтения сжечь', 'Три биллборда на границе Эббинга, Миссури', 'Миссисипи в огне'], correct: 2, value: 4 },
          current: -1, 
          get: function() {
              return this[++this.current];
          },
      };

let layout = layouts.get(), 
    score = 0;
//console.log(layout);

content.innerHTML = '';
content.appendChild(createLayout(layout.src, layout.arr, layout.correct, layout.value));
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
                content.appendChild(createLayout(layout.src, layout.arr, layout.correct, layout.value));
            } else {
                location.href = 'page4.html?score=' + score;
            }
        }, 1500);
    }
});

function createLayout(src, arr, correct, value) {
    const wr = document.createElement('div'),
          img = document.createElement('img'),
          variants = document.createElement('div');
    let ans, temp;

    img.setAttribute('alt', 'movie frame');
    img.setAttribute('src', src);

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
    wr.appendChild(variants);

    return wr;
}