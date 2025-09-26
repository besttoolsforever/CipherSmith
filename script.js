// CipherSmith v25.0 (Final Documented Version)

// --- GLOBALS ---
const wordList_dev = ["apex", "vortex", "matrix", "onyx", "fury", "quantum", "zenith", "nebula", "pulse", "terra"];
let wordList = wordList_dev;
const WORDLIST_URL = 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa.txt';

// --- CORE ---

/**
 * Fetches the Google 10,000 English wordlist to be used for memorable passwords.
 * Falls back to a small internal list if the fetch request fails.
 */
async function fetchWordList() {
    console.log('Fetching wordlist...');
    try {
        const response = await fetch(WORDLIST_URL);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
        const text = await response.text();
        wordList = text.split('\n').filter(word => word.trim() !== '');
        console.log(`Successfully loaded ${wordList.length} words.`);
    } catch (error) {
        console.error('Failed to fetch wordlist. Falling back to dev list.', error);
        wordList = wordList_dev;
    }
}

// --- HELPERS ---

/**
 * Generates a cryptographically secure random integer between 0 and (max - 1).
 * @param {number} max The upper bound (exclusive).
 * @returns {number} A secure random integer.
 */
function getSecureRandomInt(max) {
    if (max <= 0 || !Number.isInteger(max)) return 0;
    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    const max_uint32 = 0xFFFFFFFF;
    const range = max_uint32 - (max_uint32 % max);
    if (randomValues[0] >= range) {
        return getSecureRandomInt(max);
    }
    return randomValues[0] % max;
}

/**
 * Gets a specified number of random characters from a given character set.
 * @param {string} chars The string of characters to choose from.
 * @param {number} count The number of random characters to return.
 * @returns {string} A string of random characters.
 */
function getRandomChars(chars, count) {
    if (count <= 0) return '';
    let result = '';
    for (let i = 0; i < count; i++) {
        result += chars.charAt(getSecureRandomInt(chars.length));
    }
    return result;
}

/**
 * Shuffles an array in-place using the Fisher-Yates algorithm.
 * @param {Array<any>} array The array to be shuffled.
 * @returns {Array<any>} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getSecureRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Builds a block of text from random words to a target length.
 * @param {number} targetLength The desired length of the final string.
 * @returns {string} A string composed of concatenated words.
 */
function makeWordBlock(targetLength) {
    if (targetLength <= 0 || wordList.length === 0) return '';
    let memorableBlock = '';
    while (memorableBlock.length < targetLength) {
        memorableBlock += wordList[getSecureRandomInt(wordList.length)];
    }
    return memorableBlock.slice(0, targetLength);
}

/**
 * Replaces a character at a specific index in a string.
 * @param {string} string The original string.
 * @param {number} index The index of the character to replace.
 * @param {string} replacement The character to insert.
 * @returns {string} The new string.
 */
function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + 1);
}

/**
 * Applies capitalization to a password string.
 * @param {string} password The password to modify.
 * @returns {string} The password with capitalization applied.
 */
function applyUppercaseFilter(password) {
    let result = password;
    let indices = [];
    for (let i = 0; i < password.length; i++) {
        if (password[i].match(/[a-z]/)) {
            indices.push(i);
        }
    }
    if (indices.length > 0) {
        let placeUppercaseAtStart = getSecureRandomInt(2) === 0;
        const charsToCapitalize = Math.min(indices.length, 2);
        if (placeUppercaseAtStart) {
            for (let i = 0; i < charsToCapitalize; i++) {
                result = replaceAt(result, indices[i], password[indices[i]].toUpperCase());
            }
        } else {
            for (let i = 0; i < charsToCapitalize; i++) {
                const targetIndex = indices[indices.length - 1 - i];
                result = replaceAt(result, targetIndex, password[targetIndex].toUpperCase());
            }
        }
    }
    return result;
}

/**
 * Swaps the case of each alphabetic character in a string.
 * @param {string} text The input string.
 * @returns {string} The string with its case swapped.
 */
function swapCaseFilter(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
}

/**
 * Calculates a recommended number of special characters based on password length.
 * @param {number} length The length of the password.
 * @returns {number} The suggested number of special characters.
 */
function calculateSpecialCharCount(length) {
    if (length >= 41) return 6;
    if (length >= 29) return 5;
    if (length >= 17) return 4;
    if (length >= 10) return 3;
    if (length >= 6) return 2;
    return 1;
}

// --- UI & STRENGTH ---

/**
 * Updates the main strength meter UI based on the zxcvbn library's analysis.
 * @param {string|null} password The password to analyze, or null to reset the meter.
 */
