// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was
// capitalized

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function camelling(array, camel) {

    array.forEach(word => {
        word = word.replace(word[0], word[0].toUpperCase())
        // console.log(word);
        camel += word
    });

    return camel
}

function changeToCamel(input) {
    const mule = input;
    let camel = "";

    // checks for dashes
    if (mule.search("-") > 0) {
        const muleArr = mule.split("-")
        firstW = muleArr[0]

        // checks if first word's letter is lower case
        if (firstW[0] === firstW[0].toLowerCase()) {
            camel += firstW
            muleArr.splice(0,1)
            camel = camelling(muleArr, camel)
        } else {
            camel = camelling(muleArr, camel)
        }
        
    // checks for underscores
    } else if (mule.search("_") > 0) {
        const muleArr =  mule.split("_")
        firstW = muleArr[0]
        // checks if first word's letter is lower case
        if (firstW[0] === firstW[0].toLowerCase()) {
            camel += firstW
            muleArr.splice(0,1)
            camel = camelling(muleArr, camel)
        } else {
            camel = camelling(muleArr, camel)
        }
    }

    return camel;
}