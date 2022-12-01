const quizData = [
    {
        question: "used technology to check how players were sleeping.",
        a: "Nick Littlehales ",
        b: "Chris Haslam ",
        c: "Cheri Mah",
        d: "Alek Gross",
        correct: "b",
    },

    {
        question: "increased sales for his business.",
        a: "Nick Thorpehales ",
        b: "Little Robin",
        c: "Rafael Marquez",
        d: "Sergio Aguero",
        correct: "a",
    },

    {
        question: "studied the effect of sleep on athletic performance",
        a: "Nick Littlehales",
        b: "Alex Ferguson",
        c: "Cheri Mah",
        d: "Robin Thorpe",
        correct: "c",
    },

    {
        question: "invited someone to talk to his team about sleep and bedding.",
        a: "Sergio Aguero",
        b: "Robin Thorpe",
        c: "James Milner",
        d: "Alex Ferguson",
        correct: "d",
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