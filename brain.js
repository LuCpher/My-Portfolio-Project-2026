const coffeeImages = [
  "images/coffee.png",
  "images/Frame 2.png",
  "images/Frame 3.png",
  "images/Frame 4.png",
  "images/Frame 5.png"
];

let coffeeIndex = 0;

function nextCoffee() {
    coffeeIndex++;
    if (coffeeIndex >= coffeeImages.length) {
        coffeeIndex = 0;
    }
    document.getElementById("coffee-image").src = coffeeImages[coffeeIndex];
}

function prevCoffee() {
    coffeeIndex--;
    if (coffeeIndex < 0) {
        coffeeIndex = coffeeImages.length - 1;
    }
    document.getElementById("coffee-image").src = coffeeImages[coffeeIndex];
}
// aaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhh//