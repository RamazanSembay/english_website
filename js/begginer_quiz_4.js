const quizData = [
    {
        question: "What kind of an organisation is it?",
        a: "It is a slumber party",
        b: "It is a costume party",
        c: "It is a dance party",
        correct: "b",
    },

    {
        question: "When is the party?",
        a: "It is a fancy dress party",
        b: "On Wednesday",
        c: "It is next Saturday",
        correct: "c",
    },

    {
        question: "Whose party is it?",
        a: "It is Sarah’s party ",
        b: "It is Judy’s party",
        c: "It is Harry Potter’s party",
        correct: "a",
    },

    {
        question: "Who is going to be a DJ?",
        a: "her mom",
        b: "John",
        c: "Harry",
        correct: "b",
    },

    {
        question: "Who is going to decorate the house?",
        a: "Sarah",
        b: "Melissa",
        c: "Sam",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answerEl
    answerEls.forEach(answerEls => {
        if (answerEls.checked) {
            answer = answerEls.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You have answered ${score}/${quizData.length} of the question right now</h2>

            <button onclick="location.reload()">Reload</button>`
        }
    }
})