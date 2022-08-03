// get all the neccessary elements
const taskInput = document.querySelector('input#task')
const addTask = document.querySelector('input.btn')
const taskForm = document.querySelector('form#task-form')
const tasksList = document.querySelector('ul.collection')
const clearTasksBtn = document.querySelector('a.clear-tasks')

// get tasks from localStorage
const lsTasks = localStorage.getItem('tasks')

// add tasks to DOM
if (lsTasks !== null) {
    const lsTasksArr = JSON.parse(lsTasks)
    lsTasksArr.forEach( task => addTaskToDOM(task))
}

// focus on input on page load
taskInput.focus()

// == CREATES THE HTML FOR TASK ITEM ==
function createTaskElement(taskText) {
    
    const li = document.createElement('li')
    li.className = "collection-item"
    li.setAttribute('data-id', '')
    li.appendChild(document.createTextNode(taskText))

    // Create link 
    // use font awesome to get icons and other graphical elements
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class= "fa fa-remove"></i>'  // gives the html icon the cross

    //Add link to li
    li.appendChild(link) // links the two elements

    return li
}

// Remove the item from local Storage
function removeItemFromStorage(textVal) {
    let tasksArr
    const lsTasks = localStorage.getItem('tasks')
    if (lsTasks === null) {
        tasksArr = []
    } else {
        tasksArr = JSON.parse(lsTasks)
    }

    tasksArr.forEach((taskItem, index) => {
        if (tasksArr[index] === taskItem) {
            // remove item from the array
            tasksArr.splice(index, 1) // splice is used to remove things from arrays (which one, how many)

            localStorage.setItem('tasks', JSON.stringify(tasksArr))

        }
    })
}

function addTaskToLocalStorage(task) {
    // add task to local storage
    // get current tasks
    const lsTasks = localStorage.getItem('tasks')
    let tasksArr

    if (lsTasks === null) { // === same value and type
        tasksArr = []
    } else {
        tasksArr = JSON.parse(lsTasks)
    }

    // append to current tasks
    tasksArr.push(task)  // push appends to an array

    // add tasks to local storage
    localSorage.setItem('tasks', JSON.stringify(tasksArr))
}

function addTaskToDOM(task) {
    // ADD TO DOM
    // create task list element
    const taskListElement = createTaskElement(task)

    // add to takslist
    tasksList.appendChild(taskListElement)
}


// create task function
function addTaskSubmitHandler(event) {
    event.preventDefault()
    const task = taskInput.value

    addTaskToLocalStorage(task)
    addTaskToDOM(task)

    // clear form
    taskForm.reset()
}

// delete tasks function
function clearTasksHandler(event) {
    event.preventDefault()

    // tasksList.innerHTML = ''
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild)
    }

    // remove all tasks from local storage
    localStorage.removeItem('tasks')
}

// == REMOVE A TASK FROM THE DOM == 
function removeTask(event) {
    if (event.target.className.includes('fa-remove')) {
        event.target.parentElement.parentElement.remove() // reversing up the dom
    }
    const textVal = event.target.parentElement.parentElement.innerText
    removeItemFromStorage(textVal)
}


// == SET UP EVENT LISTENERS ==
// addTaskBtn.addEventListener('click', addTask)
taskForm.addEventListener('submit', addTaskSubmitHandler)
tasksList.addEventListener('click', removeTask)
clearTasksBtn.addEventListener('click', clearTasks)