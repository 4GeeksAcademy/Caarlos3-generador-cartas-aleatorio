import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const symbols = ["♣", "♦", "♥", "♠"];

const numberRandom = document.getElementById('number');
const symbolsRandomTop = document.getElementById('symbol');
const symbolsRandomBottom = document.getElementById('symbol-two')
const button = document.getElementById('shuffleCard');

function getRandomCard(card) {
  return card[Math.floor(Math.random() * card.length)];
}

function cardRandomizer() {
  const numberRandomized = getRandomCard(numbers);
  const symbolsRandomized = getRandomCard(symbols);

  numberRandom.textContent = numberRandomized;
  symbolsRandomTop.textContent = symbolsRandomized;
  symbolsRandomBottom.textContent = symbolsRandomized;

  const redColor = symbolsRandomized === '♥' || symbolsRandomized === '♦';
  const color = redColor ? 'red' : 'black';

  symbolsRandomTop.style.color = color;
  symbolsRandomBottom.style.color = color;

  if (numberRandomized === '3' && symbolsRandomized === '♥') {
    setTimeout(() => {
      alert('Nada gana al 3 de corazones');
    }, 100);
  }

}

function modifyCard() {
  const cardWidth = document.getElementById('widthCard').value;
  const cardHeight = document.getElementById('heightCard').value;
  const card = document.getElementById('card');
  const number = document.getElementById('number');
  const symbolTop = document.getElementById('symbol');
  const symbolBottom = document.getElementById('symbol-two');


  if (cardWidth && cardHeight) {
    card.style.width = cardWidth + 'px';
    card.style.height = cardHeight + 'px';

    const fontSize = Math.min(cardWidth, cardHeight) * 0.3;
    number.style.fontSize = fontSize + 'px';
    symbolTop.style.fontSize = fontSize + 'px';
    symbolBottom.style.fontSize = fontSize + 'px';
    card.style.overflow = 'hidden';

  }

}

function pressButton() {
  modifyCard();
  cardRandomizer();
}

setInterval(cardRandomizer, 10000);

button.addEventListener("click", pressButton);

window.addEventListener("load", cardRandomizer);
