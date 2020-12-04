const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// my custom array of objects

let questions = [
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/zNd7tCw/Artists-Palette-Furnace-Creek-USA.jpg">`,
        choice1: "Rainbow Mountain, Cusco, Peru",
        choice2: "Artists Palette, Furnace Creek, USA",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/PYGrFrr/Auckland-New-Zealand.jpg">`,
        choice1: "Auckland, New Zealand",
        choice2: "Toronto, Canada",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/0D9q30s/Cape-Town-landscape.jpg">`,
        choice1: "Algarve, Portugal",
        choice2: "Cape Town, South Africa",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/Y2C5Vy8/Chocolate-Hills-Bohol-Island-Philippines.jpg">`,
        choice1: "Green Hills of Albay, Philippines",
        choice2: "Chocolate Hills, Bohol Island, Philippines",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/5x75Tvw/Faroe-Island-Denmark.jpg">`,
        choice1: "Faroe Island, Denmark",
        choice2: "Gullfoss, Iceland",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/ydrKtLN/Goblin-Valley-Utah-USA.jpg">`,
        choice1: "Goblin Valley, Utah, USA",
        choice2: "Canyon de Chelly, Arizona, USA",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/vzhVrZS/Golden-Bridge-Ba-Na-Hills-Vietnam.jpg">`,
        choice1: "Skywalk & Eagle Point, Grand Canyon, USA ",
        choice2: "Golden Bridge, Ba Na Hills, Vietnam",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/61SHsdS/Havana-Cuba.jpg">`,
        choice1: "Monte Video, Urugay",
        choice2: "Havana, Cuba",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/5sQgVBG/Grand-Canyon-USA.jpg">`,
        choice1: "Grand Canyon, Arizona, USA",
        choice2: "Kings Canyon, Australia",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/z65ZQRW/Iceland-landscape.jpg">`,
        choice1: "Jökulsárgljúfur, Iceland",
        choice2: "Waimea Canyon, Hawaii",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/1MG9cPH/Lencois-Maranhenses-Brazil3.jpg">`,
        choice1: "Lencois Maranhenses, Brazil",
        choice2: "Bahariya White Desert, Egypt",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/bQgSMNF/Province-of-Matera-Italy.jpg">`,
        choice1: "Taormina, Sicily, Italy",
        choice2: "Province of Matera, Italy",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/d7QNqb9/El-Nido-landscape.jpg">`,
        choice1: "Ha Long Bay, Vietnam",
        choice2: "Maya Bay, Ko Phi Phi, Thailand",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/wLTkNtR/Nairobi-Kenya.jpg">`,
        choice1: "Nairobi, Kenya",
        choice2: "Antananarivo, Madagaskar",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/Zd8FRdN/Petra-Jordan.jpg">`,
        choice1: "Petra, Jordan",
        choice2: "Valley of the Kings, Egypt",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/42zQYBx/Edinburgh-United-Kingdom.jpg">`,
        choice1: "Antwerpen, Belgium",
        choice2: "Edinburgh, United Kingdom",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/TDGSNhC/Lake-Cadagno-Switzerland.jpg">`,
        choice1: "Lake Cadagno, Switzerland",
        choice2: "Lake Garda, Italy",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/9w3P3gj/Prague-Check-Rep.jpg">`,
        choice1: "London, United Kingdom",
        choice2: "Prague, Check Republic",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/ygDVSFv/Rainbow-Mountain-Cusco-Peru.jpg">`,
        choice1: "Rainbow Mountain, Cusco, Peru",
        choice2: "Mountains of Tabriz, Iran",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/wcD37F2/Raquira-Colombia.jpg">`,
        choice1: "Buenos Aires, Argentina",
        choice2: "Raquira, Colombia",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/0rk87kh/Lapland-Finland-landscape.jpg">`,
        choice1: "Riga, Latvia",
        choice2: "Rovaniemi, Finland",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/dKRHt9z/Sao-Paulo-Brazil.jpg">`,
        choice1: "Sao Paulo, Brazil",
        choice2: "New York, USA",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/crr50xJ/Giant-s-Causeway-landscape.jpg">`,
        choice1: "Beach of the Cathedrals, Galicia, Spain",
        choice2: "The Giant's Causeway, Ireland",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/zNpc1Xw/Kyoto-Japan.jpg">`,
        choice1: "Kiyozumi Dera, Kyoto, Japan",
        choice2: "Osaka, Japan",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/q1qZ5dT/Tiger-s-Nest-Bhutan.jpg">`,
        choice1: "Kioto, Japan",
        choice2: "Tiger's Nest, Bhutan",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/N2tnfX5/Trondheim-Norway.jpg">`,
        choice1: "Trondheim, Norway",
        choice2: "Copenhagen, Denmark",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/k2wdmbN/Tyrol-Italy.jpg">`,
        choice1: "Tyrol, Italy",
        choice2: "Himalayas, Nepal",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/CmJ7Brp/Taj-Mahal.jpg">`,
        choice1: "Blue Mosque, Istanbul, Turkey",
        choice2: "Taj Mahal, India",
        answer: 2,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/t2V8Djz/Vakil-Mosque-Shiraz-Iran.jpg">`,
        choice1: "Vakil Mosque, Shiraz, Iran",
        choice2: "Al-Aqsa Mosque, Jerusalem, Israel",
        answer: 1,
    },
    {
        question: document.getElementById("question").innerHTML = `<img id="image" src="https://i.ibb.co/phR43Tn/Zhangjiajie-Huaihua-China.jpg">`,
        choice1: "Iao Valley, Maui",
        choice2: "Zhangjiajie, Huaihua, China",
        answer: 2,
    },
];

// quiz structure from James Q. Quick, see Credits

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 30;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();