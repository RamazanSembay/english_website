const quizData = [
    {
        question: "The person is a woman.",
        a: "True",
        b: "False",
        correct: "a",
    },

    {
        question: "She is a television journalist.",
        a: "True",
        b: "False",
        correct: "a",
    },

    {
        question: "She drives her car to work.",
        a: "True",
        b: "False",
        correct: "b",
    },

    {
        question: "She goes home after the programme finishes.",
        a: "True",
        b: "False",
        correct: "a",
    },

    {
        question: "She is in the house alone till her husband arrives home.",
        a: "True",
        b: "False",
        correct: "b",
    },

    {
        question: "She goes to bed early during the week.",
        a: "True",
        b: "False",
        correct: "a",
    },

    {
        question: "She works with her husband.",
        a: "True",
        b: "False",
        correct: "b",
    },

    {
        question: "She likes everything about her job.",
        a: "True",
        b: "False",
        correct: "b",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
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