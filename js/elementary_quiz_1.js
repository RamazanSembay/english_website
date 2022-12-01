const quizData = [
    {
        question: "Where does Nazym go to university?",
        a: "Astana",
        b: "Almaty",
        c: "Kokshetau",
        d: "Aktau",
        correct: "a",
    },

    {
        question: "What is Nazym’s hardest course?",
        a: "Art",
        b: "English",
        c: "Chinese",
        d: "Math",
        correct: "c",
    },

    {
        question: "How old is Nazym’s younger brother?",
        a: "Seven",
        b: "Eleven",
        c: "Fourteen",
        d: "Thirteen",
        correct: "c",
    },

    {
        question: "What does Nazym’s Mom bring her when they visit?",
        a: "Fruits and vegetables",
        b: "Flowers and coffee",
        c: "Sweets and candy",
        d: "Candy and ice cream",
        correct: "c",
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