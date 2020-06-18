'use strict';

const movieScore = document.querySelector('.js-movie');
const musicScore = document.querySelector('.js-music');
const quoteScore = document.querySelector('.js-quote');
const sumScore = document.querySelector('.js-sum');

let scores = location.href.split('?')[1];
scores = scores.split('&').map(x => +x.split('=')[1]);

const ScoreVal = 80;
const movieScoreValue = 40;
const musicScoreValue = 20;
const quoteScoreValue = 20;

movieScore.innerText = `${scores[0]} / ${movieScoreValue}`;
musicScore.innerText = `${scores[1]} / ${musicScoreValue}`;
quoteScore.innerText = `${scores[2]} / ${quoteScoreValue}`;
sumScore.innerText = `${scores.reduce((sum, cur) => sum + cur)} / ${ScoreVal}`;

