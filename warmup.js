const title = "My First Note";
const isPinned = false;
const tags = ["personal", "todo"];

console.log(title, typeof title);
console.log(isPinned, typeof isPinned);
console.log(tags, typeof tags);



const makeNote = (title, content) => {
    return {
        title,
        content,
        createdAt: new Date()
    };
};

console.log(makeNote("Groceries", "Milk, Eggs, Bread"));


const notes = [
    {
        title: "Groceries",
        content: "Milk, Eggs"
    },
    {
        title: "Workout",
        content: "Leg Day"
    },
    {
        title: "Reading",
        content: "Finish Chapter 3"
    }
];

const noteTitles = notes.map((note) => note.title);

console.log(noteTitles);


const { title: noteTitle, content } = notes[0];

console.log(`${noteTitle}: ${content}`);



async function getSampleData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();

    console.log(data);
}

getSampleData();