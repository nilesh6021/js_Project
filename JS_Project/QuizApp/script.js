// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

function loadQuestion(index){
    document.querySelector("#question").innerHTML =questions[index].text;
}
loadQuestion(0);
document.querySelector("#submit").addEventListener("click", function() {

});

document.querySelector("#next").addEventListener("click", function() {
});

// let currentQuestionIndex = 0;
// let selectedAnswer = null;
// let score = 0;

// const questionEl = document.getElementById('question');
// const answerListEl = document.getElementById('answer-list');
// const submitButton = document.getElementById('submit');
// const nextButton = document.getElementById('next');

// function showQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//      questionEl.textContent = currentQuestion.text;
//     answerListEl.innerHTML = '';
    
//     // radio button options
//     currentQuestion.options.forEach((option, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//         <label class="option">
//             <input type="radio" name="answer" value="${index}">
//             <span>${option}</span>
//         </label>
//     `;

//     answerListEl.appendChild(li);
       
//     });
    
//     // Reset UI
//     submitButton.style.display = 'inline-block';
//     nextButton.style.display = 'none';
//     selectedAnswer = null;
// }

// submitButton.addEventListener("click", () => {
//     const selectedRadio = document.querySelector('input[name="answer"]:checked');
    
//     if (!selectedRadio) {
//         alert('Please select an answer!');
//         return;
//     }
    
//     selectedAnswer = parseInt(selectedRadio.value);
//     const currentQuestion = questions[currentQuestionIndex];
//     const correctIndex = currentQuestion.correct;
    
//     // Show correct/incorrect feedback
//     answerListEl.querySelectorAll('li').forEach((li, index) => {
//         const radio = li.querySelector('input[type="radio"]');
//         const label = li.querySelector('label');
        
//         if (index === correctIndex) {
//             li.style.backgroundColor = 'rgb(144, 238, 144)';
//         } else if (index === selectedAnswer) {
//             li.style.backgroundColor = 'rgb(255, 182, 193)';
//         }
    
//         radio.disabled = true;
//     });
    
//     // Update score
//     if (selectedAnswer === correctIndex) {
//         score++;
//     }
    
//     // Update buttons
//     submitButton.style.display = 'none';
//     nextButton.style.display = 'inline-block';
// });

// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
    
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         // Quiz completed
//         questionEl.innerHTML = `
//             <strong>Quiz Completed!</strong><br><br>
//             Your score: ${score} / ${questions.length} (${Math.round((score / questions.length) * 100)}%)
//         `;
//         answerListEl.innerHTML = '';
//         submitButton.style.display = 'none';
//         nextButton.innerHTML = 'Restart';
//         nextButton.style.display = 'inline-block';
//         nextButton.onclick = () => {
//             currentQuestionIndex = 0;
//             score = 0;
//             nextButton.innerHTML = 'Next';
//             showQuestion();
//         };
//     }
// });

// // Start the quiz
// showQuestion();