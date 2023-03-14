/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/


//notes.push( 5, 10, 15, 20)   simple push 

//create three strings with stuff to insert into array above

const notes = [
    {
        id: 1,
        text: "Yesterday is gone.",
        author: "MJT",
        date: "2/15/2023",
        topics: ["Milk, Lactose"]
    },
    {
        id: 2,
        text: "Be in the moment",
        author: "Michelle J Totherow",
        date: "2/15/2023",
        topics: ["Dogs, Fleas"]  
    },
    {
        id: 3,
        text: "Focus and forget to worry.",
        author: "Chelle",
        date: "2/15/2023",
        topics: ["Clients, Friends "] 
    }
    ]
    

//const notes = []

// add 3 additions by push method

notes.push({
    id: 4,
    text: "today is my day.",
    author: "MJ TOTHEROW",
    date: "2/15/2023",
    topics: ["coffee, juice"]
})

notes.push({
    id: 5,
    text: "Howdy Yall",
    author: "Michelle J Totherow",
    date: "2/15/2023",
    topics: ["mouse, cat"]
})

notes.push({
    id: 6,
    text: "The new beginning.",
    author: "Chelle",
    date: "2/15/2023",
    topics: ["coping, joy"]
})


// iterate the array with a for of loop to display only text 

for (const note of notes) {
    console.log(note.text)
}



//add topic header

console.log("\n***All Note Topics ***\n")

// for of lopp to iterate over topics

for (const note of notes) {
    for ( const topic of note.topics)
console.log(topic)
}

//  find topic average
// Need to count up all the topics, so start at 0

let topics = ""
let topicCount = 0
let noteCount = 0

for (const note of notes) {
    noteCount ++
    for (const t of note.topics){
        topics += `${t}\n`
        topicCount++
    }
}


//console.log("*** Average Topic Note Articles  ***\n" + topics)
console.log("\n*** Average Topic Note Articles  ***\n" + 
    topicCount / notes.length)


// const totalTopics = 0

// // Iterate all of the notes
// for (const note of notes) {
//     for (const topics of note.topics) {
//         if(topics === criteria){
//             filteredNotes.push(note)
//         }
        
//     }
//     console.log(filteredNotes)
//     /*
//         Increase the value of `totalTopics` by the number
//         of topics on this note
//     */
//     totalTopics = totalTopics +
// }

const filteredNotes = []
const criteria = ""

// for (const note of notes)
// if(note.topics.includes("criteria")){
//     fliteredNotes.push(note) }


for (const note of notes) {
    for (const topics of note.topics) {
        if (topics === criteria) {
            filteredNotes.push(note)
        }
    }
}

console.log(filteredNotes)

console.log("***  Note Articles  ***")



const noteHTML = () => {

    let output = ""

    for (const note of notes) {

        output += `\n<article>${note.text}</artcle>\n`

        for (let t of note.topics) {
            output += `\t<section>${t}</section>\n`
        }
        //output += `</article>\n`
 
}
    return output
}

const html = noteHTML()

console.log(html)

// insert <article> HTML

//const newNote = notes.join("\n<article></article>\n")

//console.log(`<article>${newNote}</article>`)

// section html addition
