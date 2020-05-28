const movieScore = document.querySelector('.js-movie'),
      musicScore = document.querySelector('.js-music'),
      quoteScore = document.querySelector('.js-quote'),
      sumScore = document.querySelector('.js-sum');

let scores = location.href.split('?')[1];
scores = scores.split('&').map(x => +x.split('=')[1]);

movieScore.innerText = `${scores[0]} / 40`;
musicScore.innerText = `${scores[1]} / 20`;
quoteScore.innerText = `${scores[2]} / 20`;
sumScore.innerText = `${scores.reduce((sum, cur) => sum + cur)} / 80`;