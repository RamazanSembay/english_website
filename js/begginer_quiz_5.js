const quizData = [
    {
        question: "Andriy has been interested in cars since …",
        a: "2007",
        b: "hi started driving",
        c: "very young age ",
        correct: "c",
    },

    {
        question: "Whom did he help to fix cars?",
        a: "to mechanics",
        b: "no one",
        c: "to his father",
        correct: "c",
    },

    {
        question: "Does Andriy have his own shop?",
        a: "yes",
        b: "no",
        c: "doesn’t say",
        correct: "a",
    },

    {
        question: "What is he dreaming about?",
        a: "to be rich",
        b: "run the car shop with family",
        c: "have a big family",
        correct: "b",
    },

    {
        question: "Which of the following statements is wrong?",
        a: "Andriy likes AC Milan football club",
        b: "Andriy’s girlfriend likes cars",
        c: "Andriy is a football player ",
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