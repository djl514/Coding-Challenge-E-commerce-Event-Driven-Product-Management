const prices = document.getElementById('price');
const sizes = document.getElementById('size');

sizes.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    prices.textContent = `$${selectedPrice}`;
});