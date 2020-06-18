'use strict';
class LayoutContent {
  constructor(arr, selectorContent, correctClass, intervalLayoutMS = 1500) {
    this.arr = arr;
    this.score = 0;
    this.current = 0;
    this.curLayout = arr[this.current];
    this.content = document.querySelector(selectorContent);
    this.cssCorrectClass = correctClass;
    this.intervalLayoutMS = intervalLayoutMS;
  }

  init(contentType = 'movie', f) {
    this.content.innerHTML = '';


    this.content.appendChild(createLayout(contentType, this.curLayout.audio,
      this.curLayout.src, this.curLayout.arr,
      this.curLayout.correct, this.curLayout.value));


    this.content.addEventListener('click', e => {
      if (e.target.classList.contains('js-variant')) {
        const container = e.target.parentNode.parentNode;

        if (e.target.getAttribute('data-correct')) {
          this.score += parseInt(container.getAttribute('data-value'));
          e.target.parentNode.classList.add(this.cssCorrectClass);
        } else {
          const labelCorrect = container.querySelector('label[data-correct]');
          labelCorrect.parentNode.classList.add(this.cssCorrectClass);
        }

        setTimeout(() => {
          this.curLayout = this.arr[++this.current];

          if (this.curLayout === undefined) {
            location.href = f(this.score);
          } else {
            this.content.innerHTML = '';
            this.content.appendChild(createLayout(contentType,
              this.curLayout.audio, this.curLayout.src, this.curLayout.arr,
              this.curLayout.correct, this.curLayout.value));
          }
        }, this.intervalLayoutMS);

      }
    });
  }
}


function createLayout(type = 'movie', audio = null, src, arr, correct, value) {
  const wr = document.createElement('div');
  const img = document.createElement('img');
  const variants = document.createElement('div');

  const song = document.createElement('audio');
  const songSource = document.createElement('source');
  let ans;
  let temp;

  (type === 'movie') ?
    img.setAttribute('alt', 'movie frame') :
    img.setAttribute('alt', 'picture');
  img.setAttribute('src', src);

  if (type === 'audio') {
    song.setAttribute('controls', 'controls');
    songSource.setAttribute('src', audio);
    songSource.setAttribute('type', 'audio/mp3');
    song.appendChild(songSource);
  }

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
  if (type === 'audio') wr.appendChild(song);
  wr.appendChild(variants);

  return wr;
}
