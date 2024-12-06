// Obtain references to elements on the DOM
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Regexes untuk validasi US phone numbers, dikumpulin dalam satu function
const createPhoneNumberRegex = () => {
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';

    return new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
};

// Phone number validation function
// to validate the input against the regex
const validatePhoneNumber = (input, regex) => {
    if (input === '') return null; // Input validation kalau inputnya empty string

    return regex.test(input);
};

// Create a result element
const createResultElement = (isValid, input) => {
    const p = document.createElement('p');
    const message = isValid ? 'Valid' : 'Invalid';
    p.className = 'results-text';
    p.style.color = isValid ? '#00471b' : '#4d3800';
    p.textContent = `${message} US number: ${input}`;

    return p;
};

// Append child by returning a new DOM node
const appendResult = (parentNode, childNode) => parentNode.appendChild(childNode);

// Run the validation and handle the UI updates
const handleCheck = (inputElement, resultsContainer) => {
    const regex = createPhoneNumberRegex(); // Calling the Regex function
    const inputValue = inputElement.value;
    const isValid = validatePhoneNumber(inputValue, regex); // Calling the phone number validation function

    if (isValid !== null) {
        const resultElement = createResultElement(isValid, inputValue);
        appendResult(resultsContainer, resultElement); // If valid -> update UI
    } else {
        alert('Please provide a phone number'); // If not valid -> alert popup
    }

    inputElement.value = '';
};

checkBtn.addEventListener('click', () => handleCheck(userInput, resultsDiv));

userInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        handleCheck(userInput, resultsDiv);
    }
});

clearBtn.addEventListener('click', () => (resultsDiv.textContent = ''));