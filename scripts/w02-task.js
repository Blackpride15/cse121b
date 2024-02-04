/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Blessing Asukwo';
const currentYear = new Date().getFullYear();
const profilePicture = './images/myimage.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
var imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = (currentYear);
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);





/* Step 5 - Array */

var favoriteFoods = ["Pizza", "Rice", "Chocolate", "Burgers", "Ice Cream"];
foodElement.innerHTML += `<br>${favoriteFoods}`;
const favoriteFood = 'Mushroom'
favoriteFoods.push(favoriteFood)
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods = favoriteFoods.slice(1, favoriteFoods.length)
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop()
foodElement.innerHTML += `<br>${favoriteFoods}`;

