// Create an empty array to store cart items
let cart = [];

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".add-btn");
//remove from cart buttons
const removeButtons = document.querySelectorAll(".rmv-btn");
// Select the cart list
const cartItems = document.querySelector("#cart-items");
// Select the total price
const total = document.querySelector("#total");
// Select the Clear Cart button
const clearCart = document.querySelector("#clear-cart");

// ADD ITEM TO CART
// Loop through every button
buttons.forEach(function (button) {
  // Listen for a click on each button
  button.addEventListener("click", function () {
    // Get product name from the button
    const name = button.dataset.name;
    // Get product price from the button
    const price = Number(button.dataset.price);
    // Create an object
    const product = {
      name: name,
      price: price,
    };
    // Add object to the cart array
    cart.push(product);
    // Update the cart on the webpage
    displayCart();
  });
});

// DISPLAY CART
function displayCart() {
  // Clear old cart items
  cartItems.innerHTML = "";
  // Start total at zero
  let totalPrice = 0;
  // Loop through every product in the cart
  cart.forEach(function (product) {
    // Create a new list item
    const li = document.createElement("li");
    // Show product name and price
    li.textContent = product.name + " - Ksh " + product.price;
    // Add item to the webpage
    cartItems.appendChild(li);
    // Add price to total
    totalPrice += product.price;
  });

  // Display total price
  total.textContent = totalPrice;
}

// CLEAR CART
clearCart.addEventListener("click", function () {
  // Empty the array
  cart = [];

  // Update the webpage
  displayCart();
});

// REMOVE ITEM FROM CART
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const productIndex = cart.findIndex(function (item) {
      return item.name === name && item.price === price;
    });
    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
      displayCart();
    }
  });
});
