// 1. क्विज़ के प्रश्न और उत्तर का डेटा (पहले 103 तत्व)
const allElements = [
    { symbol: "H", name: "हाइड्रोजन" }, { symbol: "He", name: "हीलियम" },
    { symbol: "Li", name: "लिथियम" }, { symbol: "Be", name: "बेरिलियम" },
    { symbol: "B", name: "बोरॉन" }, { symbol: "C", name: "कार्बन" },
    { symbol: "N", name: "नाइट्रोजन" }, { symbol: "O", name: "ऑक्सीजन" },
    { symbol: "F", name: "फ्लोरीन" }, { symbol: "Ne", name: "नियॉन" },
    { symbol: "Na", name: "सोडियम" }, { symbol: "Mg", name: "मैग्नीशियम" },
    { symbol: "Al", name: "एल्युमीनियम" }, { symbol: "Si", "name": "सिलिकॉन" },
    { symbol: "P", name: "फॉस्फोरस" }, { symbol: "S", name: "सल्फर" },
    { symbol: "Cl", name: "क्लोरीन" }, { symbol: "Ar", name: "आर्गन" },
    { symbol: "K", name: "पोटेशियम" }, { symbol: "Ca", name: "कैल्शियम" },
    { symbol: "Sc", name: "स्कैंडियम" }, { symbol: "Ti", name: "टाइटेनियम" },
    { symbol: "V", name: "वैनेडियम" }, { symbol: "Cr", name: "क्रोमियम" },
    { symbol: "Mn", name: "मैंगनीज" }, { symbol: "Fe", name: "आयरन (लोहा)" },
    { symbol: "Co", name: "कोबाल्ट" }, { symbol: "Ni", name: "निकेल" },
    { symbol: "Cu", name: "कॉपर (तांबा)" }, { symbol: "Zn", name: "जिंक" },
    { symbol: "Ga", name: "गैलियम" }, { symbol: "Ge", name: "जर्मेनियम" },
    { symbol: "As", name: "आर्सेनिक" }, { symbol: "Se", name: "सेलेनियम" },
    { symbol: "Br", name: "ब्रोमीन" }, { symbol: "Kr", name: "क्रिप्टन" },
    { symbol: "Rb", name: "रुबिडियम" }, { symbol: "Sr", name: "स्ट्रोंटियम" },
    { symbol: "Y", name: "येट्रियम" }, { symbol: "Zr", name: "जिरकोनियम" },
    { symbol: "Nb", name: "नियोबियम" }, { symbol: "Mo", name: "मोलिब्डेनम" },
    { symbol: "Tc", name: "टेक्नीशियम" }, { symbol: "Ru", name: "रुथेनियम" },
    { symbol: "Rh", name: "रोडियम" }, { symbol: "Pd", name: "पैलेडियम" },
    { symbol: "Ag", name: "सिल्वर (चांदी)" }, { symbol: "Cd", name: "कैडमियम" },
    { symbol: "In", name: "इंडियम" }, { symbol: "Sn", name: "टिन" },
    { symbol: "Sb", name: "एंटीमनी" }, { symbol: "Te", name: "टेल्यूरियम" },
    { symbol: "I", name: "आयोडीन" }, { symbol: "Xe", name: "ज़ेनॉन" },
    { symbol: "Cs", name: "सीजियम" }, { symbol: "Ba", name: "बेरियम" },
    { symbol: "La", name: "लैंथेनम" }, { symbol: "Ce", name: "सीरियम" },
    { symbol: "Pr", name: "प्रसेओडीमियम" }, { symbol: "Nd", name: "नियोडीमियम" },
    { symbol: "Pm", name: "प्रोमेथियम" }, { symbol: "Sm", name: "समारियम" },
    { symbol: "Eu", name: "यूरोपियम" }, { symbol: "Gd", name: "गैडोलिनियम" },
    { symbol: "Tb", name: "टर्बियम" }, { symbol: "Dy", name: "डिस्प्रोसियम" },
    { symbol: "Ho", name: "होल्मियम" }, { symbol: "Er", name: "एर्बियम" },
    { symbol: "Tm", name: "थूलियम" }, { symbol: "Yb", name: "यिट्टरबियम" },
    { symbol: "Lu", name: "लutetium" }, { symbol: "Hf", name: "हाफनियम" },
    { symbol: "Ta", name: "टैंटलम" }, { symbol: "W", name: "टंगस्टन" },
    { symbol: "Re", name: "रेनियम" }, { symbol: "Os", name: "ओस्मियम" },
    { symbol: "Ir", name: "इरिडियम" }, { symbol: "Pt", name: "प्लैटिनम" },
    { symbol: "Au", name: "गोल्ड (सोना)" }, { symbol: "Hg", name: "मर्करी (पारा)" },
    { symbol: "Tl", name: "थैलियम" }, { symbol: "Pb", name: "लेड (सीसा)" },
    { symbol: "Bi", name: "बिस्मथ" }, { symbol: "Po", name: "पोलोनियम" },
    { symbol: "At", name: "एस्टेटीन" }, { symbol: "Rn", name: "रेडॉन" },
    { symbol: "Fr", name: "फ्रेंशियम" }, { symbol: "Ra", name: "रेडियम" },
    { symbol: "Ac", name: "एक्टिनियम" }, { symbol: "Th", name: "थोरियम" },
    { symbol: "Pa", name: "प्रोटैक्टिनियम" }, { symbol: "U", name: "यूरेनियम" },
    { symbol: "Np", name: "नेप्ट्यूनियम" }, { symbol: "Pu", name: "प्लूटोनियम" },
    { symbol: "Am", name: "अमेरिकियम" }, { symbol: "Cm", name: "क्यूरियम" },
    { symbol: "Bk", name: "बर्केलियम" }, { symbol: "Cf", name: "कैलिफ़ोर्नियम" },
    { symbol: "Es", name: "आइंस्टीनियम" }, { symbol: "Fm", name: "फर्मियम" },
    { symbol: "Md", name: "मेंडेलेवियम" }, { symbol: "No", name: "नोबेलियम" },
    { symbol: "Lr", name: "लॉरेंसियम" }
];

