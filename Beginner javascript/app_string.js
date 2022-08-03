const firstName = 'Peter'
const lastName = 'Parker'
const age = 30
const str = 'Hello there my name is Paul'
const tags = 'Web,Development,Java,Front-end'

let val

// Concatenation
val = firstName + ' ' + lastName

// Append - add onto
val = 'Paul'
val += 'Grobler'

val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Escaping
// val = 'That's awesome, I can't wait'
val = 'That\'s awesome, I can\'t wait'    // '\' backslash escapes inner single quotes

val = firstName.length

// Concat() method
val = firstName.concat(' ',lastName,)

// Change case

val = firstName.toUpperCase()
val = firstName.toLocaleLowerCase()

// Initials
val = firstName[0]
val = lastName[0]

// indexOf()
val = firstName.indexOf('e')
val = firstName.lastIndexOf('u')   // if character is not found output is -1

// charAt() method
val = firstName.charAt(0) //output is 'P'

val = firstName.charAt(firstName.length-1)   //gets last letter of name

// subString() method
val = firstName.substring(0,3)     //first value is where the substring starts, second value is up to but not including

let test = 'Paul,Grobler'

val = test.substring(0,test.indexOf(','))

// slice() - mainly used in arrays
val = firstName.slice(0,4)
val = firstName.slice(-3)

// split() method
val = tags.split(',')

// replace()
val = str.replace('Paul', 'JOK3D')

// includes() method
val = str.includes('Hello')   //output is a boolean value

// example
if (str.includes('Paul')) {
    str.replace('Paul','JOK3D')
} else {
    val = str
}




console.log(val[0])
console.log(val)