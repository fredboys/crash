const startButton = document.getElementById('start-button');
const countElement = document.getElementById('count');
const resultElement = document.getElementById('result');
const button5 = document.getElementById('button-5');
const button10 = document.getElementById('button-10');
const button20 = document.getElementById('button-20');
const button50 = document.getElementById('button-50');
const totalElement = document.getElementById('total');
const resetButton = document.getElementById('reset-button');
const addBalance = document.getElementById('add-balance');
const totalBalance = document.getElementById('balance');
const cashOutButton = document.getElementById('cash-out-button');


let intervalId;
let interval = 100;
let total = 0;
let balance = 0.00;


function startCounting() {
  // Disable the start button
  startButton.disabled = true;
  resetButton.disabled = true;
  button5.disabled = true;
  button10.disabled = true;
  button20.disabled = true;
  button50.disabled = true;
  addBalance.disabled = true;
  cashOutButton.disabled = false;

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
      resetButton.disabled = false;
      button5.disabled = false;
      button10.disabled = false;
      button20.disabled = false;
      button50.disabled = false;
      addBalance.disabled = false;

      cashOutButton.disabled = true;
    } 
  }, interval);
}


button5.addEventListener('click', function() {
  total += 5;
  totalElement.innerHTML = total;
});

button10.addEventListener('click', function() {
  total += 10;
  totalElement.innerHTML = total;
});

button20.addEventListener('click', function() {
  total += 20;
  totalElement.innerHTML = total;
});

button50.addEventListener('click', function() {
  total += 50;
  totalElement.innerHTML = total;
});

resetButton.addEventListener('click', function() {
  totalElement.innerHTML = 0;
});

addBalance.addEventListener('click', function() {
  balance += 100;
  totalBalance.innerHTML = balance;
});

cashOutButton.addEventListener('click', function() {
  // Update the balance by adding the current count to it
  let currentCount = parseFloat(countElement.innerHTML);
  balance += currentCount * total;
  totalBalance.innerHTML = balance.toFixed(2);
  total = 0;
  totalElement.innerHTML = total;

  // Update the total balance element
  totalBalance.innerHTML = balance;
  cashOutButton.disabled = true;
});

cashOutButton.disabled = true;



startButton.addEventListener('click', function() {
  startCounting()
  cashOutButton.disabled = false;
});



