const quizdata = [{
    question: 'Who is the Father of nation of india ?',
    a: 'Subash chandra bose',
    b: 'Pandit Jawahar lala nehru',
    c: 'Rajendra prasad',
    d: 'Mahatama Gandhi',
    Correct_answer: 'd'
},
{
    question: 'Who was the First Viceroy of british india ?',
    a: 'Lord Canning',
    b: 'Lord hashting',
    c: 'Lord william',
    d: 'Lord Baten',
    Correct_answer: 'a'
},
{
    question: 'Who is the current president of india ?',
    a: 'Narendra modi',
    b: 'Ramnath kovind',
    c: 'Amit shah',
    d: 'Rahul Gandhi',
    Correct_answer: 'b'
},
{
    question: 'Which is not a neighbouring country of india ?',
    a: 'Nepal',
    b: 'Pakistan',
    c: 'China',
    d: 'Russia',
    Correct_answer: 'd'
},
{
    question: 'Where is Statue of unity located in India ?',
    a: 'Bihar',
    b: 'Delhi',
    c: 'Gujarat',
    d: 'Mumbai',
    Correct_answer: 'c'
}
]

const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizdata[currentQuestion];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answersEls.forEach((answerEl => {
        answerEl.checked = false;
    }))
}

submit.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizdata[currentQuestion].Correct_answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizdata.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You asnwered correctly at ${score}/${quizdata.length} questions.</h2>
            
            <button onClick = "location.reload()">Reload</button>`
        }
    }
    else{
        alert('Please select a option'); 
    }
})