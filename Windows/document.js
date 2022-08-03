let val;

// if something has a line drawn through it means it's deprecated and isn't used anymore but still works

val = document.all[1]
val = document.all.length

val = document.head
val = document.body
val = document.doctype // indicates html 5
val = document.domain // gives us the host 127 means local host ipv4
                      // ::1 ipv6
val = document.URL // gives us the whole url
val = document.characterSet // tells us which characterset we use defualt is utf-8
val = document.contentType
val = document.forms[0].id // 0 indexed
val = document.forms[0].method
val = document.forms[0].classList[0] // lists all the classes
val = document.forms[0].className //

val = document.images // gives an array of all the images on the page

val = document.scripts // gives an array of all the scripts on the page
val = document.scripts[0].getAttribute('src') // gets the attribute of the indexed script | example: the source with 'src'

scripts = document.scripts
scriptArr = Array.from(scripts)

console.log(scriptArr)

scriptArr.forEach((script)=> {
    console.log(script.getAttribute('src'))
});

console.log(val)

// const people = [
//     'Lucan',
//     'Paul',
//     'Daniel',
//     'Aldre',
// ]

// people.forEach((person, index) => {    // anonymous function doesnt have a name
//     console.log(person, index)         // runs the function for each item in the array
// })