let questions = []; // क्विज़ के लिए रैंडम प्रश्न यहाँ संग्रहीत होंगे

const MAX_QUESTIONS = 10; // एक क्विज़ में प्रश्नों की संख्या

// 2. आवश्यक DOM तत्वों का चयन
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const retryButton = document.getElementById('retry-btn');
const quizContainer = document.getElementById('quiz');
const progressDisplay = document.getElementById('progress-display'); // प्रगति दिखाने के लिए

let currentQuestionIndex = 0;
let score = 0;


// एक सरणी (Array) को फेरबदल (Shuffle) करने का फ़ंक्शन (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// क्विज़ शुरू करने के लिए रैंडम प्रश्न तैयार करना और गेम को रीसेट करना
function initializeQuiz() {
    // 1. सभी तत्वों को मिलाएं
    shuffleArray(allElements);
    
    // 2. शीर्ष (MAX_QUESTIONS) तत्व चुनें
    const selectedElements = allElements.slice(0, MAX_QUESTIONS);
    
    // 3. प्रत्येक चुने हुए तत्व के लिए प्रश्न ऑब्जेक्ट बनाएं
    questions = selectedElements.map(correctElement => {
        const correctAnswer = correctElement.name;
        
        // गलत विकल्प (distractors) चुनने के लिए: डेटाबेस से अन्य तत्वों का चयन करें
        const wrongOptions = allElements
            .filter(el => el.name !== correctAnswer)
            .map(el => el.name);
            
        // गलत विकल्पों को मिलाएं और 3 चुनें
        shuffleArray(wrongOptions);
        const distractors = wrongOptions.slice(0, 3); 
        
        const allOptions = [correctAnswer, ...distractors];
        shuffleArray(allOptions); // विकल्पों को भी मिलाएं
        
        return {
            symbol: correctElement.symbol,
            question: `प्रतीक '${correctElement.symbol}' किस तत्व का है?`,
            options: allOptions,
            answer: correctAnswer
        };
    });

    currentQuestionIndex = 0;
    score = 0;
    
    // UI को रीसेट करें
    resultElement.classList.add('hide');
    quizContainer.classList.remove('hide');

    displayQuestion(); // पहला प्रश्न प्रदर्शित करें
}


// 3. प्रश्न प्रदर्शित करने का फ़ंक्शन
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }
    
    // प्रगति (Progress) दिखाएँ
    progressDisplay.textContent = `प्रश्न ${currentQuestionIndex + 1} / ${questions.length}`;

    const currentQuestion = questions[currentQuestionIndex];
    
    // प्रश्न अपडेट करें
    questionElement.textContent = currentQuestion.question;
    
    // विकल्प खाली करें और नए विकल्प प्रदर्शित करें
    optionsElement.innerHTML = ''; 
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        // बटन पर क्लिक इवेंट जोड़ें
        button.addEventListener('click', () => checkAnswer(button, option, currentQuestion.answer));
        optionsElement.appendChild(button);
    });
}

// 4. उत्तर जांचने का फ़ंक्शन
function checkAnswer(selectedButton, selectedOption, correctAnswer) {
    // 1. सभी विकल्पों को निष्क्रिय (disable) करें
    Array.from(optionsElement.children).forEach(button => {
        button.disabled = true;
    });

    // 2. सही/गलत उत्तरों को स्टाइल करें
    if (selectedOption === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
        // सही उत्तर को भी दिखाएँ
        Array.from(optionsElement.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    // 3. अगले प्रश्न पर जाने के लिए थोड़ा इंतज़ार करें
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500); // 1.5 सेकंड (1500 मिलीसेकंड) का विलंब
}

// 5. परिणाम प्रदर्शित करने का फ़ंक्शन
function showResult() {
    quizContainer.classList.add('hide'); // क्विज़ को छिपाएँ
    resultElement.classList.remove('hide'); // परिणाम दिखाएँ
    
    const percentage = (score / questions.length) * 100;
    
    scoreDisplay.textContent = `${score} / ${questions.length} (${percentage.toFixed(0)}%)`;
}

// 6. फिर से खेलने का फ़ंक्शन
retryButton.addEventListener('click', () => {
    initializeQuiz(); // क्विज़ को पुनः आरंभ करें
});

// 7. गेम शुरू करें
initializeQuiz();