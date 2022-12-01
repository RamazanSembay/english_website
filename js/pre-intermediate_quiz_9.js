const quizData = [
    {
        question: "Bournville is … ",
        a: "a village and a chocolate bar ",
        b: "a river",
        c: "the founder of a chocolate factory",
        d: "a chocolate factory",
        correct: "a",
    },

    {
        question: "Bournville takes its name from what language…",
        a: "a local town",
        b: "a French word ",
        c: "a kind of French chocolate",
        d: "a French town",
        correct: "b",
    },

    {
        question: "The extract shows that the Cadbury family were …",
        a: "careful and tidy ",
        b: "mean and evil ",
        c: "kind and original",
        d: "sporty and active ",
        correct: "c",
    },

    {
        question: "Who can live in special homes for many people in Bournville now?",
        a: "chocolate factory workers",
        b: "old people and people with learning problems",
        c: "first-time buyers and homeowners ",
        d: "single people",
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