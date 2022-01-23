//
//

const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');

const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
  // If currentDisplay value is 0, replace it, if not add number

  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === '0' ? number : displayValue + number;
}

console.log(inputBtns);

// Add Event Listeners for numbers, operators and decimal buttons
inputBtns.forEach(function (inputBtn) {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }

  if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }

  if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }
});

// Reset Display
function resetAll() {
  calculatorDisplay.textContent = '0';
}

// Event Listener to reset display to 0
clearBtn.addEventListener('click', resetAll);
