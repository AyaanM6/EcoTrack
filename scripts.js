var questionBank = {
    "How many single-use plastics did you use today?": {"0-3":20,"3-5":15,"5-7":5,"7+":0},
    "Did you use public transportation, carpool, bike, or walk instead of driving alone today?": {"yes":20,"no":0}, 
    "How much electricity did you use today? (Low/Medium/High)": {"Low":20,"Medium":10,"High":0},
    "Did you remember to turn off lights and appliances when not in use?": {"yes":20,"no":0}, 
    "How many vegetarian or plant-based meals did you have today?": {"0":0,"1":5,"2":15,"3 or 3+":20},
    "Did you recycle all the recyclable materials you used today?": {"yes":20,"no":0}, 
    "Did you bring a reusable water bottle or coffee cup with you today?": {"yes":20,"no":0}, 
    "How much water did you consume today? (Low/Medium/High)": {"Low":20,"Medium":10,"High":0},
    "Did you participate in any energy-saving practices today, such as using a programmable thermostat?": {"yes":20,"no":0}, 
    "How many items did you buy secondhand or borrow instead of purchasing new today?": {"0":0,"1-3":5,"3-5":15,"5+":20},
    "Did you reduce your paper usage by opting for digital communication and notes?": {"yes":20,"no":0}, 
    "Did you consciously avoid wasting food by eating leftovers or planning meals?": {"yes":20,"no":0}, 
    "How much time did you spend outdoors enjoying nature today?": {"0":0,"1-3":5,"3-5":15,"5+":20},
    "Did you avoid excessive packaging by choosing products with minimal packaging?": {"yes":20,"no":0},
    "How many fruits did you buy that are exported from other countries (ie bananas are from hot, tropical environments)": {"0":20,"1-3":15,"3-5":5,"5++":0},
    "For items bought online, do you select fast or regular shipping?": {"regular":20,"fast":0},
    }

// questionSelection = []

// function getQuestionsRandom()
// {
//     var num=-1
//     for(let i=0; i<5 ;i++)
//     {
//         do{
//             num = Math.floor(Math.random()*Object.keys(questionBank).length)
//         }while(questionSelection.includes(num))
//         questionSelection.push(num)
//     }
// }

// var questionCounter=0
// function questionText(question)
// {
//     question.innerHTML = questionSelection[questionCounter]
//     questionCounter++
// }
// getQuestionsRandom()
// questionSelection.foreach(num=>console.log(num))
// //questionBank.forEach(question => console.log(question))

// // var questions = document.querySelectorAll(".question")
// // questions.forEach(question => questionText(question))



function getRandomQuestions(questions,count)
{
    var keys = []
    var key
    for(let i=0; i<count ;i++)
    {
        do{
            key = Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)]
        }while(keys.includes(key))
        keys.push(key)
    }
    return keys
}

function addOptionButton(questionBody, question, option)
{

    var button = document.createElement('input')
    button.type = "radio"
    button.name = "question"+(questionCounter)
    button.value = questionBank[question][option]

    var textbox = document.createElement("p")
    textbox.textContent = Object.keys(questionBank[question])[optionCounter]
    
    textbox.appendChild(button)
    questionBody.appendChild(textbox)
    optionCounter++
    
}
var optionCounter=0
var questionCounter=0
function generateOptions(questionBody,question)
{
    optionCounter=0
    var options = Object.keys(questionBank[question])
    console.log(options)
    options.forEach(option => addOptionButton(questionBody, question, option))
}

function generateQuestion(question)
{
    var questionBody = document.createElement("div")
    questionBody.innerHTML = question
    generateOptions(questionBody,question)
    questionnaire.appendChild(questionBody)
    questionCounter++
}
function generateQuestions()
{
    const selectedQuestions = getRandomQuestions(questionBank,5)
    selectedQuestions.forEach(question => generateQuestion(question))
}

// function calculateScore() 
// {
//     var score = 0;
//     for (var question in questionBank) {
//         var selectedValue = document.querySelector(input[name="${question}"]:checked);
//         if (selectedValue) {
//             score += questionBank[question][selectedValue.value];
//         }
// }

// return score;
// }

// function displayScore() 
// {
//     var score = calculateScore();
//     var resultElement = document.getElementById('result');
//     resultElement.textContent = "Your score is: ${score}";
// }

const questionnaire= document.getElementById('questionnaire')
generateQuestions();

// var submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', displayScore);