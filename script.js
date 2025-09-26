// PasswordGen_Max.js - Version 22.1 (Final Conditional Filter)

// A tiny collection of words for the "Memorable" mode. Serves as a fallback.
// Just a few to get you started. Feel free to add thousands more. Or don't. I'm just a comment.
const wordList_dev = ["apex", "vortex", "matrix", "onyx", "fury", "quantum", "zenith", "nebula", "pulse", "terra"];

// --- GOOGLE 10000 WORDLIST INTEGRATION ---
let wordList = wordList_dev;
const WORDLIST_URL = 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa.txt';

/**
 * Fetches the wordlist from the specified URL.
 * If it fails, it gracefully falls back to the small developer list.
 */
async function fetchWordList() {
    console.log('Fetching wordlist...');
    try {
        const response = await fetch(WORDLIST_URL);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const text = await response.text();
        const fullWordList = text.split('\n').filter(word => word.trim() !== '');
        wordList = fullWordList;
        console.log(`Successfully loaded ${wordList.length} words from the new wordlist.`);
    } catch (error) {
        console.error('Failed to fetch the new wordlist. Falling back to the short developer list.', error);
        wordList = wordList_dev;
    }
}


// --- HELPER MINIONS ---
// Small functions that do the actual hard work while the main function takes all the credit.

/**
 * Generates a cryptographically secure random integer.
 * @param {number} max - The exclusive upper bound for the random number.
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
 * Grabs a specified number of random characters from a given string.
 * @param {string} chars - The character set to pull from (e.g., "abcde").
 * @param {number} count - How many characters you want.
 * @returns {string} A string of random characters.
 */
function getRandomChars(chars, count) {
    if (count <= 0) return '';
    let result = '';
    // A classic loop. It's old, but it works. Unlike my last relationship.
    for (let i = 0; i < count; i++) {
        result += chars.charAt(getSecureRandomInt(chars.length));
    }
    return result;
}

/**
 * Shuffles an array. Not emotionally, just the order of its elements.
 * Uses the Fisher-Yates algorithm, because smart people already solved this problem.
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The same array, but now its life is all mixed up.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getSecureRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]]; // A bit of fancy array destructuring.
    }
    return array;
}

/**
 * Builds a string of words from the wordList to a target length. (Original Logic)
 * @param {number} targetLength - The desired length of the final word block.
 * @returns {string} A string of concatenated words.
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
 * Replaces a character at a specific index in a string. A surgical strike.
 * @param {string} string - The original string.
 * @param {number} index - The position of the character to replace.
 * @param {string} replacement - The new character.
 * @returns {string} The modified string.
 */
function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + 1);
}

/**
 * Applies a very specific, almost superstitious, capitalization filter to a password. (Original Logic)
 * @param {string} password - The password to be filtered.
 * @returns {string} The password with its newfound capital letters.
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
 * Inverts the case of letters in a string (aBc -> AbC), leaving other characters untouched.
 * @param {string} text - The input string.
 * @returns {string} The string with its letter case inverted.
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
 * Calculates how many symbols a password should have based on its length. (Original Logic)
 * @param {number} length - The total length of the password.
 * @returns {number} The suggested number of symbols.
 */
function calculateSpecialCharCount(length) {
    if (length >= 41) return 6;
    if (length >= 29) return 5;
    if (length >= 17) return 4;
    if (length >= 10) return 3;
    if (length >= 6) return 2;
    return 1;
}

// --- SOPHISTICATED STRENGTH INDICATOR ---
function updatePasswordStrength(password) {
    const strengthBar = document.getElementById('strengthBar');
    const strengthFeedback = document.getElementById('strengthFeedback');
    const strengthTime = document.getElementById('strengthTime');
    if (typeof zxcvbn === 'undefined') {
        strengthFeedback.textContent = 'Strength meter unavailable.';
        return;
    }
    if (!password || password.startsWith('Select an option')) {
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

// --- THE GRAND MASTER FUNCTIONS ---

/**
 * Generates a random character password.
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
 * Generates a memorable password using the original block-based logic.
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


// --- PAGE CONTROL FUNCTIONS ---

function generatePasswords() {
    const isPassphraseMode = document.getElementById('memorableCheckbox').checked;
    const serialCount = parseInt(document.getElementById('serialCount').value) || 1;
    let passwords = [];

    const options = {
        length: parseInt(document.getElementById('lengthSlider').value),
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSymbols: document.getElementById('includeSymbols').checked
    };
    
    if (!options.includeUppercase && !options.includeLowercase && !options.includeNumbers && !options.includeSymbols) {
        document.getElementById('generatedPassword').textContent = 'Select an option.';
        updatePasswordStrength(null);
        return;
    }

    for (let i = 0; i < serialCount; i++) {
        let password;
        if (isPassphraseMode) {
            password = generateMemorablePassword(
                options.length, options.includeUppercase, options.includeLowercase,
                options.includeNumbers, options.includeSymbols
            );
        } else {
            password = generateRandomPassword(
                options.length, options.includeUppercase, options.includeLowercase,
                options.includeNumbers, options.includeSymbols
            );
        }

        // --- FINAL CONDITIONAL FILTER ---
        // With a 50% chance, and ONLY if both case options are active,
        // invert the case of all letters in the final password.
        if (options.includeUppercase && options.includeLowercase && getSecureRandomInt(2) === 0) {
            password = swapCaseFilter(password);
        }

        passwords.push(password);
    }
    
    const finalOutput = passwords.join('\n');
    document.getElementById('generatedPassword').textContent = finalOutput;
    updatePasswordStrength(passwords[0]);
}

function copyPasswords() {
    const passwordText = document.getElementById('generatedPassword').textContent;
    if (passwordText && !passwordText.startsWith('Select an option')) {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert("Passwords copied to clipboard! Remember: You don't choose the password. The password chooses the user. ✨");
        });
    }
}

function syncValue(element1, element2) {
    element1.addEventListener('input', () => { element2.value = element1.value; });
    element2.addEventListener('input', () => { element1.value = element2.value; });
}

function pg_increment(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) < parseInt(input.max)) {
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('input'));
    }
}

function pg_decrement(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > parseInt(input.min)) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('input'));
    }
}

// Fetch the wordlist when the page content has loaded.
document.addEventListener('DOMContentLoaded', fetchWordList);