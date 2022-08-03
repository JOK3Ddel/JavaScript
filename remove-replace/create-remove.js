const newHeading = document.createElement('h2')

newHeading.id = 'task-title'

newHeading.appendChild(document.createTextNode('Task List'))

const oldHeading = document.getElementById('task-title')
const cardAction = document.querySelector('.card-action')

cardAction.replaceChild(newHeading,oldHeading) // (newChild, oldChild)

// REMOVE ELEMENTS

const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

lis[0].remove() // removes it, but comes back when page is reloaded

list.removeChild(lis[0]) // permanently removes the child

// CLASSES & ATTRIBUTES

const firstLi = document.querySelector('li:first-child')



console.log(firstLi.children[0])  //.children shows all child elements

const link = firstLi.children[0]

let val;

// Classes
val = link.className
val = link.classList
// val = link.classList[0] 

link.classList.add('test') // adds a class to the parent
link.classList.remove('test') // removes a class from the list
val = link

//  Attributes
val = link.getAttribute('href')
val = link.setAttribute('href', 'https://www.google.co.za')
link.setAttribute('title', 'Google')
val = link.hasAttribute('href') // returns a boolean value
link.removeAttribute('title')



console.log(val)