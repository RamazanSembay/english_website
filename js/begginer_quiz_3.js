const quizData = [
    {
        question: "Where does Nichole go in summer?",
        a: "She goes to a big city",
        b: "She goes to her uncle’s farm",
        c: "She goes to her cousin’s hotel",
        correct: "b",
    },

    {
        question: "What time Nichole has breakfast?",
        a: "7.00",
        b: "6.30",
        c: "9.00",
        correct: "a",
    },

    {
        question: "When do they feed animals?",
        a: "in the afternoon",
        b: "after dinner ",
        c: "at night",
        correct: "b",
    },

    {
        question: "What is the name of her cousin?",
        a: "Nichole",
        b: "Macy",
        c: "Jake",
        correct: "b",
    },

    {
        question: "Where do they like spending time?",
        a: "next to river ",
        b: "at home",
        c: "outdoors",
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