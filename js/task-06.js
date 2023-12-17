const textInput = document.querySelector('#validation-input')
const requiredLength = textInput.getAttribute('data-length')
textInput.addEventListener('blur', event => {
	if (event.target.value.length == requiredLength) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
	} else {
		textInput.classList.add('invalid')
	}
})
