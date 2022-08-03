let output = document.getElementById("output")
let buttons = Array.from(document.getElementsByClassName("button"))
let calc = ''

output.innerText = '' //clears output

buttons.map( button => {
    button.addEventListener('click', (e) => { 
        switch(e.target.innerText){
            case '=':
                try{
                    output.innerText = eval(output.innerText);
                } catch{
                    output.innerText = 'Invalid Expression!'
                }
                break
            case 'x':
                //output.innerText += '*'
                output.innerText = eval(output.innerText);

                try{
                    calc += output.innerText
                    calc = eval(output.innerText);
                } catch{
                    calc = output.innerText
                    calc += '*'
                    output.innerText = ''
                }

                break
            case '÷':
                output.innerText += '/'
                break
            default:
                output.innerText += e.target.innerText // changes output to inner text of target that has been pressed
        }
    })
})


