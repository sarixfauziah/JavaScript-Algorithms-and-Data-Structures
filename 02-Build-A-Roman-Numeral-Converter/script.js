const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Input validation
function isValidNumber(inputStr, num) {
    if (!inputStr || inputStr.match(/[e.]/g)) { // str.match() dengan regex pattern
      displayError('Please enter a valid number.');
      return false;
    }
    if (num < 1) {
      displayError('Please enter a number greater than or equal to 1.');
      return false;
    }
    if (num > 3999) {
      displayError('Please enter a number less than or equal to 3999.');
      return false;
    }
    return true;
  }

// Input error message
function displayError(errorMessage) {
    output.innerText = errorMessage;
    output.classList.add('alert');
  }
  
function clearError() {
output.innerText = '';
output.classList.remove('alert');
}

// Function to convert the number to Roman number
function convertToRoman(num) {
  const romanNumeralsMap = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    let result = '';

    romanNumeralsMap.forEach(([roman, value]) => { // Looping the input number to the array above
      while (num >= value) { // while loop ini untuk mengurangi (substract) value dari input Integer (num) yang diberikan
        result += roman;
        num -= value;
      }
      // while loop ini akan terus berjalan (iterate)
      // sampai akhirnya input Integer (num) tadi bersisa kurang dari value paling kecil yang ada di Array Map (1)
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
    });

return result;
}

function handleConversion() {   // Handle numerical conversion and display the converted number
    const numberStr = document.getElementById('number').value;
    const num = parseInt(numberStr, 10);
    clearError();
  
    output.classList.remove('hidden'); // Remove the hidden flag to show the html element
  
    if (isValidNumber(numberStr, num)) {
      output.innerText = convertToRoman(num);
      }
  }
  
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    handleConversion();
  });
  
  convertButton.addEventListener('click', handleConversion); // On submit