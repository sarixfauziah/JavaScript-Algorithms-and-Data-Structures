const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function isPalindrome(str) {
	const cleanStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
	return cleanStr === [...cleanStr].reverse().join('');
}