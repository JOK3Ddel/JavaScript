// to-do list:
// hint: bubbles
// remove items with the x icon
// remove all items


const addTask = document.querySelector('input.btn')
let input = document.getElementById('task')
let taskVal = input.getAttribute('value')

function addNewTask(taskName) {
    const li = document.createElement('li')

    li.className = "collection-item"
    li.id = 'new-item'
    li.setAttribute('title', 'New Item')
    li.appendChild(document.createTextNode(taskName))

    // Create link 
    // use font awesome to get icons and other graphical elements
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class= "fa fa-remove"></i>'  // gives the html icon the cross

    //Add link to li
    li.appendChild(link) // links the two elements
    
    // Add li to tasks list
    document.querySelector('ul.collection').appendChild(li)  // append child apppends to the bottom

    task.value = ''
    task.focus()
    
}

addTask.addEventListener('click', function(e) {
    addNewTask(taskVal)
    e.preventDefault()
    e.target.reset()
})



