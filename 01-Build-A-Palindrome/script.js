const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function isPalindrome(str) {
	const cleanStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
	return cleanStr === [...cleanStr].reverse().join('');
}

function displayResult(input, isPalindrome) {   // Function to display user input after going through isPalindrome()
	resultDiv.textContent = ''; // Clear previous result

	const message = document.createElement('p');
	message.className = 'user-input';
	message.textContent = `"${input}" ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
	resultDiv.appendChild(message);

	resultDiv.classList.remove('hidden');
}

function handleCheckPalindrome() {  // Input validation
	const inputValue = userInput.value.trim();

	if (inputValue === '') {
		alert('Please input a value');
		return;
	}

	displayResult(inputValue, isPalindrome(inputValue));
	userInput.value = ''; // Clear input field
}

checkPalindromeBtn.addEventListener('click', handleCheckPalindrome);

userInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
	handleCheckPalindrome();
	}
});