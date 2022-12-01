const quizData = [
    {
        question: "Which city is described in the topic?",
        a: "Aktay",
        b: "Astana ",
        c: "Almaty",
        correct: "b",
    },

    {
        question: "Where you can go for a walk?",
        a: "Shops",
        b: "Library",
        c: "Park",
        correct: "c",
    },

    {
        question: "With whom you can go to park?",
        a: "Parents",
        b: "Teachers",
        c: "Sisters and brothers",
        correct: "a",
    },

    {
        question: "When do children go to sport institutions?",
        a: "When they are tired",
        b: "After school lesson",
        c: "In the morning",
        correct: "b",
    },

    {
        question: "Our town is…",
        a: "New",
        b: "Big",
        c: "Interesting ",
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