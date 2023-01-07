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
  } else if (random < 0.50) {
    target = random * 0.4 + 1.1;
  } else if (random < 0.90) {
    target = random * 0.5 + 1.5;
  } else if (random < 0.95) {
    target = random * 2 + 2;
  } else if (random < 0.97) {
    target = random * 2 + 4;
  } else if (random < 0.99) {
    target = random * 4 + 6;
  } else {
    target = random * 10 + 10;
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
