const quizData = [
    {
        question: "My favorite beach is located in...",
        a: "in Burabay ",
        b: "in the city centre ",
        c: "Alatay Beach ",
        d: "beyond the city",
        correct: "d",
    },

    {
        question: "How many shells did I find last year?",
        a: "Twelve",
        b: "Five",
        c: "Fifty ",
        d: "Fifteen",
        correct: "d",
    },

    {
        question: "What do I want to learn this year?",
        a: "Sailing",
        b: "Surfing",
        c: "Swimming ",
        d: "How to find shells",
        correct: "b",
    },

    {
        question: "Where did I put my shells last year?",
        a: "In a box",
        b: "In my room",
        c: "In Almaty",
        d: "In the garage",
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