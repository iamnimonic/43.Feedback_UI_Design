const icon_container = document.querySelector('.icon-container')
const icons = document.querySelectorAll('.icon')
const button = document.querySelector('.btn')
const container = document.querySelector('.container')

let rated

icon_container.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('icon')){
        removeActive()
        e.target.parentNode.classList.add('focused')
        rated = e.target.parentNode.lastElementChild.innerText
    }
    else if (e.target.classList.contains('icon')) {
        removeActive()
        e.target.classList.add('focused')
        rated = e.target.lastElementChild.innerText
    }
})
 
button.addEventListener('click', (e) => {
    container.innerHTML = ''
    let review = document.createElement('div')
    review.innerHTML = `
    <i style="margin:.5rem;color: red; font-size:2rem;" class="fas fa-heart"></i>
    <p class='review'>Thankyou for taking time and giving us your valuable feedback.
        According to your feedback, you are <b>${rated}</b> with our services.
    </p>
    `
    container.appendChild(review)
})

function removeActive() {
    icons.forEach(el => {
        el.classList.remove('focused')
    })
}