function updatePasswordStrength(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthFeedback = document.getElementById('strengthFeedback');
    const strengthTime = document.getElementById('strengthTime');
    if (typeof zxcvbn === 'undefined') {
        strengthFeedback.textContent = 'Strength meter unavailable.';
        return;
    }
    if (!password) {
        strengthBar.style.width = '0%';
        strengthFeedback.textContent = '';
        strengthTime.textContent = '';
        strengthBar.className = 'strength-bar';
        return;
    }
    const result = zxcvbn(password);
    const score = result.score;
    const feedbackText = result.feedback.warning || (result.feedback.suggestions && result.feedback.suggestions[0]) || "Strong password";
    const crackTime = result.crack_times_display.offline_slow_hashing_1e4_per_second;
    const timeText = `Estimated time to crack: ${crackTime}`;
    const widthPercentage = (score / 4) * 100;
    strengthBar.style.width = widthPercentage + '%';
    strengthBar.className = 'strength-bar';
    strengthBar.classList.add(`strength-${score}`);
    strengthFeedback.textContent = feedbackText;
    strengthTime.textContent = timeText;
}

// --- GENERATORS ---

/**
 * Generates a standard random password.
 * @param {number} length Desired password length.
 * @param {boolean} includeUppercase Include uppercase letters.
 * @param {boolean} includeLowercase Include lowercase letters.
 * @param {boolean} includeNumbers Include numbers.
 * @param {boolean} includeSymbols Include symbols.
 * @returns {string} The generated random password.
 */
function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';
    let passwordChars = [];
    let charPool = '';
    if (includeLowercase) charPool += lowerCaseLetters;
    if (includeUppercase) charPool += upperCaseLetters;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;
    if (charPool === '') return 'Select an option.';
    if (includeLowercase) passwordChars.push(getRandomChars(lowerCaseLetters, 1));
    if (includeUppercase) passwordChars.push(getRandomChars(upperCaseLetters, 1));
    if (includeNumbers) passwordChars.push(getRandomChars(numbers, 1));
    if (includeSymbols) passwordChars.push(getRandomChars(symbols, 1));
    const remainingLength = length - passwordChars.length;
    if (remainingLength > 0) {
        passwordChars.push(getRandomChars(charPool, remainingLength));
    }
    let finalPassword = passwordChars.join('').split('');
    shuffleArray(finalPassword);
    return finalPassword.join('');
}

/**
 * Generates a memorable password (passphrase).
 * @param {number} length Desired password length.
 * @param {boolean} includeUppercase Include uppercase letters.
 * @param {boolean} includeLowercase Include lowercase letters.
 * @param {boolean} includeNumbers Include numbers.
 * @param {boolean} includeSymbols Include symbols.
 * @returns {string} The generated memorable password.
 */
function generateMemorablePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';
    const lettersActive = includeUppercase || includeLowercase;
    let sizes = { letters: 0, numbers: 0, symbols: 0 };
    if (includeSymbols) sizes.symbols = calculateSpecialCharCount(length);
    if (includeNumbers) sizes.numbers = Math.floor(length * 0.2);
    let currentTotal = sizes.symbols + sizes.numbers;
    if (lettersActive) {
        sizes.letters = length - currentTotal;
    } else if (currentTotal < length) {
        let remainder = length - currentTotal;
        if (includeNumbers && includeSymbols) {
            sizes.numbers += Math.ceil(remainder / 2);
            sizes.symbols += Math.floor(remainder / 2);
        } else if (includeNumbers) {
            sizes.numbers += remainder;
        } else if (includeSymbols) {
            sizes.symbols += remainder;
        }
    }
    let finalTotal = sizes.letters + sizes.numbers + sizes.symbols;
    if (finalTotal !== length) {
        if (lettersActive) sizes.letters += length - finalTotal;
        else if (includeNumbers) sizes.numbers += length - finalTotal;
        else if (includeSymbols) sizes.symbols += length - finalTotal;
    }
    let charGroups = [];
    if (lettersActive && sizes.letters > 0) {
        let letterBlock = makeWordBlock(sizes.letters);
        if (includeUppercase && !includeLowercase) {
            letterBlock = letterBlock.toUpperCase();
        } else if (includeUppercase) {
            letterBlock = applyUppercaseFilter(letterBlock);
        }
        charGroups.push(letterBlock);
    }
    if (includeNumbers && sizes.numbers > 0) {
        charGroups.push(getRandomChars(numbers, sizes.numbers));
    }
    if (includeSymbols && sizes.symbols > 0) {
        charGroups.push(getRandomChars(symbols, sizes.symbols));
    }
    shuffleArray(charGroups);
    return charGroups.join('');
}

// --- DOM CONTROL ---

/**
 * Main function to generate and display passwords in the UI.
 * Orchestrates the process from reading options to rendering the final list.
 */
function generatePasswords() {
    const passwordContainer = document.getElementById('passwordList');
    passwordContainer.innerHTML = '';

    const options = {
        length: parseInt(document.getElementById('lengthSlider').value),
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSymbols: document.getElementById('includeSymbols').checked
    };
    
    // Security Gate: Enforce use of multiple character types for better security.
    const selectedTypesCount = [options.includeUppercase, options.includeLowercase, options.includeNumbers, options.includeSymbols].filter(Boolean).length;
    if (selectedTypesCount < 3) {
        const placeholder = document.createElement('li');
        placeholder.textContent = "For better security, please select at least 3 character types.";
        placeholder.classList.add('placeholder');
        passwordContainer.appendChild(placeholder);
        updatePasswordStrength(null);
        return;
    }

    const isPassphraseMode = document.getElementById('memorableCheckbox').checked;
    const serialCount = parseInt(document.getElementById('serialCount').value) || 1;
    let passwords = [];

    for (let i = 0; i < serialCount; i++) {
        let password;
        if (isPassphraseMode) {
            password = generateMemorablePassword(options.length, options.includeUppercase, options.includeLowercase, options.includeNumbers, options.includeSymbols);
        } else {
            password = generateRandomPassword(options.length, options.includeUppercase, options.includeLowercase, options.includeNumbers, options.includeSymbols);
        }
        if (options.includeUppercase && options.includeLowercase && getSecureRandomInt(2) === 0) {
            password = swapCaseFilter(password);
        }
        passwords.push(password);
    }
    
    // Create and render each password item in the list.
    passwords.forEach((password, index) => {
        const listItem = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.className = 'password-text';
        textSpan.textContent = password;

        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'strength-dots-container';

        const result = zxcvbn(password);
        const score = result.score;

        for (let i = 0; i < 4; i++) {
            const dot = document.createElement('div');
            dot.className = 'strength-dot';
            if (i <= score) {
                dot.classList.add(`strength-${score}`);
            }
            dotsContainer.appendChild(dot);
        }
        
        listItem.appendChild(textSpan);
        listItem.appendChild(dotsContainer);
        
        listItem.addEventListener('click', () => {
            passwordContainer.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            listItem.classList.add('active');
            updatePasswordStrength(password);
        });

        passwordContainer.appendChild(listItem);

        // Activate the first password by default.
        if (index === 0) {
            listItem.classList.add('active');
            updatePasswordStrength(password);
        }
    });
}

/**
 * Copies all generated passwords to the user's clipboard.
 */
function copyPasswords() {
    const passwordItems = document.querySelectorAll('#passwordList li .password-text');
    const passwords = Array.from(passwordItems).map(span => span.textContent);
    if (passwords.length === 0) return;
    const textToCopy = passwords.join('\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("All passwords copied to clipboard! ✨");
    });
}

/**
 * Syncs the values of two input elements (e.g., a text input and a range slider).
 * @param {HTMLInputElement} element1 The first element.
 * @param {HTMLInputElement} element2 The second element.
 */
function syncValue(element1, element2) {
    element1.addEventListener('input', () => { element2.value = element1.value; });
    element2.addEventListener('input', () => { element1.value = element2.value; });
}

/**
 * Increments the value of a number input field.
 * @param {string} inputId The ID of the input element.
 */
function pg_increment(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) < parseInt(input.max)) {
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('input'));
    }
}

/**
 * Decrements the value of a number input field.
 * @param {string} inputId The ID of the input element.
 */
function pg_decrement(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('input'));
    }
}

// --- INITIALIZATION ---

/**
 * Sets up the application once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    fetchWordList();
    syncValue(document.getElementById('passwordLength'), document.getElementById('lengthSlider'));
    syncValue(document.getElementById('serialCount'), document.getElementById('countSlider'));
    document.getElementById('refreshButton').addEventListener('click', generatePasswords);
    document.getElementById('copyButton').addEventListener('click', copyPasswords);
    const copyBtcBtn = document.getElementById('copyBtcButton');
    if (copyBtcBtn) {
        copyBtcBtn.addEventListener('click', () => {
            const btcAddress = document.getElementById('btcAddressText').textContent;
            navigator.clipboard.writeText(btcAddress).then(() => alert('Bitcoin address copied to clipboard!'));
        });
    }
    generatePasswords();
});