var questionBank = {
    "How many single-use plastics did you use today?": {"0-3":20,"3-5":15,"5-7":5,"7+":0},
    "Did you use public transportation, carpool, bike, or walk instead of driving alone today?": {"yes":20,"no":0}, 
    "How much electricity did you use today?": {"Low":20,"Medium":10,"High":0},
    "Did you remember to turn off lights and appliances when not in use?": {"yes":20,"no":0}, 
    "How many vegetarian or plant-based foods did you have today?": {"0":0  ,"1":5,"2":10,"3":15, "3+":20},
    "Did you recycle all the recyclable materials you used today?": {"yes":20,"no":0}, 
    "Did you bring a reusable water bottle or coffee cup with you today?": {"yes":20,"no":0}, 
    "How much water did you use today?": {"Low":20,"Medium":10,"High":0},
    "Did you participate in any energy-saving practices today, such as using cold water for laundry?": {"yes":20,"no":0}, 
    "How many items did you buy secondhand or borrow instead of purchasing new today?": {"0":0,"1-3":5,"3-5":15,"5+":20},
    "Did you reduce your paper usage by opting for digital communication and notes?": {"yes":20,"no":0}, 
    "Did you consciously avoid wasting food by eating leftovers or meal planning?": {"yes":20,"no":0}, 
    "How many hours have you spent outdoors enjoying nature today?": {"0":0,"1-3":5,"3-5":15,"5+":20},
    "Did you avoid excessive packaging by choosing products with minimal packaging?": {"yes":20,"no":0},
    "How many fruits did you buy that are exported from other countries?": {"0":20,"1-3":15,"3-5":5,"5+":0},
    "For items bought online, do you select fast or regular shipping?": {"regular":20,"fast":0},
    }

var feedBackBank = {
    "How many single-use plastics did you use today?": "Make sure to use re-usuable plastic bags as plastic will only start degrading after 700 years and will only fully degrade in 1000 years. This means that all the plastic that has ever been produced has not degraded yet.",
    "Did you use public transportation, carpool, bike, or walk instead of driving alone today?": "Instead of driving, walking, biking or even using public transportation can help save the environment. Compared with driving alone, taking public transportation reduces CO2 emissions by 45%, decreasing pollutants in the atmosphere and improving air quality.",
    "How much electricity did you use today?": "Make sure to try and conserve as much energy as possible. The demand for more power and electricity in turn means more demand for fossil fuels which pollutes and atmosphere and negatively affects the environment as well",
    "Did you remember to turn off lights and appliances when not in use?": "Don't forget to turn off your lights! Remember that even if you are not there, electricity and power could still be being used! This means that you are demanding more power even when you are not using it. This results in more demand for fossil fuels which negatively affects our atmosphere",
    "How many vegetarian or plant-based foods did you have today?": "Choosing plant-based foods can reduce your own carbon footprint by a lot as the natural resources required to produce animal food is a lot. While on the other hand, plant-based foods require significantly fewer resources and produce less greenhouse gases.",
    "Did you recycle all the recyclable materials you used today?": "Make sure to properly recycle! Recycling your things is a great way to reuse materials instead of extracting new owns and creating a larger carbon footprint. But the only way that can happen is if YOU start recycling properly and making sure that all your recyclables go into the recycling.", 
    "Did you bring a reusable water bottle or coffee cup with you today?": "You should always consider switching to a reusable water bottle or coffee mug instead of a single-use one. Using a reusuable one replaces all of the single use cups that you would have used and relieves some of the burden on landfills, oceans and other places where that garbage could end up.", 
    "How much water did you use today?": "Try to limit activities and appliances that use a lot of water. Although it is fine to drink lots of water, wasting it through things such as long showers and water gun fights can ultimately increase the risk of environmental pollution. Saving more water means saving more energy and as water production lowers so does the greenhouse gases.",    
    "Did you participate in any energy-saving practices today, such as using cold water for laundry?": "Small changes like using cold water for laundry loads saves energy in boiling that water, reducing your energy usage.",  
    "How many items did you buy secondhand or borrow instead of purchasing new today?": "Most items sold on 2nd hand markets still have plenty of use in them still. Consider buying 2nd hand reduce shipping, packaging, and manufactoring waste!", 
    "Did you reduce your paper usage by opting for digital communication and notes?": "Use tech you already use to write notes/messages to store digitally. They're good for convience and saving trees.",
    "Did you consciously avoid wasting food by eating leftovers or meal planning?": "Tackle food waste by not binging on items you don't have yet. A filled belly means less food waste and food trips.",
    "How many hours have you spent outdoors enjoying nature today?": "Spend time outside with nature is both good for health and the enviornment. Look into activites that take you away from the office/home where you are more likely to commit enviornmentally unfriendly actions.",
    "Did you avoid excessive packaging by choosing products with minimal packaging?": "Look out for low packaged products. Vegetables and fruits are commonly sold individually.", 
    "How many fruits did you buy that are exported from other countries?": "Exported fruits, ie. bananas from the tro need to travel and longer to get to you than locally produced items. Try to shop locally and buy in-season produce to improve you're carbon footprint!",  
    "For items bought online, do you select fast or regular shipping?": "Regular shipping allows for more packages to be packed before shipping through cargo and delivery trucks, reducing GHG emissions."
}

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
    button.setAttribute("class","response")
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
    options.forEach(option => addOptionButton(questionBody, question, option))
}

function generateQuestion(question)
{
    var questionBody = document.createElement("div")
    questionBody.setAttribute('class','question')
    questionBody.textContent = question
    generateOptions(questionBody,question)
    questionnaire.appendChild(questionBody)
    questionCounter++
}
function generateQuestions()
{
    const selectedQuestions = getRandomQuestions(questionBank,5)
    selectedQuestions.forEach(question => generateQuestion(question))
}

const questionnaire= document.getElementById('questionnaire')
generateQuestions();


function getScoreAndFeedBack()
{
    score = 0 
    feedBackResponses=["Congrats! You're doing a good job keeping a green thumb!"]
    var boxesChecked=0
    var responses = document.querySelectorAll(".response")
    responses.forEach(response=>{
        if (response.checked)
        {
            if(parseInt(response.value)<=10)
            {
                var question = response.parentElement.parentElement.textContent
                question = question.slice(0,question.indexOf("?") +1)
                getFeedBackResponse(question)
            }
            score+= parseInt(response.value)
            boxesChecked++
        }
    })

    if(boxesChecked<5)
    {
        score = "ERROR: Fill in all 5 boxes"
    }
    scoreDisplay.textContent = score
    console.log(feedBackResponses)
    displayFeedback()
}

function getQuestionScoring(question)
{
    var questionScoring = Object.keys(questionBank[question.textContent])
}
function getFeedBackResponse(question)
{
    if(feedBackResponses[0] == "Congrats! You're doing a good job keeping a green thumb!")
    {
        feedBackResponses=[]
    }
    console.log(question)
    feedBackResponses.push(feedBackBank[question])
}


function createFeedBackBlob(response)
{
    var feedBackBlob = document.createElement("div")
    feedBackBlob.setAttribute("class","response")
    feedBackBlob.innerHTML = response
    feedBackHolder.appendChild(feedBackBlob)
}
function displayFeedback()
{
    feedBackHolder.innerHTML = ''
    feedBackResponses.forEach(response => createFeedBackBlob(response))
}
var score=0
var submitButton = document.getElementById('submit');
submitButton.addEventListener("click",getScoreAndFeedBack)
var scoreDisplay = document.getElementById("scoreDisplay")
var feedBackResponses=["Congrats! You're doing a good job keeping a green thumb!"]
var feedBackHolder = document.getElementById("feedBackHolder")