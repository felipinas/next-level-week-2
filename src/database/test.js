const Database = require("./db.js")
const createProffy = require("./createProffy")

Database.then(async (db) => {

    proffyValue = {
        name: "João Felipe",
        avatar: "https://avatars0.githubusercontent.com/u/65469815?s=460&u=2734362e3b569274e4795592f116ccdceafaf2b8&v=4", 
        whatsapp: "435760982347", 
        bio: "Entusiasta das melhores tecnologias de física avançada. Apaixonado por explicar coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explicações."       
    }

    classValue = {
        subject: 1,
        cost: "55"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    
    `)

    //console.log(selectedClassesAndProffys)


    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"

    `)

    console.log(selectClassesSchedules)

})