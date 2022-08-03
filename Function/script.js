
// // Calculator
// function calc(valOne, valTwo, Op) {
//     if (valTwo === 0 && Op === '/') {
//         return 'Invalid second value!'
//     } else {
//         switch (Op) {
//             case '+':
//                 return valOne + valTwo
                
//             case '-':
//                 return valOne - valTwo
                
//             case '*':
//                 return valOne * valTwo
                
//             case '/':
//                 return valOne / valTwo
                
//             default:
//                 return 'Invalid Operator'
                
//         }
//     }

// }

// console.log(calc(10, 30, '/'))



// math functions
function add(a, b) {return (a + b)}
function sub(a, b) {return (a - b)}
function mul(a, b) {return (a * b)}
function div(a, b) {return (a / b)}
// ^ can be improved with arrow functions

const calculatorObj = {
    add,
    sub,
    mul,
    div,
}

const opUserInput = prompt('Type in operation (add, sub, mul, div)')
const valOne = prompt('Type in first value')
const valTwo = prompt('Type in second value')

const answer = calculatorObj[opUserInput](+valOne,+valTwo) // putting plus infront of a number string converts it to int

/*
different ways to convert string to int:
- parseInt()
- Number()
- just adding a plus '+' infront of number string
*/

// alert(answer) //display answer

// converting user operator input into operator symbol
let opSym = ''

switch(opUserInput) {
    case 'add' : 
        opSym = '+'
        break
    case 'sub' :
        opSym = '-'
        break
    case 'mul' :
        opSym = '*'
        break
    case 'div' :
        opSym = "/"
        break
}

html = `
<h1>Calculator</h1>
  <ul>
    <li>First Number: ${valOne}</li>
    <li>Second Number: ${valTwo}</li>
    <li>Operator: ${opSym}</li>
    <li>Answer: ${answer}</li>    
  </ul>
`

document.body.innerHTML = html