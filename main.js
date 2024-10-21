//2. Add event listeners for product selection
const prices = document.getElementById('price');
const sizes = document.getElementById('size');
const button = document.getElementById('purchase');


sizes.addEventListener('change', (event) => {
    const selectedData = event.target.options[event.target.selectedIndex];
    const price = selectedData.getAttribute('value');
    prices.textContent = `$${price}`;
    const stock = selectedData.getAttribute('data-Availability');

//3. Handle Stock Availability
    if (stock === 'out-of-stock'){
        button.disabled = true;
    } else {
        button.disabled = false;
    }
});

//4. Checkout Event
button.addEventListener('click', () => {

    const selectedData = sizes.options[sizes.selectedIndex];
    const stock = selectedData.getAttribute('data-availability');

    if (stock === 'in-stock'){
        alert('Purchase Complete!');
    } else {
        alert('Product out of stock and cannot be purchased.');
    }

});