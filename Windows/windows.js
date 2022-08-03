const answer = window.confirm("Are you Sure?")

// if you ever see something around true and false think if statement
if (answer) {
    console.log("you are sure")
} else {
    console.log("you are not sure")
}

// if going through an array think a for statement

// while loop if you are unsure how many times it has to repeat

let val;

val = window.outerHeight  // is the full height including the tabs and url bar
val = window.outerWidth // the whoole size of the window

val = window.innerHeight // is only the inner window excluding the tabs and bar
val = window.innerWidth // 

val = window.scrollY // gives the y position of the scroll bar from the top
                    // great for giving illusions that nav bars move

val = window.scrollX // gives the x position of the scroll bar from the left

val = window.location // represents the url bar info not the geolocation information
// anything after the ? indicates the search

// val = window.history.go(-1) // -1 indicates the amount of websites you're going back

val = window.navigator // gives information about the users operating systema nd additional information

console.log(val)