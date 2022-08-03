const myHeading = document.querySelector('h1')

myHeading.style.color = 'red'

//this is a comment

/*
This
is
a
comment
*/

// 'ctrl + ?' is the shortcut for comments

//variables are inferred

const myConstantVar = 'test' //constant is set and cant change "static"

let changeableVar = 'you can change this value' //"dynamic"

console.log(changeableVar)

changeableVar = 'not testing'

console.log(changeableVar)

var myVariable = 'var'

const myBool = true //boolean is always small letter

const myArray = ['one', 2, true]

const myObject = {
    myKey: 'my Value',
    otherKey: 'other key lol',
    numVal: 69,
    boolVal: false,
    'my-Val': 'some val'
} //defualt sorted alphabetically

const nullVal = null
let undefinedVal;

console.log(myObject.numVal) //['numVal'] also works
console.log(myObject['my-Val'])

console.log(typeof myBool)

const mysketchyArray = {
    0: 'owo',
    1: 'uwu',
    2: '>w<'
}

console.log(mysketchyArray[3])
console.log(myArray)

console.table(myObject)

console.error('something happened')
console.warn('warning!')
console.time('hello time')
    console.log('hello world')
    console.log('hello world')
    console.log('hello world')
    console.log('hello world')
    console.log('hello world')
console.timeEnd('hello time')

//alerts are popups that the user will see
alert('Alert! Coding in progress') //confirm gives a yes / no option

const userConfirmed = confirm('yes or no')

console.log(userConfirmed)

// if statements

// if (true) {
//     console.log('the if condition is true')
// } if else (false) {

// } else {
//     console.log('the if condition is false')
// }

// === checks type and value |  == checked value only
console.log(1 === '1') // is false
console.log( 1 != '1') // is true
console.log(1 >= 0)

// && is AND
// || is OR

if (1 === 1 && typeof true === 'boolean') {
    console.log('if block executed')
}

function myFunc() {
    console.log('hello from my function')
}

myFunc()  //calls and executes the function

// let defName = 'JOK3D'

// function myFunc(myName) {
//     //concat string
//     console.log('Hello, ',  myName)

//     //Template string literal
//     console.log(`Hello, ${myName}`)
// }

// myFunc(defName)

// // Returning function
// function sum(a, b) {
//     return 'Your Total is ' + (a + b)
// }

// const sumTotal = sum(1, 5)
// console.log(sumTotal)

//  const myName = 'JOK3D'
// switch (myName) {
//     case 'JOK3D':
//         console.log('User is Authorized')
// }
