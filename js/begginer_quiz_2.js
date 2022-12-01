const quizData = [
    {
        question: "Does Farmer have a son to help?",
        a: "Yes",
        b: "No ",
        c: "Doesn’t say ",
        correct: "c",
    },

    {
        question: "Which animal does Farmer have?",
        a: "rabbit",
        b: "duck",
        c: "ox ",
        correct: "a",
    },

    {
        question: "Where does Farmer live?",
        a: "next to river",
        b: "near to farm ",
        c: "in the city center",
        correct: "b",
    },

    {
        question: "Where does animals live?",
        a: "in the house",
        b: "outside",
        c: "in the barn",
        correct: "c",
    },

    {
        question: "What do animals do?",
        a: "sleep ",
        b: "play",
        c: "swim",
        correct: "a",
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