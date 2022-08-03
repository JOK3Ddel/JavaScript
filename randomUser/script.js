const cardContainer = document.querySelector('#user-cards')

// // xhr
// const xhr = new XMLHttpRequest()

// xhr.addEventListener('loadend', () => {
//     console.log(xhr.status);
//     console.log(xhr.readyState);

//     const response = xhr.response
//     const data = JSON.parse(response)

//     addUsersToDOM(data.results)
// })

// // 
// xhr.open('GET', 'https://randomuser.me/api/?results=10')
// xhr.send()


// fetch
fetch("https://randomuser.me/api/?results=10")
    .then((res) => {
        // console.log(res.json())

        return res.json() // gets us the response
    })
    .then((data) => {
        console.log(data) // displays the data

        addUsersToDOM(data.results)
        console.log(data.results);
    })
    .catch((error) => {
        alert('Something went wrong!')
        console.log(error)
    })


// function for users to cards
function addUsersToDOM(users) {
    let cardElements = ''

    users.forEach(user => {
        cardElements += `
        <article class="card">
            <img src="${user.picture.thumbnail}" alt="${user.name.first}">
            <span>${user.name.first} ${user.name.last}</span>
            <span>${user.name.title}</span>
            <span>${user.cell}</span>
            <span>${user.email}</span>
        </article>`
    });

    cardContainer.innerHTML = cardElements
}



// net ninja