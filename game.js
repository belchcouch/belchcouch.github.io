// File: game.js
// Contains the main logic for the Medical Terminology Game

document.addEventListener('DOMContentLoaded', () => {

    // --- Distractor Pool ---
    const distractors = {
        prefix: ["Peri-", "Endo-", "Hypo-", "A-", "An-", "Dys-", "Brady-", "Tachy-", "Inter-", "Intra-", "Sub-", "Supra-", "Anti-", "Bi-", "Di-", "Eu-", "Hyper-", "Pan-"],
        root: ["Nephr/o", "Cardi/o", "Neur/o", "Derm/o", "Oste/o", "My/o", "Aden/o", "Cephal/o", "Gastr/o", "Hepat/o", "Arthr/o", "Col/o", "Leuk/o", "Erythr/o", "Cyt/o", "Path/o", "Rhin/o", "Gloss/o"],
        suffix: ["-ectomy", "-oma", "-logy", "-plasty", "-algia", "-rrhea", "-osis", "-pathy", "-itis", "-gram", "-scopy", "-stomy", "-cele", "-cyte", "-emia", "-genesis", "-lysis", "-malacia", "-penia", "-ptosis", "-sclerosis"]
    };

    // --- Game State Variables ---
    let currentTermIndex = -1;
    let currentTerm;
    let correctCount = 0;
    let incorrectCount = 0;
    let selectedPrefix = null;
    let selectedRoot = null;
    let selectedSuffix = null;

    // --- DOM Element References ---
    const definitionTextEl = document.getElementById('definition-text');
    const prefixOptionsEl = document.getElementById('prefix-options');
    const rootOptionsEl = document.getElementById('root-options');
    const suffixOptionsEl = document.getElementById('suffix-options');
    const checkButtonEl = document.getElementById('check-button');
    const feedbackTextEl = document.getElementById('feedback-text');
    const correctCountEl = document.getElementById('correct-count');
    const incorrectCountEl = document.getElementById('incorrect-count');
    const correctAnswerAreaEl = document.getElementById('correct-answer-area');
    const correctTermEl = document.getElementById('correct-term');
    const correctBreakdownEl = document.getElementById('correct-breakdown');
    const nextButtonEl = document.getElementById('next-button');

    // --- Check if medicalTerms data is loaded ---
    if (typeof medicalTerms === 'undefined' || !Array.isArray(medicalTerms) || medicalTerms.length === 0) {
        console.error("Error: medicalTerms data not found or is empty. Make sure terms.js is loaded correctly before game.js.");
        if(definitionTextEl) definitionTextEl.textContent = "Error loading terms. Please check console (F12).";
        if(checkButtonEl) checkButtonEl.disabled = true;
        return;
    }

    // --- Utility Functions ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Get unique distractors, excluding the correct part AND null values from the pool
    function getUniqueDistractors(category, correctPart, count) {
        let availableDistractors = distractors[category].filter(d => d !== correctPart && d !== null);
        shuffleArray(availableDistractors);
        return availableDistractors.slice(0, count);
    }

    // *** UPDATED generateOptions function ***
    function generateOptions(category, correctPart) {
        // Always start with the correct part (even if it's null)
        let options = [correctPart];

        // Need 2 distractors
        let neededDistractors = 2;
        let uniqueDistractors = getUniqueDistractors(category, correctPart, neededDistractors);
        options = options.concat(uniqueDistractors);

        // If we *still* don't have 3 options (e.g., pool was too small), pad with null.
        // This case is less likely now but good for safety.
        // Make sure not to add null if it was already the correct part AND we found 2 distractors.
         while (options.length < 3) {
            // Only add null if it's not already the correct answer included in the list
            if (!options.includes(null)) {
                 options.push(null);
            } else {
                // Fallback: if correct was null and we couldn't find 2 distractors,
                // we might need to duplicate a distractor or handle this case differently.
                // For now, let's break to avoid infinite loops if pool is tiny.
                // A better approach might be to add placeholder strings if the pool is exhausted.
                 break;
            }
        }

        // Ensure exactly 3 options in the end
        options = options.slice(0, 3);

        // Final check: if somehow we ended up with less than 3, pad remaining with null
        // (This addresses edge cases with very small distractor pools)
         while (options.length < 3) {
             options.push(null);
         }


        return shuffleArray(options); // Shuffle the final options list
    }
    // **************************************

    function displayOptions(container, options, category) {
        if (!container) return;
        container.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            const displayValue = option === null ? "---" : option;
            button.textContent = displayValue;
            button.dataset.value = option === null ? 'null' : option;
            button.onclick = (event) => selectOption(category, option, event.currentTarget, container);
            container.appendChild(button);
        });
    }

    function selectOption(category, value, buttonEl, container) {
         if (!container) return;
        const buttons = container.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('selected'));
        buttonEl.classList.add('selected');
        const storedValue = value;
        if (category === 'prefix') selectedPrefix = storedValue;
        else if (category === 'root') selectedRoot = storedValue;
        else if (category === 'suffix') selectedSuffix = storedValue;
    }


    // --- Core Game Functions ---

    function loadNewTerm() {
        selectedPrefix = null;
        selectedRoot = null;
        selectedSuffix = null;
        if(feedbackTextEl) feedbackTextEl.textContent = '';
        if(feedbackTextEl) feedbackTextEl.className = '';
        if(correctAnswerAreaEl) correctAnswerAreaEl.style.display = 'none';
        if(checkButtonEl) checkButtonEl.disabled = false;

        let newIndex;
        if (medicalTerms.length <= 1) {
            newIndex = 0;
        } else {
             do {
                newIndex = Math.floor(Math.random() * medicalTerms.length);
            } while (newIndex === currentTermIndex);
        }
        currentTermIndex = newIndex;
        currentTerm = medicalTerms[currentTermIndex];

        if(definitionTextEl) definitionTextEl.textContent = currentTerm.definition;

        displayOptions(prefixOptionsEl, generateOptions('prefix', currentTerm.prefix.part), 'prefix');
        displayOptions(rootOptionsEl, generateOptions('root', currentTerm.root.part), 'root');
        displayOptions(suffixOptionsEl, generateOptions('suffix', currentTerm.suffix.part), 'suffix');

        [prefixOptionsEl, rootOptionsEl, suffixOptionsEl].forEach(container => {
            if(container) {
                container.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
            }
        });
    }

    function checkAnswer() {
        if (!currentTerm) return;

        const correctPrefix = currentTerm.prefix.part;
        const correctRoot = currentTerm.root.part;
        const correctSuffix = currentTerm.suffix.part;

        const isCorrect =
            (selectedPrefix === correctPrefix) &&
            (selectedRoot === correctRoot) &&
            (selectedSuffix === correctSuffix);

        if (isCorrect) {
            if(feedbackTextEl) {
                feedbackTextEl.textContent = "Correct!";
                feedbackTextEl.className = 'correct';
            }
            correctCount++;
            if(correctCountEl) correctCountEl.textContent = correctCount;
        } else {
             if(feedbackTextEl) {
                feedbackTextEl.textContent = "Incorrect.";
                feedbackTextEl.className = 'incorrect';
             }
            incorrectCount++;
            if(incorrectCountEl) incorrectCountEl.textContent = incorrectCount;
        }

        showCorrectAnswer();
        if(checkButtonEl) checkButtonEl.disabled = true;
    }

    function showCorrectAnswer() {
        if (!currentTerm || !correctTermEl || !correctBreakdownEl || !correctAnswerAreaEl) return;

        correctTermEl.textContent = currentTerm.term;
        let breakdownParts = [
            currentTerm.prefix.part,
            currentTerm.root.part,
            currentTerm.suffix.part
        ];
        let breakdown = breakdownParts
                        .filter(part => part !== null)
                        .join(' + ');
        correctBreakdownEl.textContent = breakdown || "[No parts identified]";
        correctAnswerAreaEl.style.display = 'block';
    }


    // --- Event Listeners ---
    if(checkButtonEl) checkButtonEl.addEventListener('click', checkAnswer);
    if(nextButtonEl) nextButtonEl.addEventListener('click', loadNewTerm);


    // --- Initial Game Load ---
    if(correctCountEl) correctCountEl.textContent = correctCount;
    if(incorrectCountEl) incorrectCountEl.textContent = incorrectCount;
    loadNewTerm();

}); // End of DOMContentLoaded listener