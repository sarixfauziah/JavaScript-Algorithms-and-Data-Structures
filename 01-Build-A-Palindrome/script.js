const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function isPalindrome(str) {
	const cleanStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
	// str.replace('x', 'y') di atas ini untuk menggantikan suatu bagian dari string
	// kalau ada suatu kata di input String yang matching dengan regex yang sudah diberikan (x),
	// maka bagian itu akan direplace dengan value yang sudah ditentukan (y)
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
	// str.toLowerCase() untuk mengtransform semua huruf di suatu String untuk menjadi lower case
	return cleanStr === [...cleanStr].reverse().join(''); // Code line yang mengecek apakah String ini sebuah palindrome atau bukan
	// [...cleanStr] menggunakan Spread Operator (...) untuk mengtransfor tiap huruf dalam variabel cleanStr menjadi bagian dari suatu Array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	// Jadi di line #12, initial variabel cleanStr berubah dari suatu String, menjadi suatu Array
	// yang kemudian Array ini di reverse urutannya dengan array.reverse() dan ditransformasikan lagi menjadi suatu String dengan array.join('')
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
}

function displayResult(input, isPalindrome) {   // Function to display user input after going through isPalindrome()
	resultDiv.textContent = ''; // Clear previous result

	const message = document.createElement('p');
	message.className = 'user-input';
	message.textContent = `"${input}" ${isPalindrome ? 'is' : 'is not'} a palindrome.`;
	// Ternary operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
	resultDiv.appendChild(message);

	resultDiv.classList.remove('hidden');
}

function handleCheckPalindrome() {  // Input validation
	const inputValue = userInput.value.trim();
	// str.trim() ini sangat direkomendasikan untuk tiap input Strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

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