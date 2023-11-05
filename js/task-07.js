const inputSizeControl = document.querySelector('input#font-size-control')
const mainText = document.querySelector('span#text')

inputSizeControl.addEventListener('change', e => {
    mainText.style.fontSize = `${e.target.value }px`
})
