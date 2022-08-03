// document.getElementById()

// console.log(document.getElementsById('task-title'))

// document.getElementById('task-title').innerText = 'My Tasks'

// console.log(document.getElementById('task-title').className)  // returns the class name // classes are seperated by spaces

// const taskTitle = document.getElementById('task-title')

// taskTitle.style.backgroundColor = 'yellow'
// taskTitle.style.color = 'white'
// taskTitle.style.padding = '5px'
// taskTitle.style.display = 'none'

// // Change content
// taskTitle.textContent = 'Task List'
// taskTitle.innerText = 'My Tasks'
// taskTitle.innerHTML = '<span style="color: red"> Task List </span>'

// // document.querySelector()

// console.log(document.querySelector('#task-title')) // works like a css selector using the # or . infront of it
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h5'))

// document.querySelector('ul li').style.color = 'red' // using li or ul li it only changes the first one that it finds
// document.querySelector('li:nth-child(3)').style.color = 'blue'
// document.querySelectorAll('ul li:nth-child(odd)').style.backgroundColor = '#ccc'
// document.querySelectorAll('ul li:nth-child(even)').style.backgroundColor = '#f4f4f4'

// document.getElementsByClassName

// classe smultible times and id's only once

// const items = document.getElementsByClassName('collection-item')



// // console.log(items)
// console.log(items[0])
// items[0].style.color = 'red'
// items[3].textContent = 'hello'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

// console.log(listItems)

// // documents.getElementsByTagName
// let lis = document.getElementsByTagName('li')

// lis = Array.from(lis)
// lis.reverse()

// lis.forEach((item, index) => {
//     console.log(`Index: ${index} ${item.innerText}`)
//     item.textContent = `List Item ${++index}`

//     const randomRed = Math.floor(Math.random() * 256)
//     const randomGreen = Math.floor(Math.random() * 256)
//     const randomBlue = Math.floor(Math.random() * 256)


//     // // random colors through array
//     // const colors = [
//     //     'red',
//     //     'blue',
//     //     'green',
//     //     'cyan',
//     //     'pink',
//     //     'purple'
//     // ]

//     item.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`

//     // item.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]

// });

// // console.log(lis)


// // document.querySelectorAll()
// const items = document.querySelectorAll('ul.collection li.collection-item')

// console.log(items)

// items.forEach((item, index) => {
//     item.textContent = `${index}: Hello`
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)')
// const liEven = document.querySelectorAll('li:nth-child(even)')

// liOdd.forEach((li, index) => {
//     li.style.backgroundColor = '#ccc'
// })

// liEven.forEach((li, index) => {
//     li.style.backgroundColor = '#f4f4f4'
// })

// document.createElement() is more performant