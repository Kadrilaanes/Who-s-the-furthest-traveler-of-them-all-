const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: document.getElementById("question").src = "https://i.ibb.co/zNd7tCw/Artists-Palette-Furnace-Creek-USA.jpg",
        choice1: "Rainbow Mountain, Cusco, Peru",
        choice2: "Artists Palette, Furnace Creek, USA",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/PYGrFrr/Auckland-New-Zealand.jpg",
        choice1: "Auckland, New Zealand",
        choice2: "Toronto, Canada",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/0ZXxq6k/Cape-Town-South-Africa.jpg",
        choice1: "Algarve, Portugal",
        choice2: "Cape Town, South Africa",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/Y2C5Vy8/Chocolate-Hills-Bohol-Island-Philippines.jpg",
        choice1: "Green Hills of Albay, Philippines",
        choice2: "Chocolate Hills, Bohol Island, Philippines",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/gFnDywh/Faroe-Island-Denmark.jpg",
        choice1: "Faroe Island, Denmark",
        choice2: "Gullfoss, Iceland",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/ydrKtLN/Goblin-Valley-Utah-USA.jpg",
        choice1: "Goblin Valley, Utah, USA",
        choice2: "Canyon de Chelly, Arizona, USA",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/vzhVrZS/Golden-Bridge-Ba-Na-Hills-Vietnam.jpg",
        choice1: "Skywalk & Eagle Point, Grand Canyon, USA ",
        choice2: "Golden Bridge, Ba Na Hills, Vietnam",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/vBp9crM/Hand-of-the-Desert-Chile.jpg",
        choice1: "Patagonia, Arentina",
        choice2: "Atacama Desert, Chile",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/5sQgVBG/Grand-Canyon-USA.jpg",
        choice1: "Grand Canyon, Arizona, USA",
        choice2: "Kings Canyon, Australia",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/cDHF31Y/Iceland.jpg",
        choice1: "Jökulsárgljúfur, Iceland",
        choice2: "Waimea Canyon, Hawaii",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/1MG9cPH/Lencois-Maranhenses-Brazil3.jpg",
        choice1: "Lencois Maranhenses, Brazil",
        choice2: "Bahariya White Desert, Egypt",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/ZHx0Hj2/Manarola-Italy.jpg",
        choice1: "Taormina, Sicily, Italy",
        choice2: "Manarola, Italy",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/Scnhfr9/Maya-Bay-Ko-Phi-Phi-Thailand.jpg",
        choice1: "Ha Long Bay, Vietnam",
        choice2: "Maya Bay, Ko Phi Phi, Thailand",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/wLTkNtR/Nairobi-Kenya.jpg",
        choice1: "Nairobi, Kenya",
        choice2: "Antananarivo, Madagaskar",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/B4h0fKG/Pamukkale-Turkey.jpg",
        choice1: "Parmukkale, Turkey",
        choice2: "White Sands National Park, New Mexico, USA",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/dKHr3T2/Paris-France.jpg",
        choice1: "Antwerpen, Belgium",
        choice2: "Paris, France",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/FnRsx9V/Pena-Palace-Sintra-Portugal.jpg",
        choice1: "Pena Palace, Sintra, Portugal",
        choice2: "Belem Tower, Lissabon, Portugal",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/9w3P3gj/Prague-Check-Rep.jpg",
        choice1: "London, United Kingdom",
        choice2: "Prague, Check Republic",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/ygDVSFv/Rainbow-Mountain-Cusco-Peru.jpg",
        choice1: "Rainbow Mountain, Cusco, Peru",
        choice2: "Mountains of Tabriz, Iran",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/TWzp1xN/Raquira-Colombia.jpg",
        choice1: "Buenos Aires, Argentina",
        choice2: "Raquira, Colombia",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/865V9vm/Rovaniemi-Finland.jpg",
        choice1: "Riga, Latvia",
        choice2: "Rovaniemi, Finland",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/X7VPbz4/Sao-Paulo-Brazil.jpg",
        choice1: "Sao Paulo, Brazil",
        choice2: "New York, USA",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/DMpJRFs/The-Giant-s-Causeway-North-Ireland.jpg",
        choice1: "Beach of the Cathedrals, Galicia, Spain",
        choice2: "The Giant's Causeway, Ireland",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/CHg1J7q/Tibidabo-Barcelona.jpg",
        choice1: "Temple of the Sacred Heart of Jesus, Tibidabo, Barcelona",
        choice2: "Sagrada Familia, Barcelona",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/Xsbg1mj/Toronto-Canada.jpg",
        choice1: "Tallinn, Estonia",
        choice2: "Toronto, Canada",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/N2tnfX5/Trondheim-Norway.jpg",
        choice1: "Trondheim, Norway",
        choice2: "Copenhagen, Denmark",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/k2wdmbN/Tyrol-Italy.jpg",
        choice1: "Tyrol, Italy",
        choice2: "Himalayas, Nepal",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/sVs6JNV/Uch-Sharif-Pakistan.jpg",
        choice1: "Blue Mosque, Istanbul, Turkey",
        choice2: "Uch Sharif, Pakistan",
        answer: 2,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/t2V8Djz/Vakil-Mosque-Shiraz-Iran.jpg",
        choice1: "Vakil Mosque, Shiraz, Iran",
        choice2: "Al-Aqsa Mosque, Jerusalem, Israel",
        answer: 1,
    },
     {
        question: document.getElementById("question").src = "https://i.ibb.co/phR43Tn/Zhangjiajie-Huaihua-China.jpg",
        choice1: "Iao Valley, Maui",
        choice2: "Zhangjiajie, Huaihua, China",
        answer: 2,
    },
];

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
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

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
        getNewQuestion();
    });
});

startGame();