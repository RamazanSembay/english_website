const quizData = [
    {
        question: "What kind of restaurant did Ayan and Nazym go to?",
        a: "an Italian restaurant",
        b: "a steak restaurant ",
        c: "a fast food restaurant",
        d: "a pizza restaurant",
        correct: "b",
    },

    {
        question: "What did Ayan and Nazym order to drink?",
        a: "water for Ayan and orange juice for Nazym ",
        b: "beer for Ayan and water for Nazym",
        c: "beer for Ayan and orange juice for Nazym",
        d: "soda for Ayan and beer for Nazym",
        correct: "a",
    },

    {
        question: "What was wrong with Nazym’s order?",
        a: "she got green beans when she wanted a salad",
        b: "she got mashed potatoes when she wanted green beans ",
        c: "she got green beans when she wanted corn",
        d: "she got coleslaw when she wanted green beans",
        correct: "b",
    },

    {
        question: "What do I eat for dinner?",
        a: "Apple",
        b: "Sandwich",
        c: "Pie",
        d: "Soup",
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