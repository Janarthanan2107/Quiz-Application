'use strict';
//inputs
const optionElements = document.querySelectorAll('.option');
const optionOne = document.getElementById("option-one")
const optionTwo = document.getElementById("option-two")
const optionThree = document.getElementById("option-three")
const optionFour = document.getElementById("option-four")
//outputs
const question = document.getElementById("question")
const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")

//functions
const init = () => { questionOne() }

const questionOne = () => {
    question.innerText = "What is the capital of Brazil?";
    optionOne.innerText = "Rio de Janeiro";
    optionTwo.innerText = "São Paulo";
    optionThree.innerText = "Brasília";
    optionFour.innerText = "Buenos Aires";

    leftBtn.style.opacity = 0.6;
    leftBtn.style.cursor = "not-allowed"

    leftBtn.disabled = true;
}

const questionTwo = () => {
    question.innerText = "Which river is the largest in the world?";
    optionOne.innerText = "Nile River";
    optionTwo.innerText = "Amazon River";
    optionThree.innerText = "Yangtze River";
    optionFour.innerText = "Mississippi River";

    leftBtn.style.opacity = 1;
    leftBtn.style.cursor = "pointer"

    leftBtn.disabled = false;
}

const questionThree = () => {
    question.innerText = "Which desert is the largest in the world?";
    optionOne.innerText = "Sahara Desert";
    optionTwo.innerText = "Arabian Desert";
    optionThree.innerText = "Gobi Desert";
    optionFour.innerText = "Antarctic Desert";
}

const questionFour = () => {
    question.innerText = "Mount Everest, the world's highest peak, is located in which mountain range?";
    optionOne.innerText = "Andes";
    optionTwo.innerText = "Himalayas";
    optionThree.innerText = "Rocky Mountains";
    optionFour.innerText = "Alps";
}

const questionFive = () => {
    question.innerText = "Which country is the largest producer of coffee in the world?";
    optionOne.innerText = "Colombia";
    optionTwo.innerText = "Brazil";
    optionThree.innerText = "Vietnam";
    optionFour.innerText = "Ethiopia";
}

const questionSix = () => {
    question.innerText = "Which European city is known as the 'City of Canals'?";
    optionOne.innerText = "Venice";
    optionTwo.innerText = "Amsterdam";
    optionThree.innerText = "Copenhagen";
    optionFour.innerText = "Bruges";
}

const questionSeven = () => {
    question.innerText = "The Great Barrier Reef, one of the world's most extensive coral reef systems, is located off the coast of which country?";
    optionOne.innerText = "Australia";
    optionTwo.innerText = "Indonesia";
    optionThree.innerText = "Belize";
    optionFour.innerText = "Brazil";
}

const questionEight = () => {
    question.innerText = "Which African country is known as the 'Land of a Thousand Hills'?";
    optionOne.innerText = "Rwanda";
    optionTwo.innerText = "Kenya";
    optionThree.innerText = "Tanzania";
    optionFour.innerText = "Uganda";
}

const questionNine = () => {
    question.innerText = "The city of Istanbul is located in two continents. Which continents are they?";
    optionOne.innerText = "Asia and Europe";
    optionTwo.innerText = "Europe and Africa";
    optionThree.innerText = "Asia and Africa";
    optionFour.innerText = "Asia and Australia";

    rightBtn.style.opacity = 1;
    rightBtn.style.cursor = "pointer"

    rightBtn.disabled = false;
}

const questionTen = () => {
    question.innerText = "Machu Picchu, an ancient Incan citadel, is located in which country?";
    optionOne.innerText = "Peru";
    optionTwo.innerText = "Mexico";
    optionThree.innerText = "Bolivia";
    optionFour.innerText = "Chile";

    rightBtn.style.opacity = 0.6;
    rightBtn.style.cursor = "not-allowed"

    rightBtn.disabled = true;
}

let questionCount = 1;
let scoreCount = null;

//events
rightBtn.addEventListener("click", () => {
    console.log(questionCount += 1)
    clearSelection()

    switch (questionCount) {
        case 1:
            questionOne();
            break;
        case 2:
            questionTwo();
            break;
        case 3:
            questionThree();
            break;
        case 4:
            questionFour();
            break;
        case 5:
            questionFive();
            break;
        case 6:
            questionSix();
            break;
        case 7:
            questionSeven();
            break;
        case 8:
            questionEight();
            break;
        case 9:
            questionNine();
            break;
        case 10:
            questionTen();
            break;
    }
})

leftBtn.addEventListener("click", () => {
    questionCount -= 1

    switch (questionCount) {
        case 1:
            questionOne();
            break;
        case 2:
            questionTwo();
            break;
        case 3:
            questionThree();
            break;
        case 4:
            questionFour();
            break;
        case 5:
            questionFive();
            break;
        case 6:
            questionSix();
            break;
        case 7:
            questionSeven();
            break;
        case 8:
            questionEight();
            break;
        case 9:
            questionNine();
            break;
        case 10:
            questionTen();
            break;
    }

})

const handleOptionSelection = (selectedOptionId) => {
    console.log(selectedOptionId)
    optionElements.forEach(option => {
        if (option.id === selectedOptionId) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    })
}

optionElements.forEach(option => {
    option.addEventListener('click', () => {
        console.log(option.id)
        const selectedOptionId = option.id;
        handleOptionSelection(selectedOptionId)

        // if (selectedOptionId === "option-one") {
        //     console.log(`Score is:${scoreCount += 1}`)
        // }

        switch (selectedOptionId) {
            case "option-one":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
            case "option-two":
                console.log(`Score is:${scoreCount += 1}`);
                break;
        }
    })
})

function clearSelection() {
    optionElements.forEach(option => {
        option.classList.remove('selected');
    });
}

submit.addEventListener("click", () => {
    alert(`Your Score out of 10 is ${scoreCount}`)
})

reset.addEventListener("click", () => {
    location.reload();
})


//initial settings
init();
