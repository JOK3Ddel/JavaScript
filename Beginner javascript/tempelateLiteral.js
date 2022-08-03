const name = 'Paul'
const age = 30
const job = 'Lecturer'
const city = 'Krugersdorp'

let html

// ES5 Old method
html = '<h1>Personal Information</h1>'+
       '<p>My name is Paul</p>'


// With template literals using back ticks

function hello() {
    return 'Hello JOK3D'
}
// Ternary operator age > 30 ? 'Over 30' : 'Under 30' 
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>    
  </ul>

`

document.body.innerHTML = html