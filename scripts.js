/*---- Reveal remaining product cards after button interaction ----*/

// Declare button to reveal rest of product cards
let revealer = document.querySelector('[data-reveal-button]')
revealer.addEventListener(('click'), (e) => {
    // Prevent default actions
    e.preventDefault();
    //get product cards and remove hidden class to reveal
    let cards = document.querySelectorAll('li')
    cards.forEach((card) => {
        card.classList.remove('hidden')
    })
    // Hide Show More button
    revealer.classList.add('hidden')
    //get section after cards are displayed to get correct height
    let revealedSection = document.querySelector('section')
    //scroll to bottom of section
    revealedSection.scrollIntoView({ behavior: "smooth", block: "end"})
})