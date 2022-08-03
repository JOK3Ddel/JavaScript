// const form = document.querySelector('form')
// const taskInput = document.getElementById('task')
// const heading = document.querySelector('h5')
// const select = document.querySelector('select')

// taskInput.value = ''

// // taskInput.addEventListener('keydown', runEvent)
// // taskInput.addEventListener('keyup', runEvent) // use when having dynamic value, updates most recently
// // taskInput.addEventListener('keypress', runEvent) // checks when a key is pressed inside the element
// // taskInput.addEventListener('focus', runEvent) // runs on when the element is focused
// // taskInput.addEventListener('blur', runEvent) // runs on when the element is unfocused
// // taskInput.addEventListener('cut', runEvent) // runs when someone cuts something from the element
// // taskInput.addEventListener('paste', runEvent) // runs when something is pasted into the element
// // taskInput.addEventListener('input', runEvent) // any type of input will be classified as an input

// select.addEventListener('change', runEvent) // only runs when the select value is changed
// select.addEventListener('submit', runEvent) // runs on the form submit

// function runEvent(e) {
//     e.preventDefault()
//     console.log(`Event Type: ${e.type}`);
//     console.log(e.target.value);

//     if (e.type === "focus" ) {
//         taskInput.style.borderColor = 'red'
//     } else {
//         taskInput.style.borderColor = 'initial'
//     }
// }

// defualt behaviour runs the action attribute assigned to the parent