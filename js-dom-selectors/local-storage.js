// Local Storage
localStorage.setItem('name', 'Paul')
localStorage.setItem('age', '30')

localStorage.removeItem('age')  // only have to provide the key
const name = localStorage.getItem('name')

localStorage.clear()  // manually clearing

// Session Storage
sessionStorage.setItem('name', 'Sarah')

const tasks = [
    'one',
    'two',
    'three',
]

localStorage.setItem('tasks', tasks)

const localTasks = localStorage.getItem('tasks')
