const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");
finalScore.innerText = mostRecentScore;
const myScore = parseInt(mostRecentScore);


let result1 = "Nice try! There's definitely space for improvement though. Take a look at the Library for new vacation destinations and discover the world.";
let result2 = "Well done! You have recognized a lot of our landmarks! Take a look at the Library to add somew new destination ideas to your travel-list.";
let result3 = "You did great! You know our landmarks well. If this was too easy for you, do not hesitate to leave me recommendations for unusual but recognizeable landmarks in the Contact form.";

function displayResult() {
    if (myScore <= 10) {
        return result1;
    } else if (myScore > 10 || myScore <= 22) {
        return result2;
    } else {
        return result3;
    };
};

const result = document.getElementById("result");
result.innerText = displayResult(); 