const quizData = [
    {
        question: "What day is Christmas?",
        a: "December 27th",
        b: "December 31st ",
        c: "December 25th",
        d: "Not given ",
        correct: "c",
    },

    {
        question: "What do people eat at Christmas in England ?",
        a: "Turkey",
        b: "Chicken",
        c: "Roast beef",
        d: "Fish and chips",
        correct: "a",
    },

    {
        question: "What do people send to their friends at Christmas?",
        a: "A message ",
        b: "Cards and gifts",
        c: "Food ",
        d: "Nothing ",
        correct: "b",
    },

    {
        question: "How long do Christmas holidays last for many people?",
        a: "One day ",
        b: "A year ",
        c: "Two days ",
        d: "Two months  ",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
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
    d_text.innerText = currentQuizData.d
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