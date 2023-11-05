const textInput = document.querySelector('#validation-input')
const requiredLength = textInput.getAttribute('data-length')
console.log(requiredLength)
textInput.addEventListener('blur', event => {
	if (event.target.value.length == requiredLength) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
		textInput.classList.add('invalid')
	}
})
