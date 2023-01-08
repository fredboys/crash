const startButton = document.getElementById('start-button');
const countElement = document.getElementById('count');
const resultElement = document.getElementById('result');

let intervalId;
let interval = 10;

function startCounting() {
  // Disable the start button
  startButton.disabled = true;

  resultElement.innerHTML = '';
  let count = 1;
  let target;
const random = Math.random();
if (random < 0.08) {
  target = random * 0.01 + 1;
} else if (random < 0.16) {
  target = random * 0.1 + 1.01;
} else if (random < 0.3) {
  target = random * 0.4 + 1.1;
} else if (random < 0.4) {
  target = random * 0.49 + 1.5;
} else if (random < 0.5) {
  target = random * 0.5 + 1.99;
} else if (random < 0.55) {
  target = random * 0.5 + 2.49;
} else if (random < 0.6) {
  target = random * 0.5 + 2.99;
} else if (random < 0.65) {
  target = random * 0.5 + 3.49;
} else if (random < 0.7) {
  target = random * 0.5 + 3.99;
} else if (random < 0.75) {
  target = random * 0.5 + 4.49;
} else if (random < 0.8) {
  target = random * 0.5 + 4.99;
} else if (random < 0.85) {
  target = random * 0.5 + 5.49;
} else if (random < 0.9) {
  target = random * 0.5 + 5.99;
} else if (random < 0.95) {
  target = random * 0.5 + 6.49;
} else if (random < 0.97) {
  target = random * 0.5 + 6.99;
} else if (random < 0.99) {
  target = random * 10 + 6.99;
} else {
  target = random * 50 + 14.99;
}


  intervalId = setInterval(() => {
    count += 0.01;
    countElement.innerHTML = count.toFixed(2);
    if (count >= target) {
      clearInterval(intervalId);
      resultElement.innerHTML = 'Crash';
      // Re-enable the start button
      startButton.disabled = false;
    } else if (Math.floor(count) % 5 === 0) {
      clearInterval(intervalId);
      interval -= 1;
      intervalId = setInterval(() => {
        count += 0.01;
        countElement.innerHTML = count.toFixed(2);
        if (count >= target) {
          clearInterval(intervalId);
          resultElement.innerHTML = 'Crash';
          // Re-enable the start button
          startButton.disabled = false;
        }
      }, interval);
    }
  }, interval);
}

startButton.addEventListener('click', startCounting);
