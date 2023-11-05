const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const list = document.querySelector('#ingredients')
const ingredientsArray = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = ingredient
	ingredientsArray.push(item)
})

list.append(...ingredientsArray)

