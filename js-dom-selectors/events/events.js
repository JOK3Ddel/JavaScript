// let val;

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     console.log('hellow world')
//     e.preventDefault()
// })

// console.log(val);

// CLICK EVENTS

// document.querySelector('.clear-tasks').addEventListener('click', onclick)

// function onclick(e) {
//     e.preventDefault()
//     console.log('clicked!')

//     let val

//     val = e
//     val = e.target
//     val = e.target.id
//     val = e.target.className
//     val = e.target.classList
//     e.target.innerText = 'Hello'

//     val = e.type // gives which event type it was
    
//     val = e.timeStamp

//     val = e.clientY
//     val = e.clientX

//     val = e.offsetY
//     val = e.offsetX

//     console.log(val);
// }

// MOUSE EVENTS

// const clearBtn = document.querySelector('.clear-tasks')
// const card = document.querySelector('.card')
// const heading = document.querySelector('h5')

// click
// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('dblclick', runEvent)
// clearBtn.addEventListener('mousedown', runEvent) // m1 hold
// clearBtn.addEventListener('mouseup', runEvent) // on release of m1
// card.addEventListener('mouseenter', runEvent) // moves into the area that has been selected
// card.addEventListener('mouseleave', runEvent) // leaves the area selected
// card.addEventListener('mouseover', runEvent) // everytime you move over an element int hat area
// card.addEventListener('mouseout', runEvent) // everytime you leave an element
// card.addEventListener('mousemove', runEvent) // any mouse movement within the element will trigger it

// function runEvent(e) {
//     e.preventDefault()
//     console.log(`Event Type: ${e.type}`);
//     heading.textContent = `MouseX: ${e.offsetX}
//     MouseY: ${e.offsetY}`
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 55)`
// }

