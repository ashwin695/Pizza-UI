const pizzaBases = document.querySelectorAll('.pizza-base img');
const toppings = document.querySelectorAll('.toppings img');
const emptyCircle = document.querySelector('.empty-circle');

let pizzaImage = '';

// Add dragstart event listeners to pizza bases
for (let i = 0; i < pizzaBases; i++) {
  pizzaBases[i].addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.alt);
  });
}

// Add dragover and drop event listeners to empty circle
emptyCircle.addEventListener('dragover', function(event) {
  event.preventDefault();
});

emptyCircle.addEventListener('drop', function(event) {
  const pizzaBase = event.dataTransfer.getData('text/plain');
  pizzaImage = `<img src="${pizzaBase}" alt="${pizzaBase}" class="tops">`;
  emptyCircle.innerHTML = pizzaImage;
  for (let i = 0; i < toppings.length; i++) {
    toppings[i].style.display = 'block';
  }
});

// Add dragstart event listeners to toppings
//for (let i = 0; i < toppings.length; i++) {
  toppings[i].addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.alt);
  });
//}

// Add drop event listener to pizza image
emptyCircle.addEventListener('drop', function(event) {
  const topping = event.dataTransfer.getData('text/plain');
  pizzaImage += `<img src="${topping}" alt="${topping}" class="base">`;
  emptyCircle.innerHTML = pizzaImage;
});
