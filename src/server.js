//Arrays centrais

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "435760982347", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química",
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },

    {
        name: "João Felipe",
        avatar: "https://avatars0.githubusercontent.com/u/65469815?s=460&u=2734362e3b569274e4795592f116ccdceafaf2b8&v=4", 
        whatsapp: "435760982347", 
        bio: "Entusiasta das melhores tecnologias de física avançada. Apaixonado por explicar coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explicações.", 
        subject: "Física",
        cost: "55", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220] 
    },
]

const subjects = [  
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades do backend

function getSubjects(subjectNumber) {
    return subjects[+subjectNumber - 1]
}
function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    
    const filters = req.query //query é os dados do form

    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res) {

    const data = req.query

    const isEmpty = Object.keys(data).length > 0

    if (isEmpty) {
        data.subject = getSubjects(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

//criando caminhos para o site (com o get)

const express = require('express')
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,

})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
