// --- 1. Data ---
// (Using the JSON structure we discussed, potentially loaded from a separate file later)


// --- Distractor Pool (Simple Example) ---
const distractors = {
    prefix: ["Peri-", "Endo-", "Hypo-", "A-", "An-", "Dys-", "Brady-", "Tachy-"],
    root: ["Nephr/o", "Cardi/o", "Neur/o", "Derm/o", "Oste/o", "My/o", "Aden/o", "Cephal/o"],
    suffix: ["-ectomy", "-oma", "-logy", "-plasty", "-algia", "-rrhea", "-osis", "-pathy"]
};

// --- 2. Game State Variables ---
let currentTermIndex;
let currentTerm;
let score = 0;
let selectedPrefix = null;
let selectedRoot = null;
let selectedSuffix = null;

// --- 3. DOM Element References ---
const definitionTextEl = document.getElementById('definition-text');
const prefixOptionsEl = document.getElementById('prefix-options');
const rootOptionsEl = document.getElementById('root-options');
const suffixOptionsEl = document.getElementById('suffix-options');
const checkButtonEl = document.getElementById('check-button');
const feedbackTextEl = document.getElementById('feedback-text');
const scoreEl = document.getElementById('score');
const correctAnswerAreaEl = document.getElementById('correct-answer-area');
const correctTermEl = document.getElementById('correct-term');
const correctBreakdownEl = document.getElementById('correct-breakdown');
const nextButtonEl = document.getElementById('next-button');


// --- 4. Functions ---

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate options for a category (prefix, root, suffix)
function generateOptions(category, correctPart) {
    let options = [correctPart];
    let availableDistractors = [...distractors[category]]; // Copy distractors

    // Ensure correct part is not also in distractors pool for this round
    availableDistractors = availableDistractors.filter(d => d !== correctPart);

    // Add 2 unique distractors
    while (options.length < 3 && availableDistractors.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableDistractors.length);
        let distractor = availableDistractors.splice(randomIndex, 1)[0]; // Remove selected distractor
        if (distractor !== null) { // Only add non-null distractors if needed
             options.push(distractor);
        }
    }
     // If correctPart is null, fill remaining spots with non-null distractors
    while (options.length < 3 && availableDistractors.length > 0) {
         let randomIndex = Math.floor(Math.random() * availableDistractors.length);
         let distractor = availableDistractors.splice(randomIndex, 1)[0];
         if (distractor !== null) {
             options.push(distractor);
         }
    }
    // If still not enough options (e.g., correct is null and few distractors), pad with null or placeholders if needed
     while (options.length < 3) {
        options.push(null); // Or potentially add more diverse distractors
    }

    return shuffleArray(options);
}

// Function to display options as buttons
function displayOptions(container, options, category) {
    container.innerHTML = ''; // Clear previous options
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option === null ? "---" : option; // Display '---' for null options
        button.dataset.value = option === null ? 'null' : option; // Store value, handle null explicitly
        button.onclick = () => selectOption(category, option, button, container);
        container.appendChild(button);
    });
}


// Function to handle selecting an option
function selectOption(category, value, buttonEl, container) {
    // Remove 'selected' class from other buttons in the same column
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    buttonEl.classList.add('selected');

    // Store the selected value
    if (category === 'prefix') selectedPrefix = value;
    else if (category === 'root') selectedRoot = value;
    else if (category === 'suffix') selectedSuffix = value;
}

// Function to load and display a new term
function loadNewTerm() {
    // Reset selections and feedback
    selectedPrefix = null;
    selectedRoot = null;
    selectedSuffix = null;
    feedbackTextEl.textContent = '';
    feedbackTextEl.className = ''; // Clear color classes
    correctAnswerAreaEl.style.display = 'none'; // Hide correct answer area
    checkButtonEl.disabled = false; // Enable check button

    // Select a random term (make sure it's different from the last one if possible)
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * medicalTerms.length);
    } while (newIndex === currentTermIndex && medicalTerms.length > 1); // Avoid immediate repeat if possible
    currentTermIndex = newIndex;
    currentTerm = medicalTerms[currentTermIndex];

    // Display definition
    definitionTextEl.textContent = currentTerm.definition;

    // Generate and display options
    displayOptions(prefixOptionsEl, generateOptions('prefix', currentTerm.prefix.part), 'prefix');
    displayOptions(rootOptionsEl, generateOptions('root', currentTerm.root.part), 'root');
    displayOptions(suffixOptionsEl, generateOptions('suffix', currentTerm.suffix.part), 'suffix');
}

// Function to check the answer
function checkAnswer() {
    const correctPrefix = currentTerm.prefix.part;
    const correctRoot = currentTerm.root.part;
    const correctSuffix = currentTerm.suffix.part;

    // Compare selected values with correct values (handle null carefully)
    const isCorrect =
        (selectedPrefix === correctPrefix) &&
        (selectedRoot === correctRoot) &&
        (selectedSuffix === correctSuffix);

    if (isCorrect) {
        feedbackTextEl.textContent = "Correct!";
        feedbackTextEl.className = 'correct';
        score++;
        scoreEl.textContent = score;
        showCorrectAnswer(); // Show correct answer and next button
        checkButtonEl.disabled = true; // Disable check button until next question
    } else {
        feedbackTextEl.textContent = "Incorrect. Try again or see the answer.";
        feedbackTextEl.className = 'incorrect';
        // Optionally show the correct answer immediately on incorrect guess, or keep check button active
        showCorrectAnswer(); // Show correct answer and next button
         checkButtonEl.disabled = true; // Disable check button until next question
    }
}

// Function to display the correct term and breakdown
function showCorrectAnswer() {
    correctTermEl.textContent = currentTerm.term;
    let breakdown = [currentTerm.prefix.part, currentTerm.root.part, currentTerm.suffix.part]
                    .filter(part => part !== null) // Filter out null parts
                    .join(' + '); // Join with ' + '
    correctBreakdownEl.textContent = breakdown;
    correctAnswerAreaEl.style.display = 'block'; // Make the area visible
}


// --- 5. Event Listeners ---
checkButtonEl.addEventListener('click', checkAnswer);
nextButtonEl.addEventListener('click', loadNewTerm); // Add listener for the next button


// --- 6. Initial Game Load ---
loadNewTerm(); // Load the first term when the page loads