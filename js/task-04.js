let counterValue = 0
const display = document.querySelector('#value')
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')

decrement.addEventListener('click', () => {
    counterValue--
    display.textContent = counterValue;
})

increment.addEventListener('click', () => {
    counterValue++
    display.textContent = counterValue;
})
