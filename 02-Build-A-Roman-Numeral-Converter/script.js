const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Input validation
function isValidNumber(inputStr, num) {
    if (!inputStr || inputStr.match(/[e.]/g)) {
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
      while (num >= value) {
        result += roman;
        num -= value;
      }
    });

return result;
}

