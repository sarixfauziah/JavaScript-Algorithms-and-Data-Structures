const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Input validation

// Input error message

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

