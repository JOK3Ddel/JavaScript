const cards = document.querySelectorAll('.card')

cards.forEach( card => {
    card.addEventListener('click', (e) => {
        e.target.classList.toggle('clicked')
        cards.forEach( card => {
            card.classList.remove('double-clicked')
        })
    })

    card.addEventListener('dblclick', (e) => {
        e.target.classList.toggle('double-clicked')
        
        cards.forEach(card => {
            if (e.target.dataset.cardNumber === card.dataset.cardNumber) { return }

            card.classList.remove('clicked')
            card.classList.remove('double-clicked')
        })
    })
})