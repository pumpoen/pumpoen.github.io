
var quiz = [];
var currentQuiz; 
var quizScore;

var introvert = 0; 
var extrovert = 0;
var reserved = 0;
var outgoing = 0;

function init() {
    quizScore = 0;
    currentQuiz = 0;
    // hide all the things
    document.getElementById("pgQuiz").style.display = "none";
    document.getElementById("QuizResults").style.display = "none";
}

function loadQuiz() {//fix this 
    var Question1 = {qID:"1", questiontext:"1. do you prefer to do things by yourself or with others?", answer1:"myself", answer2:"mostly myself", answer3:"mostly others", answer4:"others", introvertAnswer: "1", partialIntrovertAnswer: "2", partialExtrovertAnswer: "3", extrovertAnswer: "4", asked:"false"};
    
    var Question2 = {qID:"2", questiontext:"2. which option sounds the best to you?", answer1:"making a simple presentation by myself", answer2:"making an extravegent presentation alone", answer3:"making a simple presentation with friends", answer4:"making an extravegent presentation with friends", introvertAnswer: ("1" && "2"), reservedAnswer: ("1" && "3"), extrovertAnswer: ("3" && "4"), outgoingAnswer: ("2" && "4"), asked:"false"};
    
    var Question3 = {qID:"3", questiontext:"3. which room style would you prefer?", answer1:"something simple that just serves a function i don't really care", answer2:"something simple but maybe a few decorations", answer3:"something decorated a fair bit but not over the top", answer4:"the most over the top gaudy room youve ever seen", reservedAnswer: "1", partialReservedAnswer: "2", partialOutgoingAnswer: "3", outgoingAnswer: "4", asked:"false"};
    
    var Question4 = {qID:"4", questiontext:"4. which color set do you like most", answer1:"warm pastels", answer2:"warm neons", answer3:"cold pastels", answer4:"cold neons", introvertAnswer: ("1" && "3"), reservedAnswer: ("1" && "3"), extrovertAnswer: ("2" && "4"), outgoingAnswer: ("2" && "4"), asked:"false"};
    
    quiz[0] = Question1;
    quiz[1] = Question2;
    quiz[2] = Question3;
    quiz[3] = Question4;
    
}
function personalityType() {
        if(quiz[currentQuiz].introvertAnswer == (selectedAnswer)) 
            {++introvert;}
        if(quiz[currentQuiz].partialIntrovertAnswer == (selectedAnswer)) 
            {introvert = introvert+0.5;}
        if(quiz[currentQuiz].extrovertAnswer == (selectedAnswer)) 
            {++extrovert;}
        if(quiz[currentQuiz].partialExtrovertAnswer == (selectedAnswer)) 
            {extrovert = extrovert+0.5;}
//reserved and outgoing
        if(quiz[currentQuiz].reservedAnswer == (selectedAnswer)) 
            {++reserved;}
        if(quiz[currentQuiz].partialReservedAnswer == (selectedAnswer)) 
            {reserved = reserved+0.5;}
        if(quiz[currentQuiz].outgoingAnswer == (selectedAnswer)) 
            {++outgoing;}
        if(quiz[currentQuiz].partialOutgoingAnswer == (selectedAnswer)) 
            {outgoing = outgoing+0.5;}
    }


function checkAnswer() {
    var answer = document.getElementsByName("answer");
    var selectedAnswer = 0;
    
    for(var i = 0; i < answer.length; i++) {
        if(answer[i].checked)
           selectedAnswer = answer[i].value;
    }    
    if(selectedAnswer == "") {
        alert("hey dummy go back and pick an answer before you move on.");
        return false;}
    else {
//introvert v. extrovert

        if(quiz[currentQuiz].introvertAnswer == (selectedAnswer)) 
            {++introvert;}
        if(quiz[currentQuiz].partialIntrovertAnswer == (selectedAnswer)) 
            {introvert = introvert+0.5;}
        if(quiz[currentQuiz].extrovertAnswer == (selectedAnswer)) 
            {++extrovert;}
        if(quiz[currentQuiz].partialExtrovertAnswer == (selectedAnswer)) 
            {extrovert = extrovert+0.5;}
//reserved and outgoing
        if(quiz[currentQuiz].reservedAnswer == (selectedAnswer)) 
            {++reserved;}
        if(quiz[currentQuiz].partialReservedAnswer == (selectedAnswer)) 
            {reserved = reserved+0.5;}
        if(quiz[currentQuiz].outgoingAnswer == (selectedAnswer)) 
            {++outgoing;}
        if(quiz[currentQuiz].partialOutgoingAnswer == (selectedAnswer)) 
            {outgoing = outgoing+0.5;}
  }
    quiz[currentQuiz].asked = "true";
    nextQuestion();
}

function nextQuestion() 
{
    //uncheck previous ansewer
    document.getElementById("OptAnswer1").checked = false;
    document.getElementById("OptAnswer2").checked = false;
    document.getElementById("OptAnswer3").checked = false;
    document.getElementById("OptAnswer4").checked = false;
    //count how many questions are true
    var numberAsked = 0;
    // currentQuiz = (Math.floor((Math.random() * 4) + 1)) - 1;
    for(var i = 3;i >= 0; i--) {
        if(quiz[i].asked == "true") {
            numberAsked++;
        } else {
            currentQuiz = i;
        }
    }
    //display question and answers
   if(numberAsked == 4) { // quiz over
       //show results on page
       ResultsInfo();
   } else {
       
    document.getElementById("question").innerHTML=quiz[currentQuiz].questiontext;
    document.getElementById("answerPos1").innerHTML=quiz[currentQuiz].answer1;
    document.getElementById("answerPos2").innerHTML=quiz[currentQuiz].answer2;
    document.getElementById("answerPos3").innerHTML=quiz[currentQuiz].answer3;
    document.getElementById("answerPos4").innerHTML=quiz[currentQuiz].answer4;
    }
}

function resetQuiz() 
{
   init();
   document.getElementById("pgMainMenu").style.display = "inline";
  introvert = 0; 
  extrovert = 0;
  reserved = 0;
  outgoing = 0;
}

function startQuiz()
{
    document.getElementById("pgMainMenu").style.display = "none";
    document.getElementById("pgQuiz").style.display = "inline";
    loadQuiz();
    nextQuestion();
}

function ResultsInfo() {
    document.getElementById("pgQuiz").style.display = "none";
    document.getElementById("QuizResults").style.display = "inline"; 
    if (introvert > extrovert && reserved > outgoing) {document.getElementById("QuizScore").innerHTML="Your result is... <b>" + "introverted and reserved" + "</b>"}
      else if (introvert > extrovert && outgoing > reserved) {document.getElementById("QuizScore").innerHTML="Your result is... <b>" + "introverted and outgoing" + "</b>"}
     else if (extrovert > introvert && reserved > outgoing) {document.getElementById("QuizScore").innerHTML="Your result is... <b>" + "extroverted and reserved" + "</b>"}
     else if (extrovert > introvert && outgoing > reserved) {document.getElementById("QuizScore").innerHTML="Your result is... <b>" + "extroverted and outgoing" + "</b>"}
      else {document.getElementById("QuizScore").innerHTML="Your result is... <b>" + "oops i messed something up in the code come back in a moment" + "</b>"}
}

window.setInterval(function(){
  document.getElementById("introvert").innerHTML = "Introvert " + introvert; 
  document.getElementById("extrovert").innerHTML = "Extrovert " + extrovert; 
  document.getElementById("reserved").innerHTML = "Reserved " + reserved; 
  document.getElementById("outgoing").innerHTML = "Outgoing " + outgoing; 

  
}, 50